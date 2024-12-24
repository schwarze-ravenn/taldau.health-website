<template>
    <section class="video-section">
      <div class="inner">
        <div class="content">
          <div class="content-text">
            <div class="info-text">
              <h2 class="section-title">Преимущества Taldau Pro</h2>
              <ul class="feature-list">
                <li v-for="(feature, index) in features" :key="index" class="feature-item">
                  <img :src="feature.icon" :alt="feature.alt" class="feature-icon" />
                  <p class="feature-description">{{ feature.description }}</p>
                </li>
              </ul>
            </div>

            <CtaButton/>
          </div>
          <div class="video-background" role="img" aria-label="Видео фон">
            <iframe
              width="800"
              height="500"
              src="https://www.youtube.com/embed/gS_nHTWZEJ8?si=V7FZDlDgvtPA_0ku"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  // import CtaButton from '@/components/MainPage/CtaButton.vue';
  export default {
    name: 'VideoSection',
    components: {
      // CtaButton
    },
    data() {
      return {
        features: [
          {
            icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/77cb6199eb6be0290b624402b50e592074185265c9e8322527e0deaf7892e1ab?placeholderIfAbsent=true&apiKey=93dfb7a0c21b42dc904a108a8b74866e',
            alt: 'Публикация статей',
            description: 'Возможность публикации статьей и исследований.'
          },
          {
            icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/77cb6199eb6be0290b624402b50e592074185265c9e8322527e0deaf7892e1ab?placeholderIfAbsent=true&apiKey=93dfb7a0c21b42dc904a108a8b74866e',
            alt: 'Все функции',
            description: 'Возможность использования всех функций нашего сайта.'
          },
          {
            icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/77cb6199eb6be0290b624402b50e592074185265c9e8322527e0deaf7892e1ab?placeholderIfAbsent=true&apiKey=93dfb7a0c21b42dc904a108a8b74866e',
            alt: 'База исследований',
            description: 'Полный доступ к базе исследований.'
          }
        ]
      };
    },
    methods: {
      handleCtaClick(event) {
        event.preventDefault();
        console.log('CTA button clicked');
      }
    }
  };
  </script>
  
  <style scoped>
  .video-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 60px 0 90px;
  }
  .inner {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    padding: 50px 120px;
  }
  .content {
    display: flex;
    align-items: flex-start;
    gap: 40px 68px;
    flex-wrap: nowrap;
  }
  .content-text {
    align-self: stretch;
    display: flex;
    min-width: 240px;
    flex-direction: column;
    justify-content: flex-start;
    white-space: nowrap;
    margin: auto 0;
  }
  .info-text {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
  }
  .section-title {
    min-height: 62px;
    width: 100%;
    padding-bottom: 60px;
    color: #000;
    font: 700 56px/1.1 Montserrat, sans-serif;
  }
  .feature-list {
    display: flex;
    margin-top: 24px;
    width: 100%;
    flex-direction: column;
    color: #6c6c6c;
    justify-content: flex-start;
    list-style-type: none;
    padding: 0;
  }

  .feature-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-bottom: 28px;
  }

  .feature-description {
    font: 400 26px Raleway, sans-serif;
  }

  .feature-icon {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 36px;
  }

  .cta-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    margin-top: 20px;
    padding: 16px 25px;
    border-radius: 4px;
    background-color: #000;
    border: 1px solid #9847ff;
    border-bottom: none;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
    width: 575px;
  }
  
  .video-background {
    background-color: #f7f8fa;
    align-self: stretch;
    display: flex;
    min-width: 240px;
    width: 798px;
    height: 500px;
    margin: auto 0;
    overflow: hidden;
  }
  @media (max-width: 991px) {
    .inner {
      max-width: 100%;
      padding: 0 20px;
    }
    .content,
    .content-text,
    .info-text,
    .feature-list,
    .feature-item,
    .cta-button,
    .cta-text {
      max-width: 100%;
    }
    .section-title {
      font-size: 40px;
    }
    .cta-button {
      margin-top: 40px;
      padding: 16px 20px;
    }
  }
  </style>