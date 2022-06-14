<script setup lang="ts">
import { ref } from "vue"

const count = ref(0)

const increment = () => {
  count.value++;
};

const decrement = () => {
  count.value--;
};

</script>

<template>
  <h1>{{ count }}</h1>
  <h1 class="aaa">GlobalのSassが効いているかのテスト!!!!!!!!!</h1>
  <button @click="increment">Increment</button>
  <button @click="decrement">Decrement</button>
</template>

<style lang="scss" scoped>
 .aaa {
   color: $cyber;
 }
</style>