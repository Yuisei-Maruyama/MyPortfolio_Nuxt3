<script setup lang="ts">
import Header from './Header.vue';
import Footer from './Footer.vue';
</script>

<template>
  <div>
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<style></style>