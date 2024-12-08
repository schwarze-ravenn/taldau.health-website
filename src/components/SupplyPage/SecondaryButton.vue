<template>
  <button class="secondary-button" @click="toggleState">
    <div class="button-content">
      <transition name="fade" mode="out-in">
        <span :key="buttonText" class="button-text">{{ buttonText }}</span>
      </transition>
    </div>
    <transition name="fade" mode="out-in">
      <img
        :key="iconSrc"
        :src="iconSrc"
        :alt="buttonText"
        class="button-icon"
        :class="{ 'inverted': isClicked }"
      />
    </transition>
  </button>
</template>

<script>
import { ref, computed, onMounted } from 'vue';

export default {
  name: 'SecondaryButton',
  setup(props, { slots }) {
    const isClicked = ref(false);
    const initialText = ref('');
    const initialIconSrc = 'https://cdn.builder.io/api/v1/image/assets/TEMP/57f6d2be1cc46019533833e2afb1a7902d98cb9c3bf5af271e3b3d91d3e887d9?placeholderIfAbsent=true&apiKey=93dfb7a0c21b42dc904a108a8b74866e';
    const clickedIconSrc = require ('@/images/save.svg');

    const buttonText = computed(() => isClicked.value ? 'Удалить' : initialText.value);
    const iconSrc = computed(() => isClicked.value ? clickedIconSrc : initialIconSrc);

    const toggleState = () => {
      isClicked.value = !isClicked.value;
    };

    onMounted(() => {
      initialText.value = slots.default()[0].children;
    });

    return {
      isClicked,
      buttonText,
      iconSrc,
      toggleState
    };
  }
};
</script>

<style scoped>
.secondary-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 24px;
  border-radius: 4px;
  font-size: 22.8px;
  cursor: pointer;
  font-family: Raleway, sans-serif;
  background-color: #fff;
  color: #000;
  border: 2px solid #000;
  transition: all 0.3s ease;
}

.button-content {
  display: inline-block;
  overflow: hidden;
}

.button-text {
  font-family: Raleway, sans-serif;
  white-space: nowrap;
  display: inline-block;
}

.button-icon {
  width: 16px;
  height: 22px;
  transition: filter 0.3s ease;
}

/* .button-icon.inverted {
  filter: invert(1);
} */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

@media (max-width: 991px) {
  .secondary-button {
    width: 100%;
    justify-content: center;
  }
}
</style>