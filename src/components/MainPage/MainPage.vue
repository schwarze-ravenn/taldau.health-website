<template>
    <div>
      <hero-section />
      <about-taldau />
      <ArticlesSection />
      <CategoriesSection />
      <FeaturesSection />
      <VideoSection />
      <EmailSection />
      <FooterSection/>
    </div>
  </template>
  
  <script>
  import HeroSection from './HeroSection.vue';
  import AboutTaldau from './AboutTaldau.vue';
  import ArticlesSection from './ArticlesSection.vue';
  import CategoriesSection from './CategoriesSection.vue';
  import FeaturesSection from './FeaturesSection.vue';
  import VideoSection from './VideoSection.vue';
  import EmailSection from './EmailSection.vue';
import FooterSection from './FooterSection.vue';
  
  export default {
    components: {
      HeroSection,
      AboutTaldau,
      ArticlesSection,
      CategoriesSection,
      FeaturesSection,
      VideoSection,
      EmailSection,
      FooterSection
    }
  };
  </script>  