<template>
  <div class="body-wrapper">
    <div class="container">
      <div class="image">
        <div class="image-fill">
          <div class="logo">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/43799d43c463f3c8856e17c178fc49d2ff1bbf95ce011ca618540c24b41b5e02?placeholderIfAbsent=true&apiKey=93dfb7a0c21b42dc904a108a8b74866e" class="img" alt="Logo" />
            <div>Taldau.health</div>
          </div>
        </div>
      </div>
      <div class="margin">
        <div class="container-2">
          <div class="у-вас-уже-есть-аккаунт">
            У вас уже есть аккаунт?
          </div>
          <div class="div">
            <div class="container-3">Войти</div>
          </div>
        </div>
      </div>
    </div>
    <main class="main-container">
      <section class="content-wrapper">
        <article class="inner-content">
          <main class="registration-container">
            <section class="registration-form">
              <h1 class="registration-title">Зарегистрируйтесь</h1>
              <form class="form" @submit.prevent="handleSubmit">
                <div class="input-group">
                  <label for="email" class="visually-hidden">Электронная почта</label>
                  <input type="email" id="email" v-model="email" class="input-field email-input" placeholder="Электронная почта" required>
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f41e056ca0122c1019516e380d554f7108fd553cb914536b1baf9f168d84fbf?placeholderIfAbsent=true&apiKey=93dfb7a0c21b42dc904a108a8b74866e" alt="" class="input-icon" aria-hidden="true">
                </div>
                <div class="input-group">
                  <label for="password" class="visually-hidden">Пароль</label>
                  <input :type="showPassword ? 'text' : 'password'" id="password" v-model="password" class="input-field password-input" placeholder="Пароль" required>
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/54d652779b92266cd09441abadea43d0771bd0423263438aaea55c558a8a8ed2?placeholderIfAbsent=true&apiKey=93dfb7a0c21b42dc904a108a8b74866e" alt="" class="input-icon" aria-hidden="true">
                  <button type="button" class="toggle-password" @click="togglePassword" :aria-label="showPassword ? 'Скрыть пароль' : 'Показать пароль'">
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/972ae98327b0327ec040ad6c2f7e4792998c82e93e7fd82cbf60b18fd0b9d7f0?placeholderIfAbsent=true&apiKey=93dfb7a0c21b42dc904a108a8b74866e" alt="" class="toggle-password-icon" aria-hidden="true">
                  </button>
                </div>
                <button type="submit" class="submit-button" :disabled="!isFormValid">Подтвердить</button>
              </form>
              <div class="social-login">
                <button class="google-login-button" @click="handleGoogleLogin">
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/270595211f05bbb311aa1e06bac9e9b792328e723afb0444e030916e81018a92?placeholderIfAbsent=true&apiKey=93dfb7a0c21b42dc904a108a8b74866e" alt="" class="google-icon" aria-hidden="true">
                  <span>Зарегистрируйтесь с Google</span>
                </button>
              </div>
              <p class="terms-text">
                Зарегистрировавшись, вы принимаете наши<br>
                <a href="#" class="terms-link">Условия обслуживания</a> и 
                <a href="#" class="terms-link">заявление о конфиденциальности</a>
              </p>
            </section>
          </main>
        </article>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      showPassword: false
    }
  },
  computed: {
    isFormValid() {
      return this.email && this.password;
    }
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    handleSubmit() {
      if (this.isFormValid) {
        console.log('Form submitted', { email: this.email, password: this.password });
      }
    },
    handleGoogleLogin() {
      console.log('Google login clicked');
    }
  }
}
</script>

