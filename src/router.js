import { createRouter, createWebHistory } from 'vue-router';

import MainPage from './components/MainPage/MainPage.vue';
import SupplyPage from './components/SupplyPage/SupplyPage.vue';
// import SignInUser from './components/User/SignInUser.vue';
// import RegisterUser from './components/User/RegisterUser.vue';
// import UserPage from './components/User/UserPage.vue';
import ErrorPage from "@/components/User/ErrorPage.vue";

const routes = [
  { path: '/', component: MainPage, name: 'Home' },
  { path: '/about', component: SupplyPage, name: 'Supply', props: true },
  { path: "/:pathMatch(.*)*", component: ErrorPage },
  // { path: '/register', component: RegisterUser, name: 'Register', meta: { requiresGuest: true } },
  // { path: '/sign', component: SignInUser, name: 'Sign Up', meta: { requiresGuest: true } },
  // { path: '/user', component: UserPage, name: 'User', meta: { requiresAuth: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

// router.beforeEach((to, from, next) => {
//   const auth = getAuth();
//   const user = auth.currentUser;

//   if (to.meta.requiresAuth && !user) {
//     console.log('Неавторизованный пользователь пытается получить доступ к защищенной странице');
//     next('/register');
//   } else if (to.meta.requiresGuest && user) {
//     console.log('Авторизованный пользователь пытается получить доступ к гостевой странице');
//     next('/user');
//   } else {
//     next(); 
//   }
// });

export default router;