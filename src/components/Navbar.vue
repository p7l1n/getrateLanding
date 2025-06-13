<template>
  <nav>
    <transition name="fade-slide">
      <div class="logo-container" v-show="isVisible">
        <transition name="scale">
          <img src="@/assets/logo.png" alt="logo" class="logo" v-show="isVisible">
        </transition>
        <div class="logo-text">
          <span>Get</span><span>Rate</span>
        </div>
      </div>
    </transition>
    <a href="#" class="nav-cta" @click="openTelegram">Обменять</a>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
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
      window.open('https://t.me/GetRate_Bot', '_blank')
    }
  }
}
</script>

<style lang="scss" scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.8s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.scale-enter-active,
.scale-leave-active {
  transition: all 0.6s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.5);
}

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

  .logo-container {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .logo {
    border-radius: 50%;
    width: 70px;
    height: 70px;
  }
}

.logo-text {
  font-size: 1.8rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  
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