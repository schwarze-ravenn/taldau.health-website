<template>
  <div class="tags">
    <button
      v-for="(tag, index) in tags"
      :key="index"
      :class="['tag', { active: tag.active }]"
      @click="toggleTag(index)"
    >
      <span class="tag-text">{{ tag.text }}</span>
      <img
        :src="tag.active ? require('@/images/x-icon.png') : require('@/images/plus-icon.png')"
        :alt="tag.active ? 'Remove tag' : 'Add tag'"
        class="tag-icon"
      />
    </button>
  </div>
</template>

<script>
export default {
  name: 'TagList',
  props: {
    tags: {
      type: Array,
      required: true,
    },
  },
  methods: {
    toggleTag(index) {
      this.$emit('toggle-tag', index);
    },
  },
};
</script>

<style scoped>
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  margin-top: 36px;
}

.tag {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 18px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid #000;
  overflow: hidden;
  position: relative;
}

.tag-text {
  font: 500 24px Raleway, sans-serif;
  transition: color 0.1s ease;
}

.tag.active {
  background-color: #000;
  color: #fff;
}

.tag:not(.active) {
  background-color: #fff;
  color: #000;
}

.tag-icon {
  width: 18px;
  height: 18px;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.tag.active .tag-icon {
  transform: rotate(180deg);
}

@media (max-width: 991px) {
  .tags {
    margin-top: 30px;
  }

  .tag {
    font-size: 20px;
    padding: 8px 14px;
  }
}
</style>