<template>
  <section id="calc" class="exchange-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Калькулятор</h2>
        <p class="section-subtitle">Актуальные курсы и быстрый расчет</p>
        <div class="decoration-currency">
          <span>$</span>
          <span>€</span>
          <span>¥</span>
          <span>£</span>
        </div>
      </div>

      <div class="exchange-widget">
        <div class="rates-tabs">
          <button 
            v-for="tab in tabs" 
            :key="tab" 
            @click="selectTab(tab)"
            :class="{ 'active': activeTab === tab }"
          >
            {{ tab }}
          </button>
        </div>

        <div class="rates-table">
          <div class="table-header">
            <div>Валюта</div>
            <div>Курс</div>
            <div>Обмен</div>
          </div>
          
          <div class="table-row" v-for="(rate, index) in filteredRates" :key="index">
            <div class="currency">
              <span class="currency-code">{{ rate.currency }}</span>
              <span class="currency-name">{{ getCurrencyName(rate.currency) }}</span>
            </div>
            <div class="rate-value">{{ rate.value }}</div>
            <div class="exchange">
              <input 
                type="text" 
                v-model="amounts[index]" 
                @input="handleInput(index)"
                placeholder="0.00"
                class="exchange-input"
                inputmode="decimal"
              >
              <span class="result">{{ toCurrency(results[index] || '0.00') }} {{ rate.currency }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { toCurrency } from '@/helpers';

export default {
  name: 'ExchangeSection',
  data() {
    return {
      toCurrency,
      activeTab: 'Купить',
      tabs: ['Купить', 'Продать'],
      amounts: Array(3).fill(''),
      results: Array(3).fill(''),
      rates: [
        { type: 'Купить', value: '104.05', currency: 'RUB' },
        { type: 'Купить', value: '0.997', currency: 'USD' },
        { type: 'Купить', value: '0.959', currency: 'EUR' },
        { type: 'Продать', value: '103.64', currency: 'RUB' },
        { type: 'Продать', value: '0.992', currency: 'USD' },
        { type: 'Продать', value: '0.947', currency: 'EUR' }
      ],
      currencyNames: {
        'RUB': 'Российский рубль',
        'USD': 'Доллар США',
        'EUR': 'Евро'
      }
    }
  },
  computed: {
    filteredRates() {
      return this.rates.filter(rate => rate.type === this.activeTab);
    }
  },
  methods: {
    selectTab(tab) {
      this.activeTab = tab;
      // this.amounts = Array(3).fill('');
      // this.results = Array(3).fill('');
      this.handleInput(0);
      this.handleInput(1);
      this.handleInput(2);
    },
    handleInput(index) {
      let value = this.amounts[index];
      value = value.replace(/,/g, '.');
      value = value.replace(/[^\d.]/g, '');
      
      const parts = value.split('.');
      if (parts.length > 2) {
        value = parts[0] + '.' + parts.slice(1).join('');
      }
      
      if (parts[0]) {
        const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        value = integerPart + (parts[1] ? '.' + parts[1] : '');
      }
      
      this.amounts[index] = value;
      this.calculate(index);
    },
    calculate(index) {
      if (this.amounts[index]) {
        const numericValue = parseFloat(this.amounts[index].replace(/\s/g, '').replace(',', '.'));
        if (!isNaN(numericValue)) {
          const rate = parseFloat(this.filteredRates[index].value);
          this.results[index] = (numericValue * rate).toFixed(2);
          return;
        }
      }
      this.results[index] = '0.00';
    },
    getCurrencyName(code) {
      return this.currencyNames[code] || '';
    }
  }
}
</script>

<style lang="scss" scoped>
.exchange-section {
  position: relative;
  padding: 5rem 0;
  background-color: #0a0e17;
  background-image: 
    radial-gradient(circle at 20% 30%, rgba(249, 199, 79, 0.1) 0%, transparent 20%),
    radial-gradient(circle at 80% 70%, rgba(249, 199, 79, 0.1) 0%, transparent 20%);
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #f9c74f, #f94144, #f8961e, #f9c74f);
    background-size: 300% 100%;
    animation: gradientFlow 8s ease infinite;
  }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.5rem;
  background: linear-gradient(90deg, #f9c74f, #f8961e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}

.section-subtitle {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  max-width: 600px;
  margin: 0 auto;
}

.decoration-currency {
  position: absolute;
  top: -30px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  pointer-events: none;
  opacity: 0.1;
  
  span {
    font-size: 8rem;
    font-weight: 700;
    color: #f9c74f;
    
    &:nth-child(1) { transform: rotate(-15deg); }
    &:nth-child(2) { transform: rotate(10deg); }
    &:nth-child(3) { transform: rotate(-5deg); }
    &:nth-child(4) { transform: rotate(15deg); }
  }
}

.exchange-widget {
  background: rgba(0, 0, 0, 0.5);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(249, 199, 79, 0.3);
  box-shadow: 0 10px 30px rgba(249, 199, 79, 0.1);
  backdrop-filter: blur(10px);
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 16px;
    background: linear-gradient(135deg, rgba(249, 199, 79, 0.05), transparent);
    pointer-events: none;
    z-index: -1;
  }
}

.rates-tabs {
  display: flex;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  button {
    padding: 0.8rem 2rem;
    background: transparent;
    border: none;
    color: rgba(255, 255, 255, 0.6);
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    position: relative;
    transition: all 0.3s ease;
    // border-radius: 8px 8px 0 0;
    
    &:after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, #f9c74f, #f8961e);
      transition: width 0.3s ease;
    }
    
    &:hover {
      color: white;
      background: rgba(255, 255, 255, 0.05);
    }
    
    &.active {
      color: #f9c74f;
      background: rgba(249, 199, 79, 0.05);
      
      &:after {
        width: 100%;
      }
    }
  }
}

