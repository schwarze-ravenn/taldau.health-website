<template>
    <footer class="footer">
      <div class="footer-content">
        <nav class="footer-links">
          <section class="footer-section">
            <h2 class="section-title">О нас</h2>
            <ul class="section-list">
              <li><a href="#mission">Миссия и цели</a></li>
              <li><a href="#process">Научный процесс</a></li>
              <li><a href="#team">Наша команда</a></li>
              <li><a href="#publications">Последние публикации</a></li>
              <li><a href="#zertteu">Taldau Pro</a></li>
            </ul>
          </section>
          <section class="footer-section">
            <h2 class="section-title">Добавки</h2>
            <ul class="section-list">
              <li><a href="#all-supplements">Все добавки</a></li>
              <li><a href="#synergies">Синергии</a></li>
              <li><a href="#popular">Популярные</a></li>
              <li><a href="#tags">Теги</a></li>
            </ul>
          </section>
          <section class="footer-section">
            <h2 class="section-title">Расстройства</h2>
            <ul class="section-list">
              <li><a href="#categories">Категории</a></li>
              <li><a href="#symptoms">Симптомы</a></li>
              <li><a href="#signs">Признаки</a></li>
            </ul>
          </section>
        </nav>
        <div class="footer-info">
          <div class="logo">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/11b68b7d64f1c4118bbd124d0721710c8765139c63587b00649c230b04116fb5?placeholderIfAbsent=true&apiKey=93dfb7a0c21b42dc904a108a8b74866e" alt="Taldau Health Logo" class="logo-image" />
            <span class="logo-text">Taldau.Health</span>
          </div>
          <div class="social-icons">
            <a href="#" aria-label="Facebook"><img src="https://cdn.builder.io/api/v1/image/assets/TEMP/89a87dfb427958493e7e2802d2111823ef742c570bd4d12e5549ec495e12759d?placeholderIfAbsent=true&apiKey=93dfb7a0c21b42dc904a108a8b74866e" alt="" class="social-icon" /></a>
            <a href="#" aria-label="Twitter"><img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b937bba71e780113ab8a668074f1028008d103feffef146d8192a627b59b49c?placeholderIfAbsent=true&apiKey=93dfb7a0c21b42dc904a108a8b74866e" alt="" class="social-icon" /></a>
            <a href="#" aria-label="Instagram"><img src="https://cdn.builder.io/api/v1/image/assets/TEMP/85c2763af1cf2505790e908fcae0c81654abc7c8ff95bfc2f31556df869b0ffc?placeholderIfAbsent=true&apiKey=93dfb7a0c21b42dc904a108a8b74866e" alt="" class="social-icon" /></a>
            <a href="#" aria-label="LinkedIn"><img src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd7a31de2d88f83a1e3f63a5ca60a96766272ca70b71701195295ec9b4dc11c4?placeholderIfAbsent=true&apiKey=93dfb7a0c21b42dc904a108a8b74866e" alt="" class="social-icon" /></a>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <style scoped>
  .footer {
    background-color: #000;
    color: #fff;
    padding: 60px 70px 100px;
    display: flex;
    justify-content: center;
  }
  
  .footer-content {
    display: flex;
    width: 100%;
    max-width: 1600px;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .footer-links {
    display: flex;
    gap: 120px;
    flex-wrap: wrap;
  }
  
  .footer-section {
    min-width: 138px;
    text-align: left; 
  }
  
  .section-title {
    font: 600 28px Montserrat, sans-serif;
    margin-bottom: 34px;
  }
  
  .section-list {
    list-style-type: none;
    padding: 0;
  }
  
  .section-list li {
    margin-bottom: 24px;
  }
  
  .section-list a {
    color: #fff;
    text-decoration: none;
    font: 400 22.8px Raleway, sans-serif;
  }
  
  .footer-info {
    display: flex;
    flex-direction: column;
  }
  
  .logo {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .logo-image {
    width: 26px;
    height: 27px;
    object-fit: contain;
  }
  
  .logo-text {
    font: 700 30px Montserrat, sans-serif;
    white-space: nowrap;
  }
  
  .social-icons {
    display: flex;
    gap: 11px;
    margin-top: 240px;
  }
  
  .social-icon {
    width: 53px;
    height: 53px;
    border-radius: 5px;
    object-fit: contain;
  }
  
  @media (max-width: 991px) {
    .footer {
      padding: 40px 20px 100px;
    }
  
    .footer-content {
      flex-direction: column;
    }
  
    .footer-links {
      gap: 40px;
    }
  
    .social-icons {
      margin-top: 40px;
    }
  }
  </style>