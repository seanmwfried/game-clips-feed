<template>
  <router-view />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

:root{
  /* Color */
  --background-color: #222;
  --foreground-color: #eee;
  --green: #42b983;
  --red: #b94242;
  --gray: #666;
  --darkgray: #151515;
  --lightgray: #bbb;
  
  /* Measurements */
  --roundness: 10px;
}

html, body {
  overflow: hidden;
  margin: 0;
}

body {
  background-color: var(--background-color);
}

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--foreground-color);
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: var(--green);
}
</style>
