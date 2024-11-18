<template>
    <main class="login-container">
      <form class="login-form" @submit.prevent="register">
        <button type="button" class="google-button" @click="signInWithGoogle">
          Войти с Google
        </button>
        <p class="separator-text">или войти с...</p>
        <div class="form-group">
          <label for="email" class="form-label">Электронная почта</label>
          <input
            type="email"
            id="email"
            v-model="email"
            class="form-input"
            placeholder="myemail@gmail.com"
            required
          >
        </div>
        <div class="form-group">
          <label for="password" class="form-label">Пароль</label>
          <input
            type="password"
            id="password"
            v-model="password"
            class="form-input"
            placeholder="••••••••••••••"
            required
          >
        </div>
        <p class="terms-agreement">
          Создавая аккаунт, я соглашаюсь с
          <a href="" class="privacy-link" @click.prevent="showPrivacyPolicy">
            политикой конфиденциальности
          </a>
          данного сайта
        </p>
        <p v-if="errMsg"> {{ errMsg }}</p>
        <button type="submit" class="submit-button">Подтвердить</button>
      </form>
    </main>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
  import { useRouter } from 'vue-router';
  
  export default {
    name: 'RegisterUser',
    setup() {
      const email = ref('');
      const password = ref('');
      const errMsg = ref ()
      const router = useRouter()
      const register = () => {
        const auth = getAuth()
        signInWithEmailAndPassword(getAuth(), email.value, password.value)
            .then((data) => {
                console.log("Successfully signed in!", data);
                console.log(auth.currentUser)
                router.push('/about')
            })
            .catch ((error) => {
                console.log(error.code);
                switch (error.code) {
                  case "auth/invalid-email":
                    errMsg.value = "Invalid Email";
                    break;
                  case "auth/user-not-found":
                    errMsg.value = "No account with that Email was found";
                    break;
                  case "auth/wrong-password":
                    errMsg.value = "Incorrect password";
                    break;  
                  default:
                    errMsg.value = "Email or password was incorrect";
                    break;
                }
            })
      }
  
      const signInWithGoogle = () => {

      }
  
      const showPrivacyPolicy = () => {
        console.log('Privacy policy link clicked');
      };
  
      return {
        email,
        password,
        // errMsg,
        register,
        signInWithGoogle,
        showPrivacyPolicy
      };
    }
  };
  </script>
  
  <style scoped>
  .login-container {
    background-color: rgba(255, 255, 255, 0.93);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 118px 80px;
    font: 400 27px/1 Inter, sans-serif;
    color: rgba(130, 130, 130, 1);
  }
  
  .login-form {
    border-radius: 8px;
    background-color: #fff;
    box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.25);
    width: 607px;
    max-width: 100%;
    padding: 76px 40px;
    border: 1px solid #d9d9d9;
  }
  
  .google-button {
    width: 100%;
    border-radius: 10px;
    background-color: #2a7cf7;
    color: #f5f5f5;
    padding: 20px;
    border: none;
    cursor: pointer;
  }
  
  .separator-text {
    font-size: 23px;
    text-align: center;
    margin-top: 31px;
  }
  
  .form-group {
    margin-top: 30px;
  }
  
  .form-label {
    color: #000;
    display: block;
    margin-bottom: 8px;
  }
  
  .form-input {
    width: 100%;
    border-radius: 10px;
    background-color: #fff;
    padding: 12px 16px;
    border: 1px solid #d9d9d9;
    font-size: 16px;
  }
  
  .terms-agreement {
    color: #1e1e1e;
    font-size: 23px;
    line-height: 32px;
    margin-top: 30px;
  }
  
  .privacy-link {
    text-decoration: underline;
    color: inherit;
  }
  
  .submit-button {
    width: 100%;
    border-radius: 10px;
    background-color: #000;
    color: #f5f5f5;
    padding: 20px;
    margin-top: 30px;
    border: 2px solid #2c2c2c;
    cursor: pointer;
  }
  
  @media (max-width: 991px) {
    .login-container {
      padding: 100px 20px;
    }
  
    .login-form {
      padding: 40px 20px;
    }
  
    .terms-agreement {
      font-size: 20px;
      line-height: 28px;
    }
  }
  </style>