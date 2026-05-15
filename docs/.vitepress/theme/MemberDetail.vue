<template>
  <div class="member-detail-header">
    <div class="member-detail-avatar">{{ name[0] }}</div>
    <div class="member-detail-info">
      <h1 class="member-detail-name">{{ name }}</h1>
      <p class="member-detail-role">{{ role }}</p>
      <p class="member-detail-quote">"{{ quote }}"</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: { type: String, required: true },
  role: { type: String, required: true },
  quote: { type: String, required: true },
})
</script>

<style scoped>
.member-detail-header {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem 0 2.5rem;
  border-bottom: 2px solid var(--bu-border);
  margin-bottom: 2rem;
}

.member-detail-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--bu-navy), var(--bu-navy-light));
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--bu-gold);
  font-size: 2.5rem;
  font-weight: 700;
  border: 4px solid var(--bu-gold-light);
  flex-shrink: 0;
}

.member-detail-info {
  flex: 1;
}

.member-detail-name {
  font-size: 2rem;
  font-weight: 800;
  color: var(--bu-navy);
  margin: 0 0 0.25rem;
}

.member-detail-role {
  font-size: 1rem;
  color: var(--bu-gold-dark);
  font-weight: 600;
  margin: 0 0 0.75rem;
}

.member-detail-quote {
  font-size: 1rem;
  color: var(--bu-text-light);
  font-style: italic;
  margin: 0;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .member-detail-header {
    flex-direction: column;
    text-align: center;
  }

  .member-detail-avatar {
    width: 100px;
    height: 100px;
    font-size: 2rem;
  }

  .member-detail-name {
    font-size: 1.5rem;
  }
}
</style>
