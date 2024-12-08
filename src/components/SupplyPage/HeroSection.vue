<template>
  <main class="berberine-page">
    <header class="page-header">
      <nav class="navigation">
        <button class="nav-button">
          <span>{{ Category }}</span>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/05fd3bd4ff5ce77d2d6c10ac2889bf292cbb34773d21ae0f47820212773e0fe4?apiKey=93dfb7a0c21b42dc904a108a8b74866e" alt="" class="nav-icon" />
        </button>
        <button class="nav-button active">
          <span>{{ SupplyName }}</span>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/05fd3bd4ff5ce77d2d6c10ac2889bf292cbb34773d21ae0f47820212773e0fe4?apiKey=93dfb7a0c21b42dc904a108a8b74866e" alt="" class="nav-icon" />
        </button>
        <button class="nav-button">Главная</button>
      </nav>
      <p class="update-date">Последнее обновление: Август 9, 2024</p>
    </header>
    <article class="berberine-content">
      <header class="content-header">
        <h1 class="title">{{ SupplyName || 'Загрузка...' }}</h1>
        <p class="authors">{{ Authors || 'Автор...' }}</p>
      </header>
      <p class="description">{{ formattedDescription }}</p>
      <div class="action-buttons">
        <PrimaryButton>Просмотреть библиотеку</PrimaryButton>
        <SecondaryButton>Сохранить</SecondaryButton>
      </div>
    </article>
  </main>
  <section class="card-container">
    <ResearchCard
      v-for="(research, index) in researchData"
      :key="index"
      :effect="research.Effect"
      :research-name="research.ResearchName"
      :details="research.Details"
    />
  </section>
</template>

<script>
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import PrimaryButton from './PrimaryButton.vue';
import SecondaryButton from './SecondaryButton.vue';
import ResearchCard from './ResearchCard.vue';

export default {
  name: 'HeroSection',
  components: {
    PrimaryButton,
    SecondaryButton,
    ResearchCard
  },
  props: ['SupplyName', 'Description', 'Category', 'Authors'], // Принимаем данные как props
  data() {
    return {
      researchData: [], // Список исследований
      selectedIndex: 0,  // Индекс выбранного элемента
    };
  },
  mounted() {
    this.fetchResearchData(); // Загружаем данные при первом монтировании
    window.addEventListener('keydown', this.handleKeyDown);
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  },
  methods: {
    async fetchResearchData() {
      try {
        if (!this.SupplyName) return;

        const docRef = doc(db, 'supplies', 'research');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          const index = this.getSupplyIndex(this.SupplyName);

          if (index !== -1) {
            this.researchData = [
              {
                Effect: data.effect[index],
                ResearchName: data.research_name[index],
                Details: data.details[index],
              },
            ];
          } else {
            console.error(`No data found for ${this.SupplyName}`);
          }
        }
      } catch (error) {
        console.error("Error fetching research data:", error);
      }
    },
    getSupplyIndex(supplyName) {
      const map = {
        'Берберин': 0,
        'Витамин D': 1,
        'Витамин C': 2,
      };
      return map[supplyName] ?? -1;
    },
    handleKeyDown(event) {
      if (event.key === 'ArrowDown') {
        this.selectedIndex = (this.selectedIndex + 1) % this.researchData.length;
      } else if (event.key === 'ArrowUp') {
        this.selectedIndex = (this.selectedIndex - 1 + this.researchData.length) % this.researchData.length;
      }
      this.updateSelectedItem();
    },
    updateSelectedItem() {
      const selectedItem = this.researchData[this.selectedIndex];
      this.$emit('select', selectedItem);
    },
  },
  watch: {
    SupplyName: {
      immediate: true, // Выполнить обработчик сразу после монтирования
      handler() {
        this.fetchResearchData(); // Обновляем данные при изменении SupplyName
      },
    },
  },
  computed: {
    formattedDescription() {
      return this.SupplyName && this.Description
        ? `${this.SupplyName} - ${this.Description}`
        : 'Загрузка описания...';
    },
  },
};
</script>

<style scoped>
.berberine-page {
  background-color: #f9f6f3;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: left;
  padding: 60px 160px 160px;
  font-family: Raleway, sans-serif;
  text-align: left;
}

.page-header {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 120px;
}

.navigation {
  display: flex;
  gap: 12px;
}

.nav-button {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #000;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  font: 400 22.8px Raleway, sans-serif;
}

.nav-button span {
  font-family: Raleway, sans-serif;
}

.nav-icon {
  width: 15px;
  height: 26.79px;
}

.update-date {
  color: #929292;
  font: 400 24px Raleway, sans-serif;
}

.berberine-content {
  max-width: 1070px;
  width: 100%;
}

.content-header {
  margin-bottom: 24px;
}

.title {
  color: #000;
  font: 700 48px/1.2 Montserrat, sans-serif;
  margin-bottom: 16px;
}

.authors {
  color: #929292;
  font-size: 24px;
  font-family: Raleway, sans-serif;
}

.description {
  color: #000;
  font-size: 24px;
  line-height: 36px;
  margin-bottom: 36px;
  font-family: Raleway, sans-serif;
}

.action-buttons {
  display: flex;
  gap: 10px;
}

.card-container {
  display: flex;
  flex-wrap: wrap; 
  gap: 30px; 
  justify-content: center;
  padding: 120px 0;
}

@media (max-width: 991px) {
  .berberine-page {
    padding: 40px 20px 100px;
  }

  .page-header {
    margin-bottom: 40px;
  }

  .title {
    font-size: 40px;
  }

  .action-buttons {
    flex-direction: column;
  }
}
</style>