import { createRouter, createWebHistory } from 'vue-router';
import MainPage from './components/MainPage/MainPage.vue'; 
import SupplyPage from './components/SupplyPage/SupplyPage.vue';
import SignInUser from './components/User/SignInUser.vue';
import RegisterUser from './components/User/RegisterUser.vue';
import RegistrationPage from './components/User/RegistrationPage.vue';

const routes = [
  { path: '/', component: MainPage, name: 'Home' }, 
  { path: '/about', component: SupplyPage, name: 'Supply', props: true,},
  { path: '/sign', component: SignInUser, name: 'Sign Up'},
  { path: '/register', component: RegisterUser, name: 'Register'},
  { path: '/example', component: RegistrationPage, name: 'Example'}
];  

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  }
});

export default router;