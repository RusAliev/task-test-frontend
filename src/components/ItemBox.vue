<template>
  <button
    type="button"
    :class="['item-box', { 'selected': selected, 'large': large }]"
    :aria-selected="selected"
    :aria-label="`Select ${item.name}`"
    @click="$emit('click')"
    @keydown.enter="$emit('click')"
    @keydown.space.prevent="$emit('click')"
  >
    {{ item.name }}
  </button>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true
  },
  selected: {
    type: Boolean,
    default: false
  },
  large: {
    type: Boolean,
    default: false
  }
})

defineEmits(['click'])
</script>

<style scoped>
.item-box {
  padding: 15px 20px;
  border: 2px solid #666;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 14px;
  min-width: 100px;
  text-align: center;
  font-family: inherit;
  outline: none;
  margin: 0;
  appearance: none;
  -webkit-appearance: none;
}

.item-box:focus-visible {
  outline: 2px solid #42b983;
  outline-offset: 2px;
}

.item-box:hover {
  background-color: #e0e0e0;
  border-color: #333;
}

.item-box.selected {
  background-color: #42b983;
  color: white;
  border-color: #35a372;
}

.item-box.large {
  padding: 30px 40px;
  font-size: 18px;
  font-weight: bold;
}

@media (prefers-color-scheme: dark) {
  .item-box {
    background-color: #2a2a2a;
    border-color: #555;
    color: #fff;
  }

  .item-box:hover {
    background-color: #3a3a3a;
  }
}
</style>
