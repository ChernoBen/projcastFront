<template>
  <div class="home">
    <br />
    <!--<img alt="Vue logo" src="../assets/logo.png">-->
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <!---------------BODY--------------------------->
    <div class="tile is-ancestor">
      <div class="tile is-vertical is-8">
        <div class="tile">
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification is-primary">
              <p class="title">Mais escutados</p>
              <p class="subtitle">Top tile</p>
            </article>
            <article class="tile is-child notification is-warning">
              <p class="title">...Novos</p>
              <p class="subtitle">Lançamento</p>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-info">
              <p class="title">Artigos</p>
              <p class="subtitle">lakdsfladksf</p>
              <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/640x480.png" />
              </figure>
            </article>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-danger">
            <p class="title">Play Lists</p>
            <p class="subtitle">Time line de ultimos lançamentos</p>
            <div class="content">
              <!-- Content -->
            </div>
          </article>
        </div>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification is-success">
          <div class="content">
            <p class="title">Play list artigos</p>
            <p class="subtitle">Mais acessados</p>
            <div class="content">
              <!-- Content -->
            </div>
          </div>
        </article>
      </div>
    </div>
    <br>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
