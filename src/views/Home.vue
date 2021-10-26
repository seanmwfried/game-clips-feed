<template>
  <div class="home">
    <button-threeway v-model="test"></button-threeway>
  </div>
</template>

<script>
import ButtonThreeway from "@/components/global/ButtonThreeway.vue";

export default {
  data: () => ({
    test: "on",
  }),

  name: "Home",

  components: {
    ButtonThreeway,
  }
};
</script>