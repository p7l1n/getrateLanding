<template>
  <footer>
    <div class="footer-grid">
      <div>
        <h3 class="footer-title">GetRate</h3>
        <p style="opacity: 0.8; margin-bottom: 1.5rem; line-height: 1.6;">Ваш надежный партнер в мире криптовалютных обменов с 2023 года.</p>
        <div class="social-links">
          <a href="#"><i class="fab fa-telegram"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
      <div>
        <h3 class="footer-title">Контакты</h3>
        <a href="https://t.me/GetRate_Bot" class="footer-contact" target="_blank">
          <i class="fab fa-telegram"></i> @GetRate_Bot
        </a>
        <a href="mailto:support@getrate.com" class="footer-contact">
          <i class="fas fa-envelope"></i> support@getrate.com
        </a>
        <div class="footer-contact">
          <i class="fas fa-map-marker-alt"></i>Москва, Пресненская набережная 12, Башня Федерация. Восток, этаж 12, офис Е1
        </div>
      </div>
      <div>
        <h3 class="footer-title">Документы</h3>
        <div class="footer-links">
          <a href="#">Пользовательское соглашение</a>
          <a href="#">Политика конфиденциальности</a>
          <a href="#">AML политика</a>
          <a href="#">Правила обмена</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2023 GetRate. Все права защищены.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
footer {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(18, 18, 18, 1));
  padding: 4rem 5% 2rem;
  border-top: 1px solid rgba(249, 199, 79, 0.1);
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-title {
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  color: var(--primary);
  position: relative;
  display: inline-block;
  padding-bottom: 10px;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 2px;
    background: var(--primary);
  }
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-links a {
  color: var(--light);
  text-decoration: none;
  transition: all 0.3s;
  opacity: 0.8;
  position: relative;
  padding-left: 0;

  &:hover {
    opacity: 1;
    color: var(--primary);
    padding-left: 10px;
  }

  &:before {
    content: "";
    position: absolute;
    left: -15px;
    opacity: 0;
    transition: all 0.3s;
    color: var(--primary);
  }

  &:hover:before {
    left: 0;
    opacity: 1;
  }
}

.footer-contact {
  margin-bottom: 1rem;
  opacity: 0.8;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s;
  color: var(--light);
  text-decoration: none;

  &:hover {
    opacity: 1;
    color: var(--primary);
  }

  i {
    color: var(--primary);
    width: 20px;
    text-align: center;
  }
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  opacity: 0.6;
  font-size: 0.9rem;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
}

.social-links a {
  color: var(--light);
  background: rgba(255, 255, 255, 0.1);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;

  &:hover {
    background: var(--primary);
    color: var(--dark);
    transform: translateY(-3px);
  }
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style> 