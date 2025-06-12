<template>
  <section class="features">
    <div v-for="(feature, index) in features" :key="index" class="feature-card hidden">
      <div class="feature-icon"><i :class="feature.icon"></i></div>
      <h3 class="feature-title">{{ feature.title }}</h3>
      <p class="feature-desc">{{ feature.description }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Features',
  data() {
    return {
      features: [
        {
          icon: 'fas fa-chart-line',
          title: 'Лучший курс на рынке',
          description: 'Мы анализируем десятки бирж, чтобы предложить вам самый выгодный курс.'
        },
        {
          icon: 'fas fa-exchange-alt',
          title: '1000+ сделок в день',
          description: 'Тысячи пользователей доверяют нам свои транзакции ежедневно.'
        },
        {
          icon: 'fas fa-bolt',
          title: 'Мгновенный обмен',
          description: 'Среднее время обмена — менее 3 минут.'
        },
        {
          icon: 'fas fa-headset',
          title: 'Поддержка 24/7',
          description: 'Наша команда всегда на связи в Telegram.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.features {
  padding: 5rem 5%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: var(--glass);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 2rem;
  transition: transform 0.3s;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    transform: translateY(-10px);
    border-color: var(--primary);
  }
}

.feature-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--primary);
}

.feature-title {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.feature-desc {
  opacity: 0.7;
}

@media (max-width: 480px) {
  .features {
    grid-template-columns: 1fr;
  }
}
</style> 