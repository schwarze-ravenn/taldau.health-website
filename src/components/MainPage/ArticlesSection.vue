<template>
    <section class="articles">
      <h1 class="main-title">Последние публикации</h1>
      <div class="sidebar">
        <article class="article">
          <header class="article-header">
            <time class="publication-date">Июль 19, 2024</time>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab003fa339b6adbe022ed4f900e28ba89f499756b9017adb709f4d82494fad09?placeholderIfAbsent=true&apiKey=93dfb7a0c21b42dc904a108a8b74866e" class="icon" alt="" />
            <div class="author-info">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/07425972c78335a050dbb7ccce39d463bb01d8a864de68e69b10dfb15aeed13a?placeholderIfAbsent=true&apiKey=93dfb7a0c21b42dc904a108a8b74866e" class="author-avatar" alt="А. А. Мухаметжанова" />
              <span class="author-name">А. А. Мухаметжанова</span>
            </div>
          </header>
          <h2 class="article-title">Важность питания: как не переедать и быть сытым</h2>
          <p class="article-summary">Узнайте о времени приема пищи, почему важно найти свой ритм и цикл питания и следовать ему ежедневно.</p>
          <footer class="article-tags">
            <span class="tag">Питание</span>
            <span class="tag">Диета</span>
            <span class="tag">Витамин D</span>
          </footer>
        </article>
        <article class="article">
          <header class="article-header">
            <time class="publication-date">Авг 15, 2024</time>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/829c081da55070bef73c92d6fa7e5da6651c808e93207bffc6396df2a89750d9?placeholderIfAbsent=true&apiKey=93dfb7a0c21b42dc904a108a8b74866e" class="icon" alt="" />
            <div class="author-info">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3f752f6a59c1093cbcfcbd8cb40c30b33bb187de75dbb238de59604866b434e?placeholderIfAbsent=true&apiKey=93dfb7a0c21b42dc904a108a8b74866e" class="author-avatar" alt="В. В. Максим" />
              <span class="author-name">В. В. Максим</span>
            </div>
          </header>
          <h2 class="article-title">Питание: как питаться в зависимости от личных целей и образа жизни</h2>
          <p class="article-summary">Как понять чем питаться для набора мыщечней массы и при этом не остаться в дефиците калории.</p>
          <footer class="article-tags">
            <span class="tag">Креатин</span>
            <span class="tag">Тренировка</span>
            <span class="tag">Спорт</span>
            <span class="tag">Белок</span>
          </footer>
        </article>
        <article class="article">
          <header class="article-header">
            <time class="publication-date">Авг 18, 2024</time>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/61ade56855aacaa48fe217fea1ddc34ff98a56d64a97eb5be8277a6522246bba?placeholderIfAbsent=true&apiKey=93dfb7a0c21b42dc904a108a8b74866e" class="icon" alt="" />
            <div class="author-info">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a22ede2ab32cd00bf9880dcc2b809faa942ca8560ee3516a33d50a7fd04d1674?placeholderIfAbsent=true&apiKey=93dfb7a0c21b42dc904a108a8b74866e" class="author-avatar" alt="В. А. Андрей" />
              <span class="author-name">В. А. Андрей</span>
            </div>
          </header>
          <h2 class="article-title">Как подобрать правильный набор витаминов для силовых тренировок и кардио</h2>
          <p class="article-summary">Почему важно консультироваться с персональным тренером о питании и добавках в виде витаминов. Какие витамины улучшают ...</p>
          <footer class="article-tags">
            <span class="tag">Питание</span>
            <span class="tag">Тренировка</span>
            <span class="tag">Витамин C</span>
            <span class="tag">Витамин D</span>
          </footer>
        </article>
        <a href="#" class="read-more">Читать больше статьей...</a>
      </div>
    </section>
  </template>
  
  <style scoped>
  .articles {
    display: flex;
    flex-direction: column;
    font-family: Montserrat, sans-serif;
    justify-content: start;
    padding: 90px 525px;
  }
  
  .main-title {
    color: #000;
    font-size: 56px;
    font-weight: 700;
    line-height: 1.2;
    text-align: center;
  }
  
  .sidebar {
    border-radius: 16px;
    display: flex;
    margin-top: 30px;
    width: 100%;
    flex-direction: column;
    font-size: 24px;
    font-weight: 400;
    justify-content: start;
    padding: 30px;
    text-align: left;
  }
  
  .article {
    border-bottom: 1px solid #E1E4ED;
    display: flex;
    width: 100%;
    max-width: 809px;
    flex-direction: column;
    justify-content: start;
    padding: 35px 0;
  }
  
  .article:last-child {
    border-bottom: none;
  }
  
  .article-header {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 26px;
    color: #000;
    text-align: center;
    letter-spacing: -0.19px;
    justify-content: start;
    flex-wrap: wrap;
  }
  
  .publication-date {
    align-self: stretch;
    gap: 9px;
    margin: auto 0;
    font: 300 24px Montserrat, sans-serif;
  }
  
  .icon {
    aspect-ratio: 34.48;
    object-fit: contain;
    object-position: center;
    width: 34px;
    align-self: stretch;
    margin: auto 0;
  }
  
  .author-info {
    align-self: stretch;
    display: flex;
    min-width: 240px;
    min-height: 46px;
    align-items: center;
    gap: 12px;
    justify-content: start;
    margin: auto 0;
  }
  
  .author-avatar {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 40px;
    border-radius: 43px;
    align-self: stretch;
    margin: auto 0;
  }
  
  .author-name {
    align-self: stretch;
    margin: auto 0;
    font: 300 24px Montserrat, sans-serif;
  }
  
  .article-title {
    color: #2E2E2E;
    margin-top: 34px;
    font: 700 28px Montserrat, sans-serif;
  }
  
  .article-summary {
    color: #828282;
    font-family: Raleway, sans-serif;
    line-height: 34px;
    margin-top: 34px;
    font: 400 24px Raleway, sans-serif;
  }
  
  .article-tags {
    display: flex;
    margin-top: 40px;
    width: 100%;
    align-items: center;
    gap: 24px;
    color: #FFF;
    text-align: center;
    justify-content: start;
    flex-wrap: wrap;
  }
  
  .tag {
    border-radius: 8px;
    background-color: #000;
    align-self: stretch;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    align-items: center;
    white-space: nowrap;
    justify-content: center;
    margin: auto 0;
    padding: 10px 18px;
  }
  
  .read-more {
    color: #808080;
    font: 500 24px Raleway, sans-serif;
    line-height: 1.2;
    text-decoration: none;
    margin-top: 20px;
    /* text-decoration: underline; */
  }
    
  @media (max-width: 991px) {
    .articles {
      padding: 0 20px;
    }
  
    .main-title {
      max-width: 100%;
      font-size: 40px;
    }
  
    .sidebar {
      max-width: 100%;
      padding: 0 20px;
    }
  
    .article,
    .article-title,
    .article-summary,
    .article-tags {
      max-width: 100%;
    }
  
    .tag {
      white-space: initial;
    }
  }
  </style>