<template>
    <div>
      <!-- Компонент поисковой строки -->
      <SearchBar @submit-search="handleSearch" />
  
      <!-- Компонент фильтрации по тегам -->
      <TagList :tags="tags" @toggle-tag="toggleTag" />
  
      <!-- Отображение результатов поиска -->
      <div v-if="searchResults.length > 0" class="results">
        <div v-for="result in searchResults" :key="result._id" class="result-item">
          <h3>{{ result._source.title }}</h3>
          <p>{{ result._source.content }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import SearchBar from './SearchBar.vue';
  import TagList from './TagList.vue';
  
  export default {
    components: {
      SearchBar,
      TagList
    },
    data() {
      return {
        searchResults: [],
        searchQuery: '', // Строка поиска
        tags: [
          { text: 'Берберин', active: false, iconSrc: '/images/plus-icon.png' },
          { text: 'Vitamin D', active: false, iconSrc: '/images/vitamin-d-icon.png' },
          { text: 'Тревожность', active: false, iconSrc: '/images/anxiety-icon.png' },
          { text: 'Потеря веса', active: false, iconSrc: '/images/weight-loss-icon.png' }
        ]
      };
    },
    methods: {
      // Метод для отправки поискового запроса
      handleSearch(searchQuery) {
        this.searchQuery = searchQuery;
        this.performSearch();
      },
  
      // Метод для переключения тегов
      toggleTag(index) {
        this.tags[index].active = !this.tags[index].active;
        this.performSearch();
      },
  
      // Выполнение запроса в Elasticsearch
      performSearch() {
        const activeTags = this.tags.filter(tag => tag.active).map(tag => tag.text);
  
        axios.post('https://localhost:9200', {
          query: {
            bool: {
              must: [
                { match: { title: this.searchQuery } } // Поиск по введённой строке
              ],
              filter: activeTags.length > 0 ? [{ terms: { category: activeTags } }] : []
            }
          }
        }, {
          headers: { 'Content-Type': 'application/json' },
          auth: {
            username: 'elastic', // замените на ваши данные
            password: 'C0J_t3E5zvPgzOzo5cXP' // замените на ваш пароль
          }
        }).then(response => {
          this.searchResults = response.data.hits.hits;
        }).catch(error => {
          console.error(error);
        });
      }
    }
  };
  </script>
  
  <style scoped>
  .results {
    margin-top: 20px;
  }
  .result-item {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 10px;
  }
  </style>  