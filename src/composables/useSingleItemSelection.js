import { ref } from 'vue'

export function useSingleItemSelection() {
  const selectedItem = ref(null)

  const selectItem = (item) => {
    if (selectedItem.value?.id === item.id) {
      selectedItem.value = null
    } else {
      selectedItem.value = item
    }
  }

  const isSelected = (id) => {
    return selectedItem.value?.id === id
  }

  const clearSelection = () => {
    selectedItem.value = null
  }

  return {
    selectedItem,
    selectItem,
    isSelected,
    clearSelection
  }
}
