<template>
  <div class="home">
    <gcf-button-threeway v-model="test"></gcf-button-threeway>
    <gcf-button-twoway v-model="test2"></gcf-button-twoway>
    <gcf-select :options="selectOptions2"></gcf-select>
  </div>
</template>

<script>
import GcfButtonThreeway from "@/components/global/GcfButtonThreeway.vue";
import GcfButtonTwoway from "@/components/global/GcfButtonTwoway.vue";
import GcfSelect from "@/components/global/GcfSelect.vue";

export default {
  data: () => ({
    test: "on",
    test2: "off",
    selectOptions: ['Sword', 'Shield', 'Fire Staff', 'Spear'],
    selectOptions2: [{
        label: "Tanks",
        options: ['Winston', 'Zarya', 'Doomfist']
      },
      {
        label: "Healers",
        options: ['Soldier76', 'Roadhog', 'Mei']
      }
    ]
  }),

  name: "Home",

  components: {
    GcfButtonThreeway,
    GcfButtonTwoway,
    GcfSelect
  }
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 200px;
  margin: auto;
}
</style>