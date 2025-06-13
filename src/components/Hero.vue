<template>
  <section class="hero">
    <div class="hero-content">
      <h1>GetRate<span> - каждый курс на счету!</span></h1>            
      <p>Лучший мультивалютный обменник. Выгодный и мгновенный обмен криптовалют!</p>
      <button class="cta-button" @click="openTelegram">Купить/Продать</button>
    </div>
    
    <div class="rates-container">
      <div class="rates-table">
        <transition name="fade-slide">
          <div class="rates-header" v-show="isVisible">
            <div class="rates-cell">Валюта</div>
            <div class="rates-cell">Покуп.</div>
            <div class="rates-cell">Продаж.</div>
          </div>
        </transition>
        <transition name="fade-slide">
          <div class="rates-row" v-show="isVisible" style="transition-delay: 0.1s">
            <div class="rates-cell">RUB</div>
            <div class="rates-cell">85.42</div>
            <div class="rates-cell">86.15</div>
          </div>
        </transition>
        <transition name="fade-slide">
          <div class="rates-row" v-show="isVisible" style="transition-delay: 0.2s">
            <div class="rates-cell">USD</div>
            <div class="rates-cell">1.00</div>
            <div class="rates-cell">1.02</div>
          </div>
        </transition>
        <transition name="fade-slide">
          <div class="rates-row" v-show="isVisible" style="transition-delay: 0.3s">
            <div class="rates-cell">EUR</div>
            <div class="rates-cell">0.92</div>
            <div class="rates-cell">0.94</div>
          </div>
        </transition>
      </div>
    </div>

    <div alt="TRX Logo" class="trx-logo"></div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  data() {
    return {
      isVisible: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.isVisible = true
    }, 100)
  },
  methods: {
    openTelegram() {
      window.scrollTo({
        top: document.body.clientWidth > 768 ? 640 : 720,
        behavior: "smooth"
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 5%;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(108, 92, 231, 0.1), rgba(249, 199, 79, 0.1));

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 20%, rgba(249, 199, 79, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(108, 92, 231, 0.1) 0%, transparent 50%);
    z-index: 1;
  }
}

.hero-content {
  max-width: 600px;
  position: relative;
  z-index: 2;
  margin-bottom: 40px;
  text-align: center;
}

.rates-container {
  position: relative;
  z-index: 2;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  width: 100%;
  max-width: 400px;
  margin: 20px auto;
}

.rates-table {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.rates-header, .rates-row {
  display: flex;
  padding: 12px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.rates-header {
  font-weight: 600;
  color: var(--primary);
}

.rates-cell {
  flex: 1;
  text-align: center;
  padding: 0 10px;
}

.trx-logo {
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
  // top: 35%;
  // transform: scale(1.5);
  width: 300px;
  height: 300px;
  z-index: 1;
  opacity: 0.8;
  background-image: url('@/assets/tron.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  filter: drop-shadow(0 0 20px rgba(249, 199, 79, 0.3));
}

h1 {
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin-bottom: 1.5rem;
  line-height: 1.2;

  span {
    color: var(--primary);
  }
}

p {
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  margin-bottom: 2.5rem;
  opacity: 0.8;
  line-height: 1.6;
}

.cta-button {
  padding: 0.8rem 2rem;
  background: linear-gradient(to right, var(--primary), var(--accent));
  color: var(--dark) !important;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  text-decoration: none;
  display: inline-block;
  font-size: 1.1rem;
  margin-top: 20px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(249, 199, 79, 0.3);
  }
}

/* Десктопная версия */
@media (min-width: 1024px) {
  .hero {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 5%;
  }
  
  .hero-content {
    text-align: left;
    margin-bottom: 0;
    margin-right: 40px;
  }
  
  .rates-container {
    position: absolute;
    // right: 10%;
    // top: 50%;
    right: 15%;
    top: 60%;
    transform: translateY(-50%);
    margin: 0;
    max-width: 280px;
  }
}

/* Планшетная версия */
@media (max-width: 1024px) {
  .trx-logo {
    display: none;
  }
  
  .hero {
    height: auto;
    min-height: 100vh;
    padding-top: 160px;
    padding-bottom: 80px;
  }
  
  .rates-container {
    max-width: 350px;
    margin-top: 60px;
  }
}

/* Мобильная версия */
@media (max-width: 480px) {
  .hero {
    padding-top: 180px;
  }

  .rates-container {
    padding: 15px;
    max-width: 100%;
    margin-top: 50px;
  }
  
  .rates-cell {
    padding: 0 5px;
    font-size: 0.9rem;
  }
  
  .cta-button {
    width: 100%;
    padding: 0.8rem;
  }
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.5s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>