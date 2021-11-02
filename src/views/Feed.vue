<template>
  <main>
    <filter-menu></filter-menu>
  </main>
</template>

<script>
import FilterMenu from "@/components/feed/FilterMenu.vue";
export default {
  components: {
    FilterMenu
  }

}
</script>

<style scoped>
  main {
    display: flex;
    height: 100vh;
  }
</style>