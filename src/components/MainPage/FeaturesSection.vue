<template>
    <section class="features">
      <header class="header">
        <h1 class="title">Миссия компании и ценности платформы</h1>
        <p class="description">
          Мы предлагаем удобную платформу для улучшения вашего здоровья и физического состояния. Подробнее о работе нашего сайта читайте
          <span class="highlight-text">здесь</span>.
        </p>
      </header>
      <div class="feature-grid">
        <article v-for="feature in features" :key="feature.id" class="feature-item">
          <img :src="feature.icon" :alt="feature.title" class="feature-icon" />
          <div class="feature-content">
            <p class="feature-text">
              <strong>{{ feature.title }}</strong> {{ feature.description }}
            </p>
          </div>
        </article>
      </div>
    </section>
</template>  

  <script>
  export default {
    name: 'FeaturesSection',
    data() {
      return {
        features: [
          {
            id: 1,
            icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4e23b7a2fe5f96331c230f6f4f99e09ea722d7b63072462d7dab4034d3ba6b8d?placeholderIfAbsent=true&apiKey=93dfb7a0c21b42dc904a108a8b74866e',
            title: 'Достоверность.',
            description: 'Получите научно-обоснованные данные о добавках, основанные на надежных источниках и результатах исследований.',
          },
          {
            id: 2,
            icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f2b4563cdf9b254d5dcfa13eaab026b4919d9fb1e5a449ec9d90b3a0cb02c680?placeholderIfAbsent=true&apiKey=93dfb7a0c21b42dc904a108a8b74866e',
            title: 'Доступность.',
            description: 'Международные научные эксперты делятся своими исследованиями и их результаты понятны любому пользователю.',
          },
          {
            id: 3,
            icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/55845d80ad4281a8c5d92f48c4a28a1f9cdde5c5096d85a9b866012259bcd0e0?placeholderIfAbsent=true&apiKey=93dfb7a0c21b42dc904a108a8b74866e',
            title: 'Библиотека.',
            description: 'Постоянно пополняющийся исследования в нашу библиотеку позволяют ознакомиться с авторами и их работами.',
          },
          {
            id: 4,
            icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7834dce3c154f1bf4b6d5b1b4591c2af1addde5fcb0b1ae8e04c1b06f6086424?placeholderIfAbsent=true&apiKey=93dfb7a0c21b42dc904a108a8b74866e',
            title: 'Удобство.',
            description: 'Изучайте и анализируйте нужную вам информацию при помощи удобной базы исследований и их данных. Только конкретные метрики и точность.',
          },
        ],
      };
    },
  };
  </script>
  
<style scoped>
  .features {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 120px 240px;
    align-items: flex-start; 
  }

  .header {
    display: flex;
    width: 100%;
    padding-bottom: 30px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    font: 500 28px Raleway, sans-serif;
  }

  .title {
    color: #000;
    font: 700 56px/1.1 Montserrat, sans-serif;
    text-align: left;
  }

  .description {
    color: #6c6c6c;
    margin-top: 30px;
    font: 500 28px Raleway, sans-serif;
    text-align: left;
  }

  .feature-grid {
    display: flex;
    margin-top: 60px;
    width: 100%;
    max-width: 990px;
    flex-direction: column;
    color: #6c6c6c;
    justify-content: flex-start;
    font: 400 28px/42px Raleway, sans-serif;
  }

  .feature-item {
    display: flex;
    width: 100%;
    align-items: flex-start;
    gap: 12px;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-bottom: 48px;
  }

  .feature-icon {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 36px;
    border-radius: 60px;
  }

  .feature-content {
    flex: 1;
    flex-basis: 0%;
    text-align: left;
  }

  .feature-text {
    text-align: left;
    font: 400 28px/1.5 Raleway, sans-serif;
    color: #6c6c6c;
  }

  .feature-text strong {
    color: #000;
    font: 600 28px/1.5 Raleway, sans-serif;
  }

  @media (max-width: 991px) {
    .features {
      padding: 100px 20px;
    }

    .title {
      font-size: 40px;
    }

    .header,
    .description,
    .feature-grid {
      max-width: 100%;
    }

    .feature-item {
      margin-bottom: 40px;
    }

    .feature-content {
      max-width: 100%;
    }
  }
</style>