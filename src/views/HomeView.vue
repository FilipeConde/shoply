<template>
  <NavBar />
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div> -->
  <ProductCard />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProductCard from '@/components/ProductCard.vue';
import NavBar from '@/components/NavBar.vue'
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    NavBar, ProductCard
  },
});
</script>
