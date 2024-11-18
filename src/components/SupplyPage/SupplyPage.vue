<template>
  <router-view />
  <NavBar :blackBackground="true" />
  <HeroSection 
      :SupplyName="SupplyName" 
      :Description="Description" 
      :Category="Category" 
      :Authors="Authors" 
    />
  <FooterSection/>
  
</template>
  
<script>
import NavBar from '@/components/MainPage/NavBar.vue';
import HeroSection from './HeroSection.vue';
import FooterSection from '@/components/MainPage/FooterSection.vue';

export default {
  name: 'SupplyPage',
  components: {
    NavBar, 
    HeroSection,
    FooterSection,
  },
  computed: {
    // Извлекаем параметры из `query`
    SupplyName() {
      return this.$route.query.SupplyName || '';
    },
    Description() {
      return this.$route.query.Description || '';
    },
    Category() {
      return this.$route.query.Category || '';
    },
    Authors() {
      return this.$route.query.Authors || '';
    },
  },
};
</script>