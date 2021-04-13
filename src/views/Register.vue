<template>
  <div>
    <h2>Registro de Usuario</h2>
    <hr />
    <div class="columns is-centered">
      <div class="column is-half">
        <div>
          <div v-if="error != ''" class="notification is-danger">
            <p>{{ error }}</p>
          </div>
          <hr />
        </div>
        <p>Nome:</p>
        <input
          class="input"
          type="text"
          placeholder="Nome do usuario"
          name=""
          id=""
          v-model="name"
        />
        <p>E-mail:</p>
        <input
          class="input"
          type="email"
          placeholder="email@email.com"
          name=""
          id=""
          v-model="email"
        />
        <p>Senha:</p>
        <input
          class="input"
          type="password"
          placeholder="Senha"
          name=""
          id=""
          v-model="password"
        />
        <hr />
        <button @click="register" class="button is-success">Cadastrar</button>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  data() {
    return {
      name: "",
      password: "",
      email: "",
      error: "",
      url:"http://ec5ed7937309.ngrok.io "
    };
  },
  methods: {
    register: function () {
      axios
        .post(this.url+"/user", {
          name: this.name,
          password: this.password,
          email: this.email,
        })
        .then((res) => {
          console.log(res);
          //redirecionar usuario para home
          this.$router.push({ name: "Login" });
        })
        .catch((err) => {
          this.error = err.response.data.error;
          //err.response.data.error
        });
    },
  },
};
</script>

<style scoped>
</style>