<template>
  <button class="cta-button" @click="handleClick" @mouseenter="isHovered = true" @mouseleave="isHovered = false">
    <div class="cta-content">
      <span :class="['cta-text', { 'slide-up': isHovered }]">Исследуйте все возможности с Taldau Pro</span>
      <span :class="['cta-text hover-text', { 'slide-up': isHovered }]">Исследуйте все возможности с Taldau Pro</span>
    </div>
    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0df7b90f102f1c95a76999fc8ead25cafc9ed677a6ce51342d3199fbeb2fafb1?placeholderIfAbsent=true&apiKey=93dfb7a0c21b42dc904a108a8b74866e" alt="" class="cta-icon" />
  </button>
</template>

<script>
export default {
  name: 'CtaButton',
  data() {
    return {
      isHovered: false
    };
  },
  methods: {
    handleClick() {
      console.log('CTA button clicked');
    }
  }
};
</script>

<style scoped>
.cta-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  margin-top: 60px;
  padding: 16px 25px;
  border-radius: 4px;
  background-color: #000;
  border: none;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  overflow: hidden;
  position: relative;
}

.cta-button:hover {
  background-color: #fff;
  transform: translateY(-2px);
}

.cta-content {
  position: relative;
  overflow: hidden;
  height: 30px;
}

.cta-text {
  font: 500 24px Raleway, sans-serif;
  display: block;
  transition: transform 0.3s ease;
}

.hover-text {
  position: absolute;
  top: 100%;
  left: 0;
  color: #000;
}

.slide-up {
  transform: translateY(-100%);
}

.cta-icon {
  width: 19px;
  height: 12px;
  object-fit: contain;
  transition: filter 0.3s ease;
}

.cta-button:hover .cta-icon {
  filter: invert(1);
}

@media (max-width: 991px) {
  .cta-button {
    margin-top: 40px;
    padding: 14px 20px;
  }

  .cta-text {
    font-size: 20px;
  }
}
</style>