<template>
  <div id="app">
    
    <!--------------------NAVBAR----------------->
    <nav class="navbar is-dark">
      <!-- navbar brand, navbar menu... -->
      <div class="navbar-brand">
        <a class="navbar-item" href="#">
          <img
            src="./assets/microphone.png"
            alt="Bulma: a modern CSS framework based on Flexbox" 
          />
        </a>
        <div
          class="navbar-burger"
          data-target="navbarExampleTransparentExample"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="#"> Home </a>
          <div class="navbar-item has-dropdown is-hoverable">
            <a
              class="navbar-link"
              href="#"
            >
              Docs
            </a>
            <div class="navbar-dropdown is-boxed">
              <a
                class="navbar-item"
                href="#"
              >
                Sobre...
              </a>
              <a
                class="navbar-item"
                href="#"
              >
                Membros
              </a>
              <a
                class="navbar-item"
                href="#"
              >
                Artigos
              </a>
              <a
                class="navbar-item"
                href="#"
              >
                Playlists
              </a>
              <a
                class="navbar-item"
                href="#"
              >
                Repositorios
              </a>
              <hr class="navbar-divider" />
              <a
                class="navbar-item"
                href="#"
              >
                AEeeê Klimiuk
              </a>
              <a
                class="navbar-item is-active"
                href="#"
              >
                Podcasts
              </a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <a
                  class="bd-tw-button button"
                  data-social-network="Twitter"
                  data-social-action="tweet"
                  data-social-target="https://bulma.io"
                  target="_blank"
                  href="#"
                >
                  <span class="icon">
                    <i class="fab fa-twitter"></i>
                  </span>
                  <span> Twitter </span>
                </a>
              </p>
              <p class="control">
                <a
                  class="button is-primary"
                  href="https://github.com/ChernoBen"
                >
                  <span class="icon">
                    <i class="fas fa-download"></i>
                  </span>
                  <span>Spotfy</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <!----routes---->
    <router-view />

    

    <!-----------------FOOTER---------------------->
    <footer class="hero is-success is-halfheight">
      <div class="content has-text-centered">
        <p>
          <strong>ProjCast</strong> by
          <a href="https://github.com/ChernoBen">Benja</a>. Criado e atualizado por ChernoBen
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. Informações de contato aqui...
          <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
            >CC BY NC SA 4.0</a
          >.
        </p>
      </div>
    </footer>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
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
