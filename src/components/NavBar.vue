<template>
  <section>
    <div class="container">
      <a href="#" class="previous-btn">
        <img src="../assets/angle-left.svg" alt="" class="previous-btn
        ">
      </a>
      <img src="../assets/online-shopping.png" alt="" class="logo" />
      <a href="shopping-cart" class="shopping-cart">
        <img src="../assets/shopping-cart.svg" alt="" class="shopping-cart__img">
      </a>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style scoped>
.logo {
  width: 50px;
  height: 50px;
  padding: 0.5rem;
}

.shopping-cart__img {
  height: 30px;
  /* align-items: center; */
}

.previous-btn {
  height: 20px;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
}

section {
  background-color: rgb(91, 148, 103);
  box-shadow: 0px 2px 10px;
}
</style>
