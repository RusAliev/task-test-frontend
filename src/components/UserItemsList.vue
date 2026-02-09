<template>
  <div class="block bottom-left">
    <h3>Вещи у пользователя</h3>
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
import { computed } from 'vue'
import ItemBox from './ItemBox.vue'

const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => []
  },
  selectedIds: {
    type: Array,
    default: () => []
  }
})

defineEmits(['item-click'])

const selectedIdsSet = computed(() => new Set(props.selectedIds))

const isSelected = (id) => {
  return selectedIdsSet.value.has(id)
}
</script>

<style scoped>
@import '../styles/components.css';

.bottom-left {
  overflow-y: auto;
  min-height: 300px;
}

.items-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
