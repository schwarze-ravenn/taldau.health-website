<template>
    <div v-if="isVisible" class="search-dropdown">
      <div class="search-container">
        <input type="text" v-model="searchQuery" @input="handleSearch" placeholder="Хочу найти..." class="search-input" />
        <button @click="closeDropdown" class="close-button">
          <img src="@/images/close-icon.png" alt="Close" class="close-icon" />
        </button>
      </div>
      <div class="search-results">
        <div class="popular-column">
          <h2 class="column-title">Популярныее</h2>
          <ul class="result-list">
            <li v-for="(item, index) in popularItems" :key="index" class="result-item">
              {{ item }}
            </li>
            <li class="result-item view-all">Просмотреть все</li>
          </ul>
        </div>
        <div class="all-column">
          <h2 class="column-title">Все</h2>
          <ul class="result-list">
            <li v-for="(item, index) in allItems" :key="index" class="result-item">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NavBarSearchDropDown',
    props: {
      isVisible: {
        type: Boolean,
        default: false
      },
    },
    data() {
      return {
        searchQuery: '',
        popularItems: ['Витамин D', 'Омега 3', 'Магний', 'Берберин', 'CoQ10', 'Коллаген', 'Железо'],
        allItems: ['Кальций', 'Цинк', 'Витамин С', 'Пробиотики', 'Ашваганда', 'Л-карнитин', 'Масло черного тмина', 'Протеин'],
      };
    },
    methods: {
      handleSearch() {
      },
      closeDropdown() {
        this.$emit('close');
      },
    },
  };
  </script>
  
  <style scoped>
  .search-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #000;
    padding: 40px 90px;
    z-index: 1000;
  }
  .search-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
  }
  .search-input {
    flex-grow: 1;
    background: none;
    border: none;
    border-bottom: 1px solid #fff;
    color: #fff;
    font-size: 56px;
    font-family: Montserrat, sans-serif;
    font-weight: 600;
    padding: 10px 0;
  }
  .search-input::placeholder {
    color: #393939;
  }
  .close-button {
    background: none;
    border: none;
    cursor: pointer;
  }
  .close-icon {
    width: 24px;
    height: 24px;
  }
  .search-results {
    display: flex;
    justify-content: space-between;
  }
  .popular-column,
  .all-column {
    width: 45%;
  }
  .column-title {
    color: #393939;
    font-size: 36px;
    font-family: Montserrat, sans-serif;
    font-weight: 600;
    margin-bottom: 20px;
  }
  .result-list {
    list-style-type: none;
    padding: 0;
  }
  .result-item {
    color: #fff;
    font-size: 23px;
    font-family: Raleway, sans-serif;
    padding: 10px 0;
  }
  .view-all {
    margin-top: 20px;
  }
  @media (max-width: 991px) {
    .search-dropdown {
      padding: 20px;
    }
    .search-input {
      font-size: 40px;
    }
    .search-results {
      flex-direction: column;
    }
    .popular-column,
    .all-column {
      width: 100%;
    }
  }
  </style>