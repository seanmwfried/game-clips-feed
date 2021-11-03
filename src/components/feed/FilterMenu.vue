<template>
  <nav>
    <section>
      <div class="hamburger-button">
        <font-awesome-icon icon="bars"></font-awesome-icon>
      </div>
      <div class="input-container hero-select">
        <label>Hero</label>
        <gcf-select v-model="selectedHero" :options="heroOptions"></gcf-select>
      </div>
      <div class="input-container kill-count">
        <label>Kill Count</label>
        <gcf-button-nway v-model="killCount" :options="killCountOptions"></gcf-button-nway>
      </div>
      <div class="input-container used-ult">
        <label>Uses Ult</label>
        <gcf-button-threeway v-model="usesUlt"></gcf-button-threeway>
      </div>
    </section>
  </nav>
</template>

<script>
export default {
  data: () => ({
    killCount: '3k',
    killCountOptions: ['0k', '1k', '2k', '3k', '4k', '5k', '6k'],
    usesUlt: 'any',
    selectedHero: 'Tracer',
    heroOptions: [{
        label: "Tanks",
        options: ['D.Va','Orisa','Reinhardt','Roadhog','Sigma','Winston','Wrecking Ball','Zarya']
      },
      {
        label: "Damage",
        options: ['Ashe','Bastion','Cassidy','Doomfist','Echo','Genji','Hanzo','Junkrat','Mei','Pharah','Reaper','Soldier: 76','Sombra','Symmetra','Torbjörn','Tracer','Widowmaker']
      },
      {
        label: "Healers",
        options: ['Ana','Baptiste','Brigitte','Lúcio','Mercy','Moira','Zenyatta']
      }
    ]
  }),
}
</script>

<style scoped>
  nav {
    background-color: var(--darkgray);
    box-shadow: 0px 10px 10px black;
    padding: 10px;
  }
  .hero-select {
    display: flex;
    flex-direction: column;
  }

  .input-container {
    margin: 15px 5px;
  }
</style>