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
        <button ref="section1" class="nav-button">Главная</button>
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
        <!-- <PrimaryButton>Просмотреть библиотеку</PrimaryButton> -->
        <PrimaryButton @click="scrollToSection('section4')">Просмотреть библиотеку</PrimaryButton>
        <SecondaryButton>Сохранить</SecondaryButton>
      </div>
    </article>
  </main>
  <section class="card-container">
    <section class="berberine-section">
      <div class="content-wrapper">
        <div class="content-layout">
          <main class="main-content">
            <article class="info-container">
              <h1 ref="section2" class="title" :class="{ active: isVisible('section2') }">
                Что такое {{ SupplyName }}?
              </h1>
              <p class="description italic">{{ What }}</p>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/09df3d391cf8cc0c4172b2c2cb19c9fe93ec33198e67229329422e4012ce6af1?placeholderIfAbsent=true&apiKey=4f983dce57534b4d9de05eb2f8bf9aaf"
                alt="Визуальное представление берберина"
                class="info-image"
              />

              <h1 ref="section3" class="title" :class="{ active: isVisible('section3') }">
                Какие эффекты от {{ SupplyName }}?
              </h1>
              <p class="description">{{ How }}</p>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/09df3d391cf8cc0c4172b2c2cb19c9fe93ec33198e67229329422e4012ce6af1?placeholderIfAbsent=true&apiKey=4f983dce57534b4d9de05eb2f8bf9aaf"
                alt="Иллюстрация эффектов берберина"
                class="info-image"
              />

              <h1 ref="section4" class="title" :class="{ active: isVisible('section4') }">
                База исследований {{ SupplyName }}
              </h1>
            </article>
          </main>

          <nav class="side-navigation" role="navigation">
            <div class="nav-header">
            </div>
            <ul class="nav-list">
              <li
                v-for="(item, index) in navigationItems"
                :key="index"
                class="nav-item"
                :class="{ 
                  active: activeSection === item.sectionRef,
                  'nav-item--bold': activeSection === item.sectionRef
                }"
                @click="scrollToSection(item.sectionRef)"
                tabindex="0"
              >
                <span 
                  class="nav-item-indicator" 
                  :class="{ 'nav-item-indicator--active': activeSection === item.sectionRef }"
                ></span>
                {{ item.text }}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
    
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
import { ref, onMounted, onUnmounted } from 'vue';
import PrimaryButton from './PrimaryButton.vue';
import SecondaryButton from './SecondaryButton.vue';
import ResearchCard from './ResearchCard.vue';

export default {
  name: 'BerberinePage',
  components: {
    PrimaryButton,
    SecondaryButton,
    ResearchCard
  },
  props: ['SupplyName', 'Description', 'Category', 'Authors', 'What', 'How'],
  setup() {
    const activeSection = ref('section1');
    const observer = ref(null);
    const sections = ref([]);
  
    const setupIntersectionObserver = () => {
      observer.value = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            activeSection.value = entry.target.getAttribute('ref');
          }
        });
      }, {
        threshold: 0.5,
        rootMargin: '-50px'
      });

      sections.value.forEach(section => {
        if (section) observer.value.observe(section);
      });
    };

    onMounted(() => {
      sections.value = [
        document.querySelector('[ref="section1"]'),
        document.querySelector('[ref="section2"]'),
        document.querySelector('[ref="section3"]'),
        document.querySelector('[ref="section4"]')
      ];
      setupIntersectionObserver();
    });

    onUnmounted(() => {
      if (observer.value) {
        sections.value.forEach(section => {
          if (section) observer.value.unobserve(section);
        });
      }
    });

    return {
      activeSection,
      sections
    };
  },
  data() {
    return {
      researchData: [],
      navigationItems: [
        { text: 'Главная', sectionRef: 'section1' },
        { text: 'Берберин', sectionRef: 'section2' },
        { text: 'Преимущества', sectionRef: 'section3' },
        { text: 'Исследования', sectionRef: 'section4' }
      ]
    };
  },
  mounted() {
    this.fetchResearchData();
  },
  watch: {
    SupplyName: {
      immediate: true, 
      handler(newSupplyName) {
        if (newSupplyName) {
          this.fetchResearchData(newSupplyName);
        }
      },
    },
  },
  methods: {
    // async fetchResearchData() {
    async fetchResearchData(supplyName) {
      try {
        if (!this.SupplyName) return;
        const docRef = doc(db, 'supplies', 'research');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          const index = this.getSupplyIndex(supplyName);
          // const index = this.getSupplyIndex(this.SupplyName);

          if (index !== -1) {
            this.researchData = [{
              Effect: data.effect[index],
              ResearchName: data.research_name[index],
              Details: data.details[index],
            }];
          }
        }
      } catch (error) {
        console.error("Error fetching research data:", error);
      }
    },
    getSupplyIndex(supplyName) {
      return {
        'Берберин': 0,
        'Витамин D': 1,
        'Витамин C': 2,
        'Омега 3': 3,
        'Магний': 4,
        'Железо C': 5,
      }[supplyName] ?? -1;
    },
    scrollToSection(sectionRef) {
      if (!sectionRef) return;
      const element = this.$refs[sectionRef];
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        this.activeSection = sectionRef;
      }
    },
    isVisible(sectionRef) {
      return this.activeSection === sectionRef;
    }
  },
  computed: {
    formattedDescription() {
      return this.SupplyName && this.Description
        ? `${this.SupplyName} - ${this.Description}`
        : 'Загрузка описания...';
    }
  }
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
  scroll-margin-top: 100px;
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
  display: grid;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: left;
  padding: 0 160px 120px;
  width: 100%;
}

.berberine-section {
  display: flex;
  flex-direction: column;
}

.content-wrapper {
  background-color: #fff;
  width: 100%;
  padding: 120px 0 0;
}

.content-layout {
  display: flex;
  gap: 20px;
}

.main-content {
  width: 83%;
}

.info-container {
  display: flex;
  width: 80%;
  flex-direction: column;
  align-items: start;
  font: 700 48px Montserrat, sans-serif;
  text-align: left;
}

.info-image {
  aspect-ratio: 500;
  object-fit: contain;
  object-position: center;
  width: 1131px;
  margin-top: 35px;
  max-width: 100%;
}

.side-navigation {
  width: 17%;
  margin-left: 20px;
  text-align: left;
  position: sticky;
  top: 20px;
}

.nav-header {
  display: flex;
  width: 98px;
  font: 400 24px Raleway, sans-serif;
}

.nav-indicator {
  background-color: #5E28CB;
  border-radius: 50%;
  width: 11px;
  height: 11px;
  margin: auto 0;
}

.nav-list {
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  margin-top: 27px;
  font: 400 24px Raleway, sans-serif;
  color: #000;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
}

.nav-item--bold {
  font-weight: 700;
}

.nav-item-indicator {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background-color: transparent;
  transition: background-color 0.3s ease;
}

.nav-item-indicator--active {
  background-color: #5E28CB;
}

.nav-item:focus {
  outline: 2px solid #5E28CB;
  border-radius: 4px;
}

.italic {
  font-style: italic;
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

  .side-navigation {
    width: 100%;
    margin-top: 40px;
    position: static;
  }
}
</style>