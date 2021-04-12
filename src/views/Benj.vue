<template>
    <div>
        <input type="text" name="email" id="email" placeholder="Email"><br>
        <input type="text" name="nome" id="nome" placeholder="Nome"><br>
        <button>Teste!</button>
        <h2>{{parametroDaRota}}</h2>
        <router-view/>
    </div>
</template>
<script>


export default ({
    created(){
        
    },
    data(){
        return{
            parametroDaRota:"Nada"
        }
    }
    
})
</script>
