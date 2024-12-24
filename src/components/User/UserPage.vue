<template>
    <div class="user-page">
      <div class="user-info-container">
        <h1>User Profile</h1>
        <div v-if="user">
          <p><strong>Email:</strong> {{ user.email }}</p>
          <p><strong>Last Login:</strong> {{ lastLoginTime }}</p>
          <p><strong>Last Activity:</strong> {{ activityTime }}</p>
          <button @click="signOut" class="sign-out-button">Sign Out</button>
          <button @click="deleteAccount" class="delete-account-button">Delete Account</button>
        </div>
        <div v-else>
          <p>No user is currently logged in. Please log in to view your profile.</p>
          <button @click="goToLogin" class="go-to-login-button">Go to Login</button>
        </div>
        <button @click="goToHome" class="go-back-button">Go Back</button>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { getAuth, onAuthStateChanged, signOut, deleteUser } from 'firebase/auth';
  import { useRouter } from 'vue-router';
  
  export default {
    name: 'UserPage',
    setup() {
      const user = ref(null);
      const lastLoginTime = ref('');
      const activityTime = ref('');
      const router = useRouter();
      const auth = getAuth();
  
      // Универсальная функция обновления данных пользователя
      const updateUser = (currentUser) => {
        if (currentUser) {
          user.value = currentUser;
          lastLoginTime.value = formatDate(currentUser.metadata.lastSignInTime);
          activityTime.value = formatDate(new Date());
        } else {
          user.value = null;
        }
      };
  
      onMounted(() => {
        onAuthStateChanged(auth, updateUser);
      });
  
      const formatDate = (date) => {
        return new Date(date).toLocaleString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        });
      };
  
      const goToLogin = () => router.push('/sign');
      const goToHome = () => router.push('/');
  
      const signOutUser = () => {
        signOut(auth)
          .then(() => {
            console.log('User signed out');
            router.push('/sign');
          })
          .catch((error) => {
            console.error('Sign Out Error:', error.message || error);
          });
      };
  
      const deleteAccount = () => {
        if (confirm('Are you sure you want to delete your account? This action is irreversible.')) {
          const currentUser = auth.currentUser;
          if (currentUser) {
            deleteUser(currentUser)
              .then(() => {
                alert('Account deleted successfully.');
                router.push('/');
              })
              .catch((error) => {
                console.error('Delete Account Error:', error.message || error);
                alert('An error occurred while deleting your account. Please try again later.');
              });
          }
        }
      };
  
      return {
        user,
        lastLoginTime,
        activityTime,
        goToLogin,
        goToHome,
        signOut: signOutUser,
        deleteAccount,
      };
    },
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&family=Raleway:wght@400;600&display=swap');
  
  .user-page {
    font-family: 'Montserrat', 'Raleway', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f9f9f9;
  }
  
  .user-info-container {
    background: #fff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 500px;
    text-align: center;
  }

  .user-info-container p {
    text-align: left;
  }
  
  h1 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    color: #333;
  }
  
  p {
    margin: 0.5rem 0;
    font-size: 1rem;
    color: #555;
  }
  
  strong {
    color: #333;
  }
  
  button {
    margin-top: 1rem;
    padding: 0.75rem;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
  }
  
  button:hover {
    opacity: 0.9;
  }
  
  .go-back-button {
    background-color: #3498db;
    color: #fff;
  }
  
  .sign-out-button {
    background-color: #e67e22;
    color: #fff;
    margin-right: 0.2rem;
  }
  
  .delete-account-button {
    background-color: #e74c3c;
    color: #fff;
  }
  
  .go-to-login-button {
    background-color: #4CAF50;
    color: #fff;
  }
  </style>  