<style scoped>
.body-wrapper {
  background: var(--color-grey-98, #f9fbfd);
  background-color: var(--color-grey-98, #f9fbfd);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: var(--height-1200, 1200px);
  padding: 32px 32px 142px;
}
@media (max-width: 991px) {
  .body-wrapper {
    padding: 0 20px 100px;
  }
}
.container {
  display: flex;
  width: 100%;
  align-items: center;
  gap: 40px 100px;
  justify-content: space-between;
  flex-wrap: wrap;
}
@media (max-width: 991px) {
  .container {
    max-width: 100%;
  }
}
.image {
  align-self: stretch;
  display: flex;
  min-width: 240px;
  overflow: hidden;
  color: rgba(0, 0, 0, 1);
  white-space: nowrap;
  text-align: center;
  justify-content: start;
  margin: auto 0;
  font: 700 30px/1 Montserrat, sans-serif;
}
@media (max-width: 991px) {
  .image {
    white-space: initial;
  }
}
.image-fill {
  display: flex;
  min-width: 240px;
  flex-direction: column;
  overflow: hidden;
  align-items: center;
  justify-content: center;
}
@media (max-width: 991px) {
  .image-fill {
    white-space: initial;
  }
}
.logo {
  display: flex;
  align-items: start;
  gap: 8px;
  justify-content: start;
}
@media (max-width: 991px) {
  .logo {
    white-space: initial;
  }
}
.img {
  aspect-ratio: 0.96;
  object-fit: contain;
  object-position: center;
  width: 26px;
}
.margin {
  align-self: stretch;
  display: flex;
  min-width: 240px;
  padding-left: 12px;
  flex-direction: column;
  justify-content: start;
  width: 302px;
  margin: auto 0;
  font: var(--font-size-14, 14px) / var(--line-height-20, 20px) var(--font-family-Font-1, Inter);
}
.container-2 {
  display: flex;
  width: 100%;
  max-width: 290px;
  gap: 8px;
  padding: 0 2px;
}
.у-вас-уже-есть-аккаунт {
  color: var(--cloud-elastic-co-tuna, var(--color-blue-23, #343741));
  text-align: right;
  font-weight: var(--font-weight-400, 400);
  flex-grow: 1;
  margin: auto 0;
}
.div {
  border-radius: 4px;
  background-color: rgba(204, 228, 245, 1);
  z-index: 10;
  display: flex;
  min-width: 112px;
  color: var(--cloud-elastic-co-endeavour, var(--color-azure-33, #0061a6));
  font-weight: var(--font-weight-500, 500);
  white-space: nowrap;
  text-align: center;
  justify-content: center;
  padding: 0 12px;
}
@media (max-width: 991px) {
  .div {
    margin-right: -4px;
    white-space: initial;
  }
}
.container-3 {
  align-self: stretch;
  height: 100%;
  padding: 6px 25px;
}
@media (max-width: 991px) {
  .container-3 {
    white-space: initial;
    padding: 0 20px;
  }
}
.main-container {
  display: flex;
  margin-top: 32px;
  min-height: 962px;
  flex-direction: column;
  justify-content: center;
  padding: 225px 0;
}
@media (max-width: 991px) {
  .main-container {
    max-width: 100%;
    padding: 100px 0;
  }
}
.content-wrapper {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
}
@media (max-width: 991px) {
  .content-wrapper {
    max-width: 100%;
  }
}
.inner-content {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  padding: 0 679px;
}
@media (max-width: 991px) {
  .inner-content {
    max-width: 100%;
    padding: 0 20px;
  }
}
.registration-container {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
}
.registration-form {
  border-radius: 6px;
  display: flex;
  min-height: 416px;
  width: 355px;
  max-width: 100%;
  flex-direction: column;
  justify-content: flex-start;
}
.registration-title {
  color: var(--cloud-elastic-co-shark, var(--color-azure-12, #1a1c21));
  text-align: center;
  font: 700 28px/1 Raleway, sans-serif;
  padding: 0 38px 2px;
}
.form {
  display: flex;
  width: 100%;
  padding-bottom: 16px;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 24px;
}
.input-group {
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 16px;
}
.input-field {
  border-radius: 6px;
  background-color: #fff;
  min-height: 40px;
  width: 100%;
  max-width: 355px;
  color: rgba(100, 106, 119, 1);
  padding: 12px 12px 12px 36px;
  font: 500 14px Raleway, sans-serif;
  border: 1px solid rgba(211, 218, 230, 1);
}
.input-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
}
.toggle-password {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}
.toggle-password-icon {
  width: 16px;
  height: 16px;
}
.submit-button {
  border-radius: 6px;
  background: rgba(105, 112, 125, 0.2);
  min-height: 40px;
  width: 100%;
  color: rgba(162, 171, 186, 1);
  text-align: center;
  font: 600 14px/1 Raleway, sans-serif;
  border: none;
  cursor: pointer;
  padding: 10px;
  margin-top: 16px;
}
.submit-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.social-login {
  margin-top: 16px;
}
.google-login-button {
  border-radius: 6px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  width: 100%;
  max-width: 355px;
  padding: 9px 13px;
  border: 1px solid rgba(211, 218, 230, 1);
  cursor: pointer;
}
.google-icon {
  width: 16px;
  height: 16px;
  margin-right: 8px;
}
.terms-text {
  color: rgba(100, 106, 119, 1);
  text-align: center;
  font: 400 12px/16px Inter, sans-serif;
  margin-top: 16px;
}
.terms-link {
  color: rgba(0, 107, 184, 1);
  text-decoration: none;
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
  .registration-container {
    max-width: 100%;
  }
  .registration-title {
    padding: 0 20px;
  }
  .input-field {
    padding-left: 20px;
  }
  .google-login-button span {
    padding: 0 20px;
  }
}
</style>