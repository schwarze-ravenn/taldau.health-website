<template>
    <div data-layername="categories1" class="categories-1">
      <div data-layername="top" class="top">
        <div data-layername="tittle" class="tittle">
          <div data-layername="title" class="title">Категории</div>
          <div data-layername="paragraph" class="paragraph">
            Исследуйте и получите актуальную и надежную информацию симптомов под ваши нужды в категориях.
          </div>
        </div>
        <div data-layername="buttons" class="buttons">
          <button @click="prevSlide" class="carousel-button" aria-label="Previous slide">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a46b73d8205844ce9106b4297d9e6512cb6f2a67e23b30ad26e237a866147c2?placeholderIfAbsent=true&apiKey=93dfb7a0c21b42dc904a108a8b74866e" class="img" alt="Previous" />
          </button>
          <button @click="nextSlide" class="carousel-button" aria-label="Next slide">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/74bbff149d9756be8e634278afd989779cc414b28be8280ef8e23975400c7828?placeholderIfAbsent=true&apiKey=93dfb7a0c21b42dc904a108a8b74866e" class="img" alt="Next" />
          </button>
        </div>
      </div>
      <div data-layername="cardsRow" class="cards-row">
        <div class="carousel-container" ref="carouselContainer">
          <div v-for="(row, rowIndex) in carouselRows" :key="rowIndex" class="carousel-row">
            <div v-for="(card, cardIndex) in row" :key="cardIndex" class="card-wrapper" @click="navigateToCard(card.link)">
              <div data-layername="card" class="card">
                <div class="div">
                  <div class="div-inner">
                    <img loading="lazy" :src="card.image" class="img-card" :alt="card.heading" />
                    <div data-layername="subheading" class="subheading">{{ card.subheading }}</div>
                    <div data-layername="heading" class="heading">{{ card.heading }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default {
    name: 'CategoriesSection',
    setup() {
      const router = useRouter();
      const carouselContainer = ref(null);
      const currentIndex = ref(0);
  
      const cards = [
        { image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/41e00d21b80022facce92f027278a31010f23efe9a00b16aa081e6a515d62890?placeholderIfAbsent=true&apiKey=93dfb7a0c21b42dc904a108a8b74866e', subheading: 'Общее здоровье', heading: 'Долголетие', link: '/longevity' },
        { image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/63fb6b939e2e9fba80a110ef2c03202b5c21f77ad0cb9d04bded397899938b0b?placeholderIfAbsent=true&apiKey=93dfb7a0c21b42dc904a108a8b74866e', subheading: 'Общее здоровье', heading: 'Сон', link: '/sleep' },
        { image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a2a9b23dd09f9a2fff57d3908f1c4f61252c8e308a228b0987be7975de8dc042?placeholderIfAbsent=true&apiKey=93dfb7a0c21b42dc904a108a8b74866e', subheading: 'Диета', heading: 'Кето диета', link: '/keto-diet' },
        { image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/730be7e85947e1a5eb91710bcbab00d4fce9625ae339ce8ec97ffaf6fe12bf39?placeholderIfAbsent=true&apiKey=93dfb7a0c21b42dc904a108a8b74866e', subheading: 'Диета', heading: 'Интервальное голодание', link: '/intermittent-fasting' },
        { image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/41e00d21b80022facce92f027278a31010f23efe9a00b16aa081e6a515d62890?placeholderIfAbsent=true&apiKey=93dfb7a0c21b42dc904a108a8b74866e', subheading: 'Общее здоровье', heading: 'Долголетие', link: '/longevity' },
        { image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/63fb6b939e2e9fba80a110ef2c03202b5c21f77ad0cb9d04bded397899938b0b?placeholderIfAbsent=true&apiKey=93dfb7a0c21b42dc904a108a8b74866e', subheading: 'Общее здоровье', heading: 'Сон', link: '/sleep' },
        { image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a2a9b23dd09f9a2fff57d3908f1c4f61252c8e308a228b0987be7975de8dc042?placeholderIfAbsent=true&apiKey=93dfb7a0c21b42dc904a108a8b74866e', subheading: 'Диета', heading: 'Кето диета', link: '/keto-diet' },
        { image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/730be7e85947e1a5eb91710bcbab00d4fce9625ae339ce8ec97ffaf6fe12bf39?placeholderIfAbsent=true&apiKey=93dfb7a0c21b42dc904a108a8b74866e', subheading: 'Диета', heading: 'Интервальное голодание', link: '/intermittent-fasting' },
        { image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/41e00d21b80022facce92f027278a31010f23efe9a00b16aa081e6a515d62890?placeholderIfAbsent=true&apiKey=93dfb7a0c21b42dc904a108a8b74866e', subheading: 'Общее здоровье', heading: 'Долголетие', link: '/longevity' },
        { image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/63fb6b939e2e9fba80a110ef2c03202b5c21f77ad0cb9d04bded397899938b0b?placeholderIfAbsent=true&apiKey=93dfb7a0c21b42dc904a108a8b74866e', subheading: 'Общее здоровье', heading: 'Сон', link: '/sleep' },
        { image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a2a9b23dd09f9a2fff57d3908f1c4f61252c8e308a228b0987be7975de8dc042?placeholderIfAbsent=true&apiKey=93dfb7a0c21b42dc904a108a8b74866e', subheading: 'Диета', heading: 'Кето диета', link: '/keto-diet' },
        { image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/730be7e85947e1a5eb91710bcbab00d4fce9625ae339ce8ec97ffaf6fe12bf39?placeholderIfAbsent=true&apiKey=93dfb7a0c21b42dc904a108a8b74866e', subheading: 'Диета', heading: 'Интервальное голодание', link: '/intermittent-fasting' },
        { image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/41e00d21b80022facce92f027278a31010f23efe9a00b16aa081e6a515d62890?placeholderIfAbsent=true&apiKey=93dfb7a0c21b42dc904a108a8b74866e', subheading: 'Общее здоровье', heading: 'Долголетие', link: '/longevity' },
        { image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/63fb6b939e2e9fba80a110ef2c03202b5c21f77ad0cb9d04bded397899938b0b?placeholderIfAbsent=true&apiKey=93dfb7a0c21b42dc904a108a8b74866e', subheading: 'Общее здоровье', heading: 'Сон', link: '/sleep' },
        { image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a2a9b23dd09f9a2fff57d3908f1c4f61252c8e308a228b0987be7975de8dc042?placeholderIfAbsent=true&apiKey=93dfb7a0c21b42dc904a108a8b74866e', subheading: 'Диета', heading: 'Кето диета', link: '/keto-diet' },
        { image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/730be7e85947e1a5eb91710bcbab00d4fce9625ae339ce8ec97ffaf6fe12bf39?placeholderIfAbsent=true&apiKey=93dfb7a0c21b42dc904a108a8b74866e', subheading: 'Диета', heading: 'Интервальное голодание', link: '/intermittent-fasting' },
      ];
  
      const carouselRows = computed(() => {
        const rows = [];
        for (let i = 0; i < cards.length; i += 4) {
          rows.push(cards.slice(i, i + 4));
        }
        return rows;
      });
  
      const navigateToCard = (link) => {
        router.push(link);
      };
  
      const prevSlide = () => {
        if (currentIndex.value > 0) {
          currentIndex.value--;
        } else {
          currentIndex.value = carouselRows.value.length - 1;
        }
        updateCarousel();
      };
  
      const nextSlide = () => {
        if (currentIndex.value < carouselRows.value.length - 1) {
          currentIndex.value++;
        } else {
          currentIndex.value = 0;
        }
        updateCarousel();
      };
  
      const updateCarousel = () => {
        const container = carouselContainer.value;
        if (container) {
          const rowWidth = container.offsetWidth;
          container.style.transform = `translateX(-${currentIndex.value * rowWidth}px)`;
        }
      };
  
      onMounted(() => {
        window.addEventListener('resize', updateCarousel);
      });
  
      onBeforeUnmount(() => {
        window.removeEventListener('resize', updateCarousel);
      });
  
      return {
        carouselContainer,
        carouselRows,
        navigateToCard,
        prevSlide,
        nextSlide,
      };
    },
  };
  </script>
  
  <style scoped>
  .categories-1 {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    justify-content: start;
    padding: 100px 120px;
  }
  /* @media (max-width: 991px) {
    .categories-1 {
      padding: 0 20px 100px;
    }
  } */
  .top {
    display: flex;
    width: 100%;
    align-items: end;
    gap: 40px 100px;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  /* @media (max-width: 991px) {
    .top {
      max-width: 100%;
    }
  } */
  .tittle {
    display: flex;
    min-width: 240px;
    flex-direction: column;
    justify-content: start;
    width: 850px;
    text-align: left
  }
  /* @media (max-width: 991px) {
    .tittle {
      max-width: 100%;
    }
  } */
  .title {
    color: rgba(0, 0, 0, 1);
    font: 700 56px/1.2 Montserrat, sans-serif;
  }
  /* @media (max-width: 991px) {
    .title {
      font-size: 40px;
    }
  } */
  .paragraph {
    color: rgba(108, 108, 108, 1);
    margin-top: 30px;
    font: 400 28px/30px Raleway, sans-serif;
  }
  /* @media (max-width: 991px) {
    .paragraph {
      max-width: 100%;
    }
  } */
  .buttons {
    display: flex;
    min-height: 50px;
    align-items: start;
    gap: 20px;
    justify-content: start;
    width: 121px;
  }
  .carousel-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
  }
  .img {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 50px;
    border-radius: 8px;
  }
  .cards-row {
    margin-top: 60px;
    width: 100%;
    overflow: hidden;
    font-family: Raleway, sans-serif;
  }
  .carousel-container {
    display: flex;
    transition: transform 0.3s ease;
  }
  .carousel-row {
    display: flex;
    flex: 0 0 100%;
  }
  /* @media (max-width: 991px) {
    .cards-row {
      max-width: 100%;
      margin-top: 40px;
    }
  } */
  .card-wrapper {
    flex: 0 0 25%;
    display: flex;
    min-width: 240px;
    align-items: center;
    gap: 12px;
    justify-content: start;
    width: 313px;
    margin: auto 0;
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  .card-wrapper:hover {
    transform: scale(1.05);
  }
  .card {
    border-radius: 0px 0px 0px 0px;
    align-self: stretch;
    display: flex;
    min-width: 240px;
    width: 391px;
    flex-direction: column;
    margin: auto 0;
  }
  .div {
    border-radius: 14px;
    background-color: rgba(248, 250, 255, 1);
    display: flex;
    flex-direction: column;
  }
  .div-inner {
    display: flex;
    flex-direction: column;
    border-radius: 0px 0px 0px 0px;
    position: relative;
    aspect-ratio: 0.85;
    width: 100%;
    align-items: start;
    padding: 35px 39px 367px 35px;
  }
  /* @media (max-width: 991px) {
    .div-inner {
      padding: 0 20px 100px;
    }
  } */
  .img-card {
    position: absolute;
    inset: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
  .subheading {
    position: relative;
    color: rgba(108, 108, 108, 1);
    font-size: 18px;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.72px;
    text-transform: uppercase;
    text-align: left;
    font: 400 18px/27px Montserrat, sans-serif;
  }
  .heading {
    position: relative;
    color: rgba(46, 46, 46, 1);
    font-size: 32px;
    font-weight: 700;
    line-height: 1;
    margin: 22px 0 -73px;
    text-align: left;
    font: 700 32px/36px Montserrat, sans-serif;
  }
  /* @media (max-width: 991px) {
    .heading {
      margin-bottom: 10px;
    }
  } */
  </style>