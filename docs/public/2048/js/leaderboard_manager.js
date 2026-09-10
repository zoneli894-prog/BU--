function LeaderboardManager(supabaseUrl, supabaseKey) {
  this.supabaseUrl = supabaseUrl;
  this.supabaseKey = supabaseKey;
  this.playerName = localStorage.getItem('lb_playerName') || '';
  this.bestSubmitted = parseInt(localStorage.getItem('lb_bestSubmitted') || '0');
  this.playerId = this.getPlayerId();
}

LeaderboardManager.prototype.getPlayerId = function () {
  var id = localStorage.getItem('lb_playerId');
  if (!id) {
    id = 'p_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 8);
    localStorage.setItem('lb_playerId', id);
  }
  return id;
};

LeaderboardManager.prototype.init = function () {
  var self = this;

  if (!this.supabaseUrl || !this.supabaseKey) {
    this.showError('未配置 Supabase，请填入 API 密钥。');
    return;
  }

  var nameInput = document.getElementById('player-name-input');
  if (nameInput) {
    if (this.playerName) {
      nameInput.value = this.playerName;
    }
    nameInput.addEventListener('change', function () {
      self.playerName = this.value.trim() || '';
      localStorage.setItem('lb_playerName', self.playerName);
    });
  }

  var uploadBtn = document.getElementById('lb-upload-btn');
  if (uploadBtn) {
    uploadBtn.addEventListener('click', function () {
      self.onUploadClick();
    });
  }

  this.fetch();
};

LeaderboardManager.prototype.showError = function (msg) {
  var list = document.querySelector('.leaderboard-list');
  if (list) {
    list.innerHTML = '<li class="lb-empty">⚠️ ' + msg + '</li>';
  }
};

LeaderboardManager.prototype.showToast = function (msg) {
  var toast = document.getElementById('lb-toast');
  if (toast) toast.remove();

  toast = document.createElement('div');
  toast.id = 'lb-toast';
  toast.className = 'lb-toast';
  toast.textContent = msg;
  document.body.appendChild(toast);

  setTimeout(function () {
    if (toast.parentNode) toast.remove();
  }, 3000);
};

LeaderboardManager.prototype.getCurrentScore = function () {
  if (window.game && typeof window.game.score !== 'undefined') {
    return window.game.score;
  }
  return this.bestSubmitted;
};

LeaderboardManager.prototype.onUploadClick = function () {
  var score = this.getCurrentScore();

  if (score <= this.bestSubmitted) {
    this.showToast('最高分还没有更新，请继续努力！');
    return;
  }

  this.showConfirmDialog(score);
};

LeaderboardManager.prototype.fetch = function () {
  var self = this;
  var url = this.supabaseUrl + '/rest/v1/leaderboard?select=*&order=score.desc&limit=20';

  fetch(url, {
    headers: {
      'apikey': this.supabaseKey,
      'Authorization': 'Bearer ' + this.supabaseKey
    }
  })
  .then(function (r) {
    if (!r.ok) {
      return r.text().then(function (body) {
        throw new Error('HTTP ' + r.status + ': ' + body);
      });
    }
    return r.json();
  })
  .then(function (data) {
    self.render(data);
  })
  .catch(function (err) {
    var msg = err.message || String(err);
    console.error('排行榜加载失败:', msg);
    self.showError(msg);
  });
};

