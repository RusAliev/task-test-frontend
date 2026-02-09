<template>
  <div id="app">
    <div class="container">
      <div class="top-section">
        <SelectedUserItems :items="selectedUserItems" />
        <SelectedChoiceItem :item="selectedChoiceItem" />
      </div>

      <div class="bottom-section">
        <UserItemsList 
          :items="userItems"
          :selected-ids="selectedUserItemIds"
          @item-click="toggleUserItem"
        />
        <ChoiceItemsList 
          :items="choiceItems"
          :selected-id="selectedChoiceItem?.id"
          @item-click="selectChoiceItem"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SelectedUserItems from './components/SelectedUserItems.vue'
import SelectedChoiceItem from './components/SelectedChoiceItem.vue'
import UserItemsList from './components/UserItemsList.vue'
import ChoiceItemsList from './components/ChoiceItemsList.vue'
import { USER_ITEMS, CHOICE_ITEMS } from './constants/items.js'
import { useItemSelection } from './composables/useItemSelection.js'
import { useSingleItemSelection } from './composables/useSingleItemSelection.js'

const userItems = ref(USER_ITEMS)

const choiceItems = ref(CHOICE_ITEMS)

const {
  selectedItems: selectedUserItems,
  selectedItemIds: selectedUserItemIds,
  toggleItem: toggleUserItem
} = useItemSelection()

const {
  selectedItem: selectedChoiceItem,
  selectItem: selectChoiceItem
} = useSingleItemSelection()
</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
}

.top-section,
.bottom-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  flex: 1;
}
</style>
