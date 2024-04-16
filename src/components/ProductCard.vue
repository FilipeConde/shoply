<template>
  <div class="container" v-for="product in products" :key="product.name">
    <div class="container__product-data">
      <img src="" alt="" class="product-img product">
      <div class="product-data product">
        <h1 class="product-name">{{ product.name}}</h1>
        <p class="product-description">{{ product.description }}</p>
        <p class="product-price">R${{ product.price}}</p>
      </div>
    </div>
    <div class="container__add-btn"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import productsJson from '@/fixtures/productList.json'
import IProduct from '@/interfaces/IProduct'

export default defineComponent({
  data() {
    return {
      products: [] as IProduct[]
    }
  },
  created() {
    this.products = productsJson
  }
})
</script>

<style scoped></style>