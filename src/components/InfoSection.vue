<template>
  <section class="info-section">
    <div class="info-grid">
      <div v-for="(info, index) in infoCards" :key="index" class="info-card hidden">
        <h3 class="info-title">{{ info.title }}</h3>
        <ul class="info-list">
          <li v-for="(item, itemIndex) in info.items" :key="itemIndex">{{ item }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'InfoSection',
  data() {
    return {
      infoCards: [
        {
          title: 'Условия обмена',
          items: [
            'Продажа USDT для лиц +18 лет',
            'Запрещена покупка для 3-х лиц',
            'При покупке важно иметь паспорт',
            'При первой покупке — верификация'
          ]
        },
        {
          title: 'О нас',
          items: [
            'Сделки за наличные RUB, USD, EUR',
            'Опыт в обмене более 3х лет',
            'График работы: 10:00–20:00',
            'Покупка USDT без комиссии'
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.info-section {
  padding: 1.5rem 5%;
  background: rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  position: relative;
  z-index: 2;
}

.info-card {
  background: linear-gradient(135deg, rgba(18, 18, 18, 0.8), rgba(67, 170, 139, 0.1));
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 2.5rem;
  border: 1px solid rgba(249, 199, 79, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    border-color: var(--primary);
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: var(--primary);
  }

  &:after {
    content: "✓";
    position: absolute;
    font-size: 8rem;
    right: -20px;
    bottom: -20px;
    opacity: 0.03;
    color: var(--primary);
    font-weight: bold;
    z-index: 0;
  }

  &:nth-child(2):after {
    content: "★";
  }
}

.info-title {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--primary);
  position: relative;
  display: inline-block;
  z-index: 1;

  &:after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 2px;
    background: var(--primary);
  }
}

.info-list {
  list-style: none;
  position: relative;
  z-index: 1;
  display: grid;
  gap: 1rem;
}

.info-list li {
  background: rgba(255, 255, 255, 0.05);
  padding: 1rem;
  border-radius: 8px;
  transition: all 0.3s;
  display: flex;
  align-items: center;

  &:hover {
    background: rgba(249, 199, 79, 0.1);
    transform: translateX(5px);
  }

  &:before {
    content: "•";
    color: var(--primary);
    margin-right: 10px;
    font-size: 1.5rem;
    line-height: 0;
  }
}

@media (max-width: 768px) {
  .info-card {
    padding: 1.5rem;
  }
}
</style> 