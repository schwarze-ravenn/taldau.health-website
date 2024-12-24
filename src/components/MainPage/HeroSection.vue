<template>
  <section class="hero" :style="{ backgroundImage: `url(${backgroundImage})` }">
    <NavBar/>
    <main class="main-content">
      <MainText />
      <SearchBar />
      <TagList :tags="tags" @toggle-tag="toggleTag" />
      <!-- <CtaButton /> -->
    </main>
  </section>
</template>

<script>
import NavBar from './NavBar.vue';
import MainText from './MainText.vue';
import SearchBar from './SearchBar.vue';
import TagList from './TagList.vue';
// import CtaButton from './CtaButton.vue';

export default {
  name: 'HeroSection',
  components: {
    NavBar,
    MainText,
    SearchBar,
    TagList,
    // CtaButton
  },
  data() {
    return {
      // backgroundImage: './images/heroo.png',
      // backgroundImage: './images/hero.png',
      backgroundImage: './images/hero1.png',
      tags: [
        { text: 'Депрессия', active: true },
        { text: 'Бессоница', active: false },
        { text: 'Усталость', active: false },
        { text: 'Низкий тестостерон', active: false },
        { text: 'Сон', active: false },
        { text: 'Креатин', active: false },
        { text: 'Подробнее', active: false },
      ],
    };
  },
  methods: {
    toggleTag(index) {
      this.tags = this.tags.map((tag, i) => ({
        ...tag,
        active: i === index ? !tag.active : tag.active,
      }));
    },
  },
};
</script>

<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  background-size: cover;
  background-position: center;
  min-height: 100vh;
}

.main-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 80px 90px;
  text-align: center;
}

@media (max-width: 991px) {
  .main-content {
    padding: 0 20px 90px;
  }
}
</style>