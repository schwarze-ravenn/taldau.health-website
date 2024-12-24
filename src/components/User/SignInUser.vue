<template>
  <div class="login-user">
    <div class="form-container">
      <h1>Sign In</h1>

      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            class="form-input"
            :class="{ 'is-invalid': emailTouched && emailError }"
            placeholder="Enter your email"
            @blur="emailTouched = true"
            required
          />
          <small v-if="emailTouched && emailError" class="error-text">{{ emailError }}</small>
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <div class="password-wrapper">
            <input
              :type="showPassword ? 'text' : 'password'"
              id="password"
              v-model="password"
              class="form-input"
              :class="{ 'is-invalid': passwordTouched && passwordError }"
              placeholder="Enter your password"
              @blur="passwordTouched = true"
              required
            />
            <button
              type="button"
              class="toggle-password-btn"
              @click="togglePassword"
              aria-label="Toggle password visibility"
            >
              <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
            </button>
          </div>
          <small v-if="passwordTouched && passwordError" class="error-text">{{ passwordError }}</small>
        </div>

        <p v-if="errMsg" class="error-text">{{ errMsg }}</p>

        <button type="submit" class="login-btn" :disabled="isSubmitDisabled || isLoading">
          <span v-if="!isLoading">Sign In</span>
          <span v-else>Loading...</span>
        </button>
      </form>

      <button type="button" class="google-btn" @click="signInWithGoogle">
        <i class="fab fa-google"></i> Sign In with Google
      </button>

    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { useRouter } from 'vue-router';

export default {
  name: 'SignInUser',
  setup() {
    const email = ref('');
    const password = ref('');
    const emailTouched = ref(false);
    const passwordTouched = ref(false);
    const showPassword = ref(false);
    const isLoading = ref(false);
    const errMsg = ref('');
    const router = useRouter();

    const emailError = computed(() => {
      if (!email.value) return 'Email is required.';
      const emailPattern = /^[^\s@]+@[^\s@]+\.(com|ru|net|org|edu)$/;
      if (!emailPattern.test(email.value)) {
        return 'Please use a valid email address (e.g., gmail.com, mail.ru).';
      }
      return '';
    });

    const passwordError = computed(() => {
      if (!password.value) return 'Password is required.';
      if (password.value.length < 8) {
        return 'Password must be at least 8 characters.';
      }
      return '';
    });

    const isSubmitDisabled = computed(() => {
      return emailError.value || passwordError.value;
    });

    const handleSubmit = async () => {
      emailTouched.value = true;
      passwordTouched.value = true;

      if (emailError.value || passwordError.value) {
        console.error('Validation failed. Please fix errors.');
        return;
      }

      isLoading.value = true;
      errMsg.value = '';

      try {
        const auth = getAuth();
        await signInWithEmailAndPassword(auth, email.value, password.value);
        console.log('Successfully signed in!');
        router.push('/user'); 
      } catch (error) {
        console.error('Error during sign-in:', error.message);
        switch (error.code) {
          case 'auth/invalid-email':
            errMsg.value = 'Invalid Email.';
            break;
          case 'auth/user-not-found':
            errMsg.value = 'No account with that Email was found.';
            break;
          case 'auth/wrong-password':
            errMsg.value = 'Incorrect password.';
            break;
          default:
            errMsg.value = 'An error occurred during sign-in. Please try again.';
            break;
        }
      } finally {
        isLoading.value = false;
      }
    };

    const signInWithGoogle = async () => {
      const provider = new GoogleAuthProvider();
      isLoading.value = true;

      try {
        const result = await signInWithPopup(getAuth(), provider);
        console.log('Successfully signed in with Google:', result.user);
        router.push('/user');
      } catch (error) {
        console.error('Error during Google sign-in:', error.message);
        errMsg.value = 'An error occurred during Google sign-in. Please try again.';
      } finally {
        isLoading.value = false;
      }
    };

    const togglePassword = () => {
      showPassword.value = !showPassword.value;
    };

    const showPrivacyPolicy = () => {
      console.log('Privacy policy link clicked');
    };

    return {
      email,
      password,
      emailTouched,
      passwordTouched,
      emailError,
      passwordError,
      errMsg,
      isSubmitDisabled,
      showPassword,
      isLoading,
      handleSubmit,
      signInWithGoogle,
      togglePassword,
      showPrivacyPolicy,
    };
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&family=Raleway:wght@400;600&display=swap');

.login-user {
  font-family: 'Montserrat', 'Raleway', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f9f9f9;
}

.form-container {
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
}

h1 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #333;
}

.form-group {
  margin-bottom: 1rem;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

.password-wrapper {
  position: relative;
}

.toggle-password-btn {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
}

input.is-invalid {
  border-color: #e74c3c;
}

.error-text {
  color: #e74c3c;
  font-size: 0.85rem;
}

.login-btn {
  width: 100%;
  /* margin-top: 1rem; */
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  color: #fff;
}

.google-btn {
  width: 100%;
  margin-top: 1rem;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  color: #fff;
}

.login-btn {
  background-color: #4caf50;
}

.google-btn {
  background-color: #db4437;
}

.terms-agreement {
  margin-top: 1.5rem;
  font-size: 0.85rem;
  color: #666;
}

.terms-agreement a {
  color: #4caf50;
  text-decoration: none;
}
</style>
