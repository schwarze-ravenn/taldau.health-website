<template>
  <header :class="['header', { 'black-background': blackBackground || isDropdownVisible }]">
    <nav class="navigation" @mouseleave="hideDropdown">
      <router-link to="/" class="logo-link" @click="closeDropdown">
        <div class="logo">
          <img src="@/images/logo-icon.png" alt="Taldau.health logo" class="logo-image" />
          <h1 class="logo-text">Taldau.Health</h1>
        </div>
      </router-link>
      <ul class="nav-links">
        <li v-for="(item, index) in navItems" :key="index" class="nav-item" @mouseenter="showDropdown(index)">
          <router-link :to="item.link" class="nav-link">{{ item.text }}</router-link>
          <img :src="item.iconSrc" alt="" class="nav-icon" :class="{ 'rotate-icon': activeDropdown === index }" />
        </li>
        <li class="nav-item">
          <router-link to="" class="nav-link">О нас</router-link>
        </li>
      </ul>
      <div class="controls">
        <button class="search-button" aria-label="Search" @mouseenter="showDropdown('search')">
          <img src="@/images/search-nav-icon.svg" alt="" class="search-icon" />
        </button>
        <button class="pro-button" @click="goToUserPage">  
          <span class="pro-text">Taldau Pro</span>
          <img src="@/images/plus-nav-icon.png" alt="" class="pro-icon" />
        </button>
        <div class="language-selector" @click="toggleLanguage">
          <span class="language">{{ currentLanguage }}</span>
        </div>
        <button class="profile-button" aria-label="Profile" @click="goToUserPage">
        <!-- <button class="profile-button" aria-label="Profile"> -->
          <img src="@/images/profile-icon.png" alt="Profile Icon" class="profile-icon" />
        </button>
      </div>
    </nav>
    <NavBarDropDown :isDropdownVisible="isDropdownVisible" @mouseenter="keepDropdownVisible" @mouseleave="hideDropdown" @closeDropdown="closeDropdown" />
  </header>
</template>

<script>
import NavBarDropDown from './NavBarDropDown.vue';
import { useRouter } from 'vue-router';

export default {
  name: 'NavBar',
  setup() {
    const router = useRouter();

    const goToUserPage = () => {
      // router.push('/user');
      router.push('*');
    };

    return {
      goToUserPage,
    };
  },
  components: {
    NavBarDropDown
  },
  data() {
    return {
      navItems: [
        { text: 'Добавки', link: '', iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/286229b43688dad369764a5b6b8844a49d6c239caf1bab04b39ade5ce05f414f' },
        { text: 'Расстройства', link: '', iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/286229b43688dad369764a5b6b8844a49d6c239caf1bab04b39ade5ce05f414f' },
        { text: 'Признаки', link: '', iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/286229b43688dad369764a5b6b8844a49d6c239caf1bab04b39ade5ce05f414f' },
        { text: 'Категории', link: '', iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/286229b43688dad369764a5b6b8844a49d6c239caf1bab04b39ade5ce05f414f' },
      ],
      isDropdownVisible: false,
      activeDropdown: null,
      dropdownTimer: null,
      currentLanguage: 'EN'
    };
  },
  props: {
    blackBackground: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    showDropdown(index) {
      clearTimeout(this.dropdownTimer);
      this.isDropdownVisible = true;
      this.activeDropdown = index;
    },
    hideDropdown() {
      this.dropdownTimer = setTimeout(() => {
        this.isDropdownVisible = false;
        this.activeDropdown = null;
      }, 600);
    },
    closeDropdown() {
      this.isDropdownVisible = false;
      this.activeDropdown = null;
    },
    keepDropdownVisible() {
      clearTimeout(this.dropdownTimer);
    },
    handleKeydown(event) {
      if (event.key === 'Escape') {
        this.isDropdownVisible = false;
        this.activeDropdown = null;
      }
    },
    toggleLanguage() {
      this.currentLanguage = this.currentLanguage === 'EN' ? 'RU' : 'EN';
    }
  },
  mounted() {
    window.addEventListener('keydown', this.handleKeydown);
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }
};
</script>

<style scoped>
.black-background {
  background-color: black;
}
.header {
  position: relative;
  padding: 40px 90px;
}
.navigation {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
}
.logo-link {
  text-decoration: none;
}
.logo {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #fff;
  font: 700 30px/1 Montserrat, sans-serif;
}
.logo-image {
  width: 26px;
  height: 27px;
  object-fit: contain;
}
.logo-text {
  font: 700 30px Montserrat, sans-serif;
}
.nav-links {
  display: flex;
  gap: 48px;
  list-style-type: none;
  padding: 0;
  margin: 0;
  justify-content: center;
}
.nav-item {
  display: flex;
  align-items: center;
  gap: 6px;
  position: relative;
}
.nav-link {
  color: #fff;
  text-decoration: none;
  font: 400 23px Raleway, sans-serif;
}
.nav-icon {
  width: 15px;
  height: 27px;
  object-fit: contain;
  transition: transform 0.3s ease;
}
.rotate-icon {
  transform: rotate(180deg);
}
.nav-item::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #9747FF;
  transition: width 0.3s ease;
}
.nav-item:hover::after {
  width: 100%;
}
.controls {
  display: flex;
  align-items: center;
  gap: 26px;
}
.search-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: opacity 0.3s ease;
}
.search-icon {
  width: 25px;
  height: 26px;
  object-fit: contain;
}
.search-button:hover {
  opacity: 0.7;
}
.pro-button {
  display: flex;
  align-items: center;
  gap: 10px;
  background: none;
  border: 1px solid #fff;
  border-radius: 2px;
  color: #fff;
  padding: 8px 16px;
  cursor: pointer;
}
.pro-text {
  font: 500 22px Raleway, sans-serif;
}
.pro-icon {
  width: 17px;
  height: 16px;
  object-fit: contain;
}
.language-selector {
  color: #fff;
  font: 400 22.8px Raleway, sans-serif;
  cursor: pointer;
  position: relative;
  transition: transform 0.3s ease;
}
.language-selector:hover {
  transform: translateY(-4px);
}
.language-selector::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #fff;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}
.language-selector:hover::after {
  transform: scaleX(1);
}
.profile-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: opacity 0.3s ease;
}
.profile-icon {
  width: 32px;
  height: 32px;
  object-fit: contain;
}
.profile-button:hover {
  opacity: 0.7;
}
@media (max-width: 991px) {
  .header {
    padding: 40px 20px;
  }
  .navigation {
    flex-direction: column;
    align-items: flex-start;
  }
  .nav-links {
    flex-direction: column;
    gap: 20px;
  }
}
</style>