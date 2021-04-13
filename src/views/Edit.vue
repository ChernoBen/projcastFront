<template>
  <div>
    <h2>Edição de usuario</h2>
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
        <hr />
        <button @click="update" class="button is-success">Salvar</button>
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
      email: "",
      error: "",
      url:"http://ec5ed7937309.ngrok.io",
      id_usuario:-1,
      header:{
      headers:{
        Authorization:'Bearer '+ localStorage.getItem('token')
      }
    }
    };
  },
  created(){
   
    axios.get(this.url+"/user/"+this.$router.params.id,this.header).then(res=>{
      console.log(res)
      this.id_usuario=res.data.id
      this.email = res.data.email
      this.name = res.data.name

    }).catch(error=>{

      console.log(error)
      this.$router.push({name:"Users"})
    })

  },
  methods: {
    update: function () {
      axios
        .put(this.url+"/user", {
          name: this.name,
          email: this.email,
          id:this.id_usuario
        },this.header)
        .then((res) => {
          console.log(res);
          //redirecionar usuario para login
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