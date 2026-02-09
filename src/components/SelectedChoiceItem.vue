<template>
  <div class="block top-right">
    <h3>Выбранная вещь на выбор</h3>
    <div class="selected-item">
      <ItemBox 
        v-if="item"
        :item="item"
        large
      />
      <div v-else class="empty-message">
        SELECTED ITEM
      </div>
    </div>
  </div>
</template>

<script setup>
import ItemBox from './ItemBox.vue'

defineProps({
  item: {
    type: Object,
    default: null
  }
})
</script>

<style scoped>
@import '../styles/components.css';

.top-right {
  min-height: 200px;
}

.selected-item {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
