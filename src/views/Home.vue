<template>
  <div class="home">
    gcf-button-threeway
    <gcf-button-threeway v-model="test"></gcf-button-threeway>
    gcf-button-twoway
    <gcf-button-twoway v-model="test2"></gcf-button-twoway>
    gcf-button-nway
    <gcf-button-nway v-model="test3" :options="['0k', '1k', '2k', '3k', '4k', '5k', '6k+']"></gcf-button-nway>
    gcf-select
    <gcf-select v-model="selectTest" :options="selectOptions2"></gcf-select>
  </div>
</template>

<script>
import GcfButtonThreeway from "@/components/global/GcfButtonThreeway.vue";
import GcfButtonTwoway from "@/components/global/GcfButtonTwoway.vue";
import GcfButtonNway from "@/components/global/GcfButtonNway.vue";
import GcfSelect from "@/components/global/GcfSelect.vue";

export default {
  data: () => ({
    test: "on",
    test2: "off",
    test3: "0k",
    selectTest: "Zarya",
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
    GcfButtonNway,
    GcfSelect
  }
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 500px;
  margin: auto;
}
</style>