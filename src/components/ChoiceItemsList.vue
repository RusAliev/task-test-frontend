<template>
  <div class="block bottom-right">
    <h3>Вещи на выбор</h3>
    <div class="items-list">
      <ItemBox 
        v-for="item in items" 
        :key="item.id"
        :item="item"
        :selected="isSelected(item.id)"
        @click="$emit('item-click', item)"
      />
    </div>
  </div>
</template>

<script setup>
import ItemBox from './ItemBox.vue'

const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => []
  },
  selectedId: {
    type: Number,
    default: null
  }
})

defineEmits(['item-click'])

const isSelected = (id) => {
  return props.selectedId === id
}
</script>

<style scoped>
@import '../styles/components.css';

.bottom-right {
  overflow-y: auto;
  min-height: 300px;
}

.items-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
