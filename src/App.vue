<template>
  <div id="app">
    <header>
      <h1>Vue 3 Application</h1>
    </header>
    <main>
      <div class="card">
        <h2>Welcome to Vue 3</h2>
        <p>This is a Vue 3 project created with Vite.</p>
        <button @click="count++">Count is: {{ count }}</button>
      </div>
    </main>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'App',
  setup() {
    const count = ref(0)
    return {
      count
    }
  }
}
</script>

<style scoped>
#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

header {
  margin-bottom: 2rem;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
  color: #42b983;
}

.card {
  padding: 2em;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #42b983;
  color: white;
  cursor: pointer;
  transition: background-color 0.25s;
}

button:hover {
  background-color: #35a372;
}

button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
</style>
