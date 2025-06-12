<template>
  <section class="hero">
    <div class="hero-content hidden">
      <p class="slogan">GetRate — каждый курс на счету!</p>
      <h1>Быстрый и надежный <span>обменник криптовалют</span></h1>            
      <p>Ваш партнер для финансовых операций, предлагает быстрый и безопасный обмен криптовалют без комиссии.</p>
      <button class="cta-button" @click="openTelegram">Обменять сейчас</button>
    </div>
    <div alt="TRX Logo" class="trx-logo"></div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  methods: {
    openTelegram() {
      window.open('https://t.me/GetRate_Bot', '_blank')
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 5%;
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
}

.trx-logo {
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
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
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;

  span {
    color: var(--primary);
  }
}

p {
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  opacity: 0.8;
  line-height: 1.6;
}

.slogan {
  font-size: 1.5rem;
  color: var(--primary);
  margin-bottom: 15px;
  font-weight: 600;
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

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(249, 199, 79, 0.3);
  }
}

@media (max-width: 1024px) {
  .trx-logo {
    display: none;
  }
  
  .hero {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding-top: 80px;
    height: auto;
    min-height: 100vh;
  }
  
  .hero-content {
    margin-bottom: 2rem;
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  h1 {
    font-size: 2.5rem;
  }
  
  .slogan {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 2rem;
  }
  
  p {
    font-size: 1rem;
  }
  
  .cta-button {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    width: 100%;
  }
}
</style> 