.rates-table {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.table-header {
  display: grid;
  grid-template-columns: 1fr 1fr 1.5fr;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  font-weight: 600;
  color: #f9c74f;
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 1px;
}

.table-row {
  display: grid;
  grid-template-columns: 1fr 1fr 1.5fr;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  transition: background 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.02);
  }
  
  &:last-child {
    border-bottom: none;
  }
}

.currency {
  display: flex;
  flex-direction: column;
  
  &-code {
    font-weight: 700;
    color: #f9c74f;
    font-size: 1.1rem;
  }
  
  &-name {
    font-size: 0.85rem;
    opacity: 0.7;
  }
}

.rate-value {
  font-weight: 700;
  font-size: 1.2rem;
  color: white;
}

.exchange {
  display: flex;
  align-items: center;
  gap: 1rem;
  
  &-input {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    padding: 0.8rem 1rem;
    color: white;
    font-size: 1rem;
    width: 140px;
    transition: all 0.3s ease;
    font-weight: 500;
    
    &:focus {
      outline: none;
      border-color: #f9c74f;
      box-shadow: 0 0 0 3px rgba(249, 199, 79, 0.2);
    }
    
    &::placeholder {
      color: rgba(255, 255, 255, 0.4);
    }
  }
  
  .result {
    font-size: 0.95rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.9);
    white-space: nowrap;
  }
}

@keyframes gradientFlow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@media (max-width: 768px) {
  .exchange-section {
    padding: 3rem 0;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .exchange-widget {
    padding: 1.5rem;
  }
  
  .rates-tabs button {
    padding: 0.7rem 1.5rem;
    font-size: 0.9rem;
  }
  
  .table-header {
    grid-template-columns: 1fr 1fr 1.2fr;
    font-size: 0.8rem;
  }
  
  .table-row {
    grid-template-columns: 1fr 1fr 1.2fr;
    font-size: 0.9rem;
  }
  
  .currency-code {
    font-size: 1rem;
  }
  
  .exchange {
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
    
    &-input {
      width: 100%;
      padding: 0.7rem;
    }
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.8rem;
  }
  
  .section-subtitle {
    font-size: 1rem;
  }
  
  .exchange-widget {
    padding: 1rem;
  }
  
  .rates-tabs {
    justify-content: center;
    
    button {
      padding: 0.6rem 1rem;
      font-size: 0.85rem;
    }
  }
  
  .table-header {
    display: none;
  }
  
  .table-row {
    grid-template-columns: 1fr;
    gap: 0.8rem;
    padding: 1.2rem 0;
    position: relative;
    
    &::before {
      content: attr(data-currency);
      position: absolute;
      top: 1rem;
      left: 0;
      font-weight: 600;
      color: #f9c74f;
      text-transform: uppercase;
      font-size: 0.8rem;
    }
  }
  
  .currency, .rate-value {
    padding-left: 1rem;
  }
  
  .rate-value {
    order: -1;
    font-size: 1.4rem;
    padding-top: 0.5rem;
  }
  
  .exchange {
    width: 100%;
    padding-top: 0.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    margin-top: 0.5rem;
  }
  
  .decoration-currency span {
    font-size: 5rem;
  }
}
</style>