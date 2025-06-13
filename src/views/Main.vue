<template>
  <div class="main">
    <Navbar />
    <Hero />
    <Features />
    <RatesTicker />
    <InfoSection />
    <Footer />
    <div id="particles-js"></div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'
import RatesTicker from '@/components/RatesTicker.vue'
import Features from '@/components/Features.vue'
import InfoSection from '@/components/InfoSection.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Main',
  components: {
    Navbar,
    Hero,
    RatesTicker,
    Features,
    InfoSection,
    Footer
  },
  mounted() {
    // Initialize particles.js
    particlesJS("particles-js", {
      "particles": {
        "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#f9c74f" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.3, "random": true },
        "size": { "value": 3, "random": true },
        "line_linked": { "enable": true, "distance": 150, "color": "#6c5ce7", "opacity": 0.2, "width": 1 },
        "move": { "enable": true, "speed": 2, "direction": "none", "random": true, "straight": false, "out_mode": "out" }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": { "enable": true, "mode": "grab" },
          "onclick": { "enable": true, "mode": "push" },
          "resize": true
        }
      }
    })

    // Initialize intersection observer for animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
        }
      })
    })

    document.querySelectorAll('.hidden').forEach((el) => observer.observe(el))
  }
}
</script>

<style lang="scss">
:root {
  --primary: #f9c74f;  /* Жёлтый */
  --secondary: #6c5ce7; /* Фиолетовый */
  --dark: #121212;     /* Тёмный фон */
  --light: #f8f9fa;    /* Светлый текст */
  --accent: #43aa8b;   /* Бирюза */
  --glass: rgba(255, 255, 255, 0.05); /* Стеклянный эффект */
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', sans-serif;
}

body {
  background-color: var(--dark);
  color: var(--light);
  overflow-x: hidden;
  position: relative;
}

#particles-js {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  top: 0;
  left: 0;
}

.hidden {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s;
}

.show {
  opacity: 1;
  transform: translateY(0);
}
</style>
