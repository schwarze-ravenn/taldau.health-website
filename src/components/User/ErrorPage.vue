<template>
    <div class="error-page">
      <div class="error-container">
        <h1 class="error-code">404</h1>
        <p class="error-message">Упс! Страница не найдена</p>
        <p class="error-description">
          Возможно, страница, которую вы ищете, была удалена, ее имя было изменено или она временно недоступна.
        </p>
        <button class="home-button" @click="goHome">На домашнюю страницу</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ErrorPage",
    methods: {
      goHome() {
        this.$router.push("/"); 
      },
    },
  };
  </script>
  
  <style scoped>
  .error-page {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f9f9f9;
    text-align: center;
    font-family: 'Raleway', sans-serif;
    color: #333;
  }
  
  .error-container {
    max-width: 800px;
    padding: 20px;
  }
  
  .error-code {
    font-size: 8rem;
    font-weight: bold;
    color: #5E28CB;
    margin: 0;
  }
  
  .error-message {
    font-size: 2rem;
    font-weight: bold;
    margin: 10px 0;
  }
  
  .error-description {
    font-size: 1rem;
    color: #666;
    margin: 20px 0;
  }
  
  .home-button {
    background-color: #000000;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .home-button:hover {
    background-color: #5E28CB;
  }
  </style>
  