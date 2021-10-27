<template>
  <router-view />
</template>

<style>
:root{
  --background-color: #222;
  --foreground-color: #eee;
  --green: #42b983;
  --red: #b94242;
  --gray: #666;
  --darkgray: #111;
  --lightgray: #bbb;
}

body {
  background-color: var(--background-color);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
