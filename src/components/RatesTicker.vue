<template>
  <div class="rates-ticker hidden">
    <div class="ticker-container">
      <div class="ticker-track">
        <div v-for="(rate, index) in rates" :key="index" class="rate-item-ticker">
          <span class="rate-type-ticker">{{ rate.type }}:</span>
          <span class="rate-value-ticker">{{ rate.value }}</span>
          <span class="rate-currency-ticker">{{ rate.currency }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RatesTicker',
  data() {
    return {
      rates: [
        { type: 'Купить', value: '104.05', currency: 'RUB' },
        { type: 'Продать', value: '103.64', currency: 'RUB' },
        { type: 'Купить', value: '0.997', currency: 'USD' },
        { type: 'Продать', value: '0.992', currency: 'USD' },
        { type: 'Купить', value: '0.959', currency: 'EUR' },
        { type: 'Продать', value: '0.947', currency: 'EUR' },
        // Duplicate for infinite animation
        { type: 'Купить', value: '104.05', currency: 'RUB' },
        { type: 'Продать', value: '103.64', currency: 'RUB' },
        { type: 'Купить', value: '0.997', currency: 'USD' },
        { type: 'Продать', value: '0.992', currency: 'USD' },
        { type: 'Купить', value: '0.959', currency: 'EUR' },
        { type: 'Продать', value: '0.947', currency: 'EUR' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.rates-ticker {
  position: relative;
  width: 100%;
  margin: 0;
  margin-top: -54px;
  overflow: hidden;
  padding: 1rem;
}

.ticker-container {
  display: flex;
  width: 100%;
  overflow: hidden;
}

.ticker-track {
  display: flex;
  animation: ticker 30s linear infinite;
}

@keyframes ticker {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.rate-item-ticker {
  display: flex;
  align-items: center;
  margin-right: 2rem;
  white-space: nowrap;
}

.rate-type-ticker {
  font-size: 0.9rem;
  opacity: 0.8;
  margin-right: 0.5rem;
}

.rate-value-ticker {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--primary);
  margin-right: 0.3rem;
}

.rate-currency-ticker {
  font-size: 0.9rem;
  opacity: 0.7;
}
</style> 