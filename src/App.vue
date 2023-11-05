<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Anuphan:wght@400;500&display=swap");

#app {
  font-family: "Anuphan", sans-serif;
  font-weight: bold;
}
html body {
  font-family: "Anuphan", sans-serif;
  font-weight: bold;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
