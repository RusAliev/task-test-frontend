<template>
  <div class="block top-left">
    <h3>Выбранные вещи пользователя</h3>
    <div class="selected-items">
      <ItemBox 
        v-for="item in items" 
        :key="item.id"
        :item="item"
      />
      <div v-if="items.length === 0" class="empty-message">
        Нет выбранных вещей
      </div>
    </div>
    <div class="counter" role="status" aria-live="polite">
      selected: {{ items.length }} / {{ MAX_SELECTED_USER_ITEMS }}
    </div>
  </div>
</template>

<script setup>
import ItemBox from './ItemBox.vue'
import { MAX_SELECTED_USER_ITEMS } from '../constants/config.js'

defineProps({
  items: {
    type: Array,
    required: true,
    default: () => []
  }
})
</script>

<style scoped>
@import '../styles/components.css';

.top-left {
  min-height: 200px;
}

.selected-items {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  flex: 1;
  margin-bottom: 10px;
}

.counter {
  margin-top: 10px;
  font-size: 14px;
  color: #666;
  text-align: center;
}

@media (prefers-color-scheme: dark) {
  .counter {
    color: #aaa;
  }
}
</style>
