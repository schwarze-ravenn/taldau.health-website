<template>
    <button class="primary-button" @mouseenter="isHovered = true" @mouseleave="isHovered = false">
      <div class="button-content">
        <span :class="['button-text', { 'slide-up': isHovered }]">
          <slot></slot>
        </span>
        <span :class="['button-text hover-text', { 'slide-up': isHovered }]">
          <slot></slot>
        </span>
      </div>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/89239d2a0e68d9b6a9fc44d9734581d2615642db0570bb2c57f32ce80c683360?placeholderIfAbsent=true&apiKey=93dfb7a0c21b42dc904a108a8b74866e" alt="" class="button-icon" />
    </button>
  </template>
  
  <script>
  export default {
    name: 'PrimaryButton',
    data() {
      return {
        isHovered: false
      };
    }
  };
  </script>
  
  <style scoped>
  .primary-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 16px 24px;
    border-radius: 4px;
    cursor: pointer;
    background-color: #000;
    color: #fff;
    border: none;
    overflow: hidden;
    position: relative;
    font-weight: 500;
  }
  
  .button-content {
    position: relative;
    overflow: hidden;
    height: 30px;
  }
  
  .button-text {
    display: block;
    transition: transform 0.3s ease;
    font-family: Raleway, sans-serif;
    font: 500 22.8px Raleway, sans-serif;
  }
  
  .hover-text {
    position: absolute;
    top: 100%;
    left: 0;
  }
  
  .slide-up {
    transform: translateY(-100%);
  }
  
  .button-icon {
    width: 19px;
    height: 11px;
    transition: filter 0.3s ease;
  }
  
  .primary-button:hover {
    background-color: #fff;
    color: #000;
  }
  
  .primary-button:hover .button-icon {
    filter: invert(1);
  }
  
  @media (max-width: 991px) {
    .primary-button {
      width: 100%;
      justify-content: center;
    }
  }
  </style>