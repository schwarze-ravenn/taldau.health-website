<template>
  <div class="register-user">
    <div class="form-container">
      <h1>Register</h1>

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
              class="form-input password-input"
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

        <button type="submit" class="register-btn" :disabled="isSubmitDisabled || isLoading">
          <span v-if="!isLoading">Register</span>
          <span v-else>Loading...</span>
        </button>
      </form>

      <button type="button" class="google-btn" @click="signInWithGoogle">
        <i class="fab fa-google"></i> Register with Google
      </button>

      <p class="terms-agreement">
        By creating an account, you agree to our
        <a href="#" class="privacy-link" @click.prevent="showPrivacyPolicy">
          Privacy Policy
        </a>.
      </p>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { useRouter } from 'vue-router';

export default {
  name: 'RegisterUser',
  setup() {
    const email = ref('');
    const password = ref('');
    const emailTouched = ref(false);
    const passwordTouched = ref(false);
    const showPassword = ref(false);
    const isLoading = ref(false);
    const router = useRouter();

    // Email Validation
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

      const auth = getAuth();
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email.value,
          password.value
        );
        console.log('User successfully registered:', userCredential.user);

        // Redirect to '/user' route
        router.push('/user');
      } catch (error) {
        console.error('Error during registration:', error.message);
        alert(error.message);
      } finally {
        isLoading.value = false;
      }
    };

    // Google Sign-In
    const signInWithGoogle = async () => {
      const provider = new GoogleAuthProvider();
      isLoading.value = true;

      try {
        const result = await signInWithPopup(getAuth(), provider);
        console.log('Successfully signed in with Google:', result.user);

        // Redirect to '/user' route
        router.push('/user');
      } catch (error) {
        console.error('Error during Google sign-in:', error.message);
        alert('An error occurred during Google sign-in.');
      } finally {
        isLoading.value = false;
      }
    };

    // Toggle password visibility
    const togglePassword = () => {
      showPassword.value = !showPassword.value;
    };

    // Show privacy policy
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

.register-user {
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
  position: relative;
}

.password-wrapper {
  position: relative;
}

.password-input {
  width: 100%;
  padding: 0.5rem;
  padding-right: 40px; /* Space for toggle button */
}

.toggle-password-btn {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #666;
}

.toggle-password-btn i {
  font-size: 1.2rem;
}

input.is-invalid {
  border-color: #e74c3c;
}

.error-text {
  color: #e74c3c;
  font-size: 0.85rem;
}

.register-btn {
  width: 100%;
  background-color: #4CAF50;
  color: #fff;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
}

.register-btn:hover {
  background-color: #45a049;
}

.google-btn {
  width: 100%;
  background-color: #db4437;
  color: #fff;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
}

.google-btn:hover {
  background-color: #c53727;
}

.terms-agreement {
  margin-top: 1.5rem;
  font-size: 0.85rem;
  color: #666;
}

.terms-agreement a {
  color: #4CAF50;
  text-decoration: none;
}

.terms-agreement a:hover {
  text-decoration: underline;
}
</style>