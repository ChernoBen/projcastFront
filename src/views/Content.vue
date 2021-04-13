<template>
  <!-------------------->
  <div>
    <section class="hero is-medium is-link">
      <div class="hero-body is-max-desktop">
        <img src="https://bulma.io/images/placeholders/48x48.png" />

        <p class="title">Medium hero</p>
        <p class="subtitle">Medium subtitle</p>
      </div>
    </section>

    <div class="container is-max-desktop" id="conteudo">
      <div class="notification" id="subConteiner">
        <div class="content is-normal" id="artigo">
          <div class="tags has-addons">
            <span class="tag">Author</span>
            <span class="tag is-primary">ChernoBen</span>
            <br />

            <div class="tags has-addons"></div>
          </div>

          <h1>Hello World</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus,
            nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat
            odio, sollicitudin vel erat vel, interdum mattis neque.
          </p>
        </div>
        <div class="columns is-mobile is-centered">
          <div class="column is-half">
            <p class="bd-notification is-primary">
              <a href="http://localhost:8080">
                <img
                  src="https://img.icons8.com/fluent/96/000000/spotify.png"
                />
              </a>
              <a href="#">
                <img
                  src="https://img.icons8.com/color/96/000000/twitter-circled--v4.png"
                />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//const axios = require("axios");

export default {
  data() {
    return {
      name: "",
      email: "",
      error: "",
      url: "http://ec5ed7937309.ngrok.io",
    };
  },
  created() {
    // axios.get({id:this.$router.params.id},this.url+"/conteudo/").then(res=>{
    //   console.log(res)
    // }).catch(error=>{
    //   console.log(error)
    // })
  },
  methods: {},
};
</script>

<style scoped>
#artigo {
  background-color: white;
}
#subConteiner {
  background-color: white;
}
#contuedo {
  background-color: white;
}
</style>