<template>
  <div>
    <router-view />
  </div>
</template>

<script>
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import { useRouter } from 'vue-router';

export default {
  name: 'App',
  // setup() {
  //   const auth = getAuth();
  //   const router = useRouter();

  //   onAuthStateChanged(auth, (user) => {
  //     const currentRoute = router.currentRoute.value.path; 

  //     if (user && currentRoute !== '/user') {
  //       console.log('Пользователь авторизован:', user.email);
  //       router.push('/user');
  //     } else if (!user && currentRoute !== '/register') {
  //       console.log('Пользователь не авторизован');
  //       router.push('/register');
  //     }
  //   });

  //   return {};
  // },
};
</script>

<style>
#app {
  font: 24px 400 Montserrat, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.highlight-text {
  text-decoration: underline;
  color: #4b14b9;
  font: 400 28px Raleway, sans-serif;
}
</style>