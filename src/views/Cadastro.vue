<template>
    <div>
        <input type="text" name="email" id="email" placeholder="Email"><br>
        <input type="text" name="nome" id="nome" placeholder="Nome"><br>
        <button>Teste!</button>
        <h2>{{parametroDaRota}}</h2>
    </div>
</template>
<script>


export default ({
    created(){
        console.log("benjamim")
        console.log(this.$route.params.dado)
        this.parametroDaRota = this.$route.params.dado
    },
    data(){
        return{
            parametroDaRota:"Nada"
        }
    }
    
})
</script>
