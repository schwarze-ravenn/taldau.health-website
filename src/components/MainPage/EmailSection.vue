<template>
    <section class="email-section">
      <div class="content-wrapper">
        <h2 class="main-heading">Не пропустите последние новости</h2>
        <p class="subscription-description">
          Станьте частью нашего здорового общества
          <span class="highlight-text">бесплатно</span>.
          Оставайтесь в курсе новых публикаций, исследований, добавок и много других
        </p>
      </div>
      <form class="subscription-form" @submit.prevent="handleSubmit">
        <div class="input-wrapper">
          <label for="email-input" class="visually-hidden">Введите ваш e-mail</label>
          <input
            id="email-input"
            type="email"
            class="email-input"
            placeholder="Введите ваш e-mail"
            v-model="email"
            required
          />
        </div>
        <div class="form-footer">
          <button type="submit" class="submit-button">Подтвердить</button>
          <p class="privacy-notice">
            Нажимаю на кнопку, вы соглашаетесь с политикой конфиденциальности.
          </p>
        </div>
      </form>
    </section>
  </template>
  
  <script>
  export default {
    name: 'EmailSubscription',
    data() {
      return {
        email: ''
      }
    },
    methods: {
      handleSubmit() {
        console.log('Form submitted with email:', this.email)
      }
    }
  }
  </script>
  
  <style scoped>
  .email-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 120px 330px 90px;
  }
  
  .content-wrapper {
    max-width: 1260px;
    width: 100%;
    text-align: center;
  }
  
  .main-heading {
    color: #000;
    font: 700 56px/1.2 Montserrat, sans-serif;
    margin: 0 0 30px;
  }
  
  .subscription-description {
    color: #6c6c6c;
    font: 400 28px/42px Raleway, sans-serif;
    margin: 0;
  }

  .subscription-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 459px;
    max-width: 100%;
    margin-top: 36px;
  }
  
  .input-wrapper {
    width: 100%;
  }
  
  .email-input {
    width: 100%;
    padding: 18px 16px;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    font-size: 24px;
    color: #828282;
    background-color: #fff;
  }
  
  .form-footer {
    width: 100%;
    margin-top: 30px;
    text-align: center;
  }
  
  .submit-button {
    width: 100%;
    padding: 18px 20px;
    border: 1px solid #2c2c2c;
    border-radius: 4px;
    background-color: #000;
    color: #f5f5f5;
    font-size: 24px;
    cursor: pointer;
  }
  
  .privacy-notice {
    margin-top: 16px;
    font: 400 22.8px Raleway, sans-serif;
    color: #6c6c6c;
    line-height: 34px;
    text-decoration: underline;
  }
  
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
  
  @media (max-width: 991px) {
    .email-section {
      padding: 100px 20px 0;
    }
  
    .main-heading {
      font-size: 40px;
    }
  
    .subscription-description,
    .subscription-form,
    .email-input,
    .submit-button,
    .privacy-notice {
      max-width: 100%;
    }
  }
  </style>