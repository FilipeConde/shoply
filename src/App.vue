<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from './components/NavBar.vue'
import ProductCard from './components/ProductCard.vue'

export default defineComponent({
  components: {
    NavBar, ProductCard
  }
})
</script>

<template>
  <NavBar />
  <ProductCard />
</template>

<style scoped>
body {
  background: #beb090;
}
</style>
