<template>
  <div class="home">
    <br />
    <!--<img alt="Vue logo" src="../assets/logo.png">-->
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <!---------------BODY--------------------------->
    <div class="tile is-ancestor">
      <div class="tile is-vertical is-8">
        <div class="tile">
          <Novos/>
          <!-------- ARTIGOS ----->
          <Artigos />
        </div>
        <!---- Play list Artigos ----->
        <PlayArtigos/>
      </div>
      <!------PLAY LIST ------>
      <PlayList />
    </div>
    <br />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import PlayList from "../components/home/PlayList.vue";
import Artigos from "../components/home/Artigos.vue";
import PlayArtigos from "../components/home/PlayListArtigos.vue";
import Novos from "../components/home/Novos.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    PlayList,
    Artigos,
    PlayArtigos,
    Novos
  },
};
</script>
