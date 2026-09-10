var SUPABASE_URL = 'https://uskghrkzxxdfvwmywjdc.supabase.co';
var SUPABASE_KEY = 'sb_publishable_QqYirR-QC09cM_X1A1jxng_UHMeB9iw';

window.requestAnimationFrame(function () {
  window.game = new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);

  var lb = new LeaderboardManager(SUPABASE_URL, SUPABASE_KEY);
  lb.init();
});
