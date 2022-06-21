<template>
  <div class="coments" v-for="item in info" :key="item.id">
      <p class="nome-comment-name">{{item.name}}</p>
      <p class="comment-make">
        {{item.body}}
      </p>
      
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name:'CommentsUser',
    data(){
        return{
            info:null,
            token: "7603a2f8be290afa40b65eb5fcfbd96d1bb20ca16e180e766c5278e86dbb23f3"
        }
    },
    props:{
      idUser: String
    },
    mounted () {
      axios
        .get(`https://gorest.co.in/public/v2/posts/${this.idUser}/comments`, {
          headers: {
            Authorization: `Bearer ${this.token}`,
            RetryAfter: 3600
          },
        })
        .then((response) => {
          this.info = response.data;
        });
}
}
</script>

<style>
.coments {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.coments {
  margin-top: 1em;
}
.mb-3 {
  margin-top: 1em;
}
.comment-make {
  font-size: 0.85em;
}
.nome-comment-name {
  font-weight: bold;
  font-size: 0.9em;
}
</style>
