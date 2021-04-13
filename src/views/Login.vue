<template>
  <div>
    <h2>Login</h2>
    <hr />
    <div class="columns is-centered">
      <div class="column is-half">
        <div class="notification is-info">
          <div class="field">
            <div>
              <div v-if="error != ''" class="notification is-danger">
                <p>{{ error }}</p>
              </div>
              <hr />
            </div>
            <p class="control has-icons-left has-icons-right">
              <input
                class="input"
                type="email"
                placeholder="Email"
                v-model="email"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control has-icons-left">
              <input
                class="input"
                type="password"
                placeholder="Password"
                v-model="password"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control">
              <button class="button is-success" @click="login">Login</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  data() {
    return {
      password: "",
      email: "",
      error: "",
      url: "http://ec5ed7937309.ngrok.io",
    };
  },
  methods: {
    login: function () {
      axios
        .post(this.url + "/login ", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          //guardando token em localStorage
          localStorage.setItem("token", response.data.token);
          this.$router.push({ name: "Home" });
        })
        .catch((err) => {
          this.error = err.response.data.error;
        });
    },
  },
};
</script>

<style scoped>
</style>