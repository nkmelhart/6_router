<template>
<!-- <div class="container mt-3 b-round shadow">
  <Navbar />
    <Main>
      <router-view />
    </Main>
</div> -->

<Navbar />
    <Main>
      <router-view />
    </Main>
  
</template>

<script setup>

import Navbar from './components/Navbar.vue'
import Main from './components/Main.vue'

</script>

<style scoped>

.b-round {
  background-image: url('./assets/3357954.jpg');
  height: 95vh;
  overflow: hidden;
}

</style>