LeaderboardManager.prototype.render = function (data) {
  var list = document.querySelector('.leaderboard-list');
  if (!list) return;

  list.innerHTML = '';

  if (!Array.isArray(data) || data.length === 0) {
    list.innerHTML = '<li class="lb-empty">暂无排行，快来抢占第一名！</li>';
    return;
  }

  var self = this;

  data.forEach(function (item, index) {
    var li = document.createElement('li');
    var rank = index + 1;
    var isMine = item.player_id && item.player_id === self.playerId;
    var timeStr = item.created_at ? formatTime(item.created_at) : '';

    li.innerHTML =
      '<span class="lb-rank lb-rank-' + rank + '">' + rank + '</span>' +
      '<span class="lb-info">' +
        '<span class="lb-name">' + escapeHtml(item.player_name || '?') + '</span>' +
        (timeStr ? '<span class="lb-time">' + timeStr + '</span>' : '') +
      '</span>' +
      '<span class="lb-score">' + (item.score || 0) + '</span>';

    if (isMine) {
      var delBtn = document.createElement('span');
      delBtn.className = 'lb-del';
      delBtn.title = '删除我的记录';
      delBtn.textContent = '✕';
      delBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        if (confirm('确定要删除你的这条排行记录吗？')) {
          self.deleteEntry(item.id);
        }
      });
      li.appendChild(delBtn);
    }

    list.appendChild(li);
  });
};

LeaderboardManager.prototype.deleteEntry = function (entryId) {
  var self = this;
  var url = this.supabaseUrl + '/rest/v1/leaderboard?id=eq.' + entryId;

  fetch(url, {
    method: 'DELETE',
    headers: {
      'apikey': this.supabaseKey,
      'Authorization': 'Bearer ' + this.supabaseKey
    }
  })
  .then(function () {
    self.fetch();
  })
  .catch(function (err) {
    console.error('删除失败:', err);
  });
};

LeaderboardManager.prototype.showConfirmDialog = function (score) {
  var self = this;

  var overlay = document.getElementById('lb-confirm-overlay');
  if (overlay) overlay.remove();

  overlay = document.createElement('div');
  overlay.id = 'lb-confirm-overlay';
  overlay.className = 'lb-confirm-overlay';

  overlay.innerHTML =
    '<div class="lb-confirm-box">' +
    '  <p class="lb-confirm-title">🎉 得分：' + score + '</p>' +
    '  <p class="lb-confirm-desc">输入你的名字，上传到排行榜！</p>' +
    '  <input type="text" id="lb-confirm-name" placeholder="输入你的名字" maxlength="12" value="' + escapeHtml(this.playerName) + '">' +
    '  <div class="lb-confirm-btns">' +
    '    <button id="lb-confirm-cancel">取消</button>' +
    '    <button id="lb-confirm-ok">确认上传</button>' +
    '  </div>' +
    '</div>';

  document.body.appendChild(overlay);

  var nameInput = document.getElementById('lb-confirm-name');
  nameInput.focus();
  nameInput.select();

  document.getElementById('lb-confirm-cancel').addEventListener('click', function () {
    overlay.remove();
  });

  document.getElementById('lb-confirm-ok').addEventListener('click', function () {
    var name = nameInput.value.trim() || '匿名玩家';
    self.playerName = name;
    localStorage.setItem('lb_playerName', name);
    overlay.remove();
    self.doSubmit(score, name);
  });

  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) overlay.remove();
  });
};

LeaderboardManager.prototype.doSubmit = function (score, name) {
  var self = this;
  var url = this.supabaseUrl + '/rest/v1/leaderboard';

  fetch(url, {
    method: 'POST',
    headers: {
      'apikey': this.supabaseKey,
      'Authorization': 'Bearer ' + this.supabaseKey,
      'Content-Type': 'application/json',
      'Prefer': 'return=minimal'
    },
    body: JSON.stringify({
      player_name: name,
      score: score,
      player_id: this.playerId
    })
  })
  .then(function () {
    self.bestSubmitted = score;
    localStorage.setItem('lb_bestSubmitted', score);
    self.fetch();
  })
  .catch(function () {});
};

function escapeHtml(text) {
  var div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function formatTime(isoStr) {
  var d = new Date(isoStr);
  var month = d.getMonth() + 1;
  var day = d.getDate();
  var h = d.getHours();
  var m = d.getMinutes();
  if (m < 10) m = '0' + m;
  return month + '/' + day + ' ' + h + ':' + m;
}
