<template>
  <div>
    <h1>Painel Adm</h1>

    <table class="table">
      <thead>
        <tr>
          <th><abbr title="Nome">Nome</abbr></th>
          <th><abbr title="Email">E-mail</abbr></th>
          <th><abbr title="Cargo">Cargo</abbr></th>
          <th><abbr title="Cargo">Ações</abbr></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.role | processRole }}</td>
          <td>
            <router-link :to="{name:'Edit',params:{id:user.id}}"><button class="button is-small">Editar</button></router-link>
            |<button
              class="button is-small"
              @click="openModal(user.idusers)"
            >
              Deletar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <!---------inicio modal ------->
    <div :class="{ modal: true, 'is-active': showModal }">
      <div class="modal-background"></div>
      <div class="modal-content">
        <!-- inicio card -->
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              Tem certeza que deseja remover este usuário?
            </p>
          </header>
          <div class="card-content">
            <div class="content">
              <!-----texto aqui ---->
            </div>
          </div>
          <footer class="card-footer">
            <a @click="hideModal()" class="card-footer-item">Cancelar</a>
            <a @click="deleteUser()" class="card-footer-item">Deletar</a>
          </footer>
        </div>
        <!---- fim do card---->
      </div>
      <button
        class="modal-close is-large"
        aria-label="close"
        @click="hideModal()"
      ></button>
    </div>
    <!------fim modal ------->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      users: [],
      showModal: false,
      deleteUserId: -1,
      header: null,
      url:"http://ec5ed7937309.ngrok.io"
    };
  },
  created() {
    var header = {
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    };

    axios
      .get(this.url+"/user", header)
      .then((response) => {
        console.log(response);
        this.users = response.data.users;
        this.header = header;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    hideModal() {
      this.showModal = false;
    },
    openModal(id) {
      console.log("id do user: " + id);
      this.showModal = true;
      this.deleteUserId = id;
    },
    deleteUser() {
      axios
        .delete(
          this.url+"/user/" + this.deleteUserId,
          this.header
        )
        .then((response) => {
          console.log(response);
          this.showModal = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  filters: {
    processRole: function (value) {
      if (value == 0) {
        return "Usuário comum";
      } else if (value == 1) {
        return "Admin";
      }
    },
  },
};
</script>
<style scoped>
</style>