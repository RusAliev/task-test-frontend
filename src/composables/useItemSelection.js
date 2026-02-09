import { ref, computed } from 'vue'
import { MAX_SELECTED_USER_ITEMS } from '../constants/config.js'

export function useItemSelection(maxItems = MAX_SELECTED_USER_ITEMS) {
  const selectedItems = ref([])

  const selectedIdsSet = computed(() => new Set(selectedItems.value.map(item => item.id)))

  const selectedItemIds = computed(() => {
    return selectedItems.value.map(item => item.id)
  })

  const toggleItem = (item) => {
    const index = selectedItems.value.findIndex(i => i.id === item.id)
    
    if (index !== -1) {
      selectedItems.value.splice(index, 1)
    } else {
      if (selectedItems.value.length < maxItems) {
        selectedItems.value.push(item)
      }
    }
  }

  const isSelected = (id) => {
    return selectedIdsSet.value.has(id)
  }

  const clearSelection = () => {
    selectedItems.value = []
  }

  return {
    selectedItems,
    selectedItemIds,
    selectedIdsSet,
    toggleItem,
    isSelected,
    clearSelection
  }
}
