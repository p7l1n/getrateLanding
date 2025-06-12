<template>
  <nav>
    <div class="logo-text">
      <span>Get</span><span>Rate</span>
    </div>
    <a href="#" class="nav-cta" @click="openTelegram">Обменять</a>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    openTelegram() {
      window.open('https://t.me/GetRate_Bot', '_blank')
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 5%;
  position: fixed;
  width: 100%;
  z-index: 100;
  backdrop-filter: blur(10px);
  background: rgba(18, 18, 18, 0.8);
  border-bottom: 1px solid var(--glass);
}

.logo-text {
  font-size: 1.8rem;
  font-weight: 700;
  
  span:first-child {
    color: white;
  }
  
  span:last-child {
    color: var(--primary);
  }
}

.nav-cta {
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
</style> 