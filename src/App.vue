<template>
  <div id="app">
    <a
      role="button"
      class="navbar-burger"
      aria-label="menu"
      aria-expanded="false"
    >
      <span aria-hidden="true">
        <router-link to="/">Home</router-link>
      </span>
      <span aria-hidden="true">
        <router-link to="/about">About</router-link>
      </span>
      <span aria-hidden="true">
        <router-link :to="{ name: 'benj', params: { dado: 'Francisco' } }">
          Cadastro
        </router-link>
      </span>
      <span aria-hidden="true">
        <router-link to="/ben">Ben</router-link>
      </span>
    </a>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
