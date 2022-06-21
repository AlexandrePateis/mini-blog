<template>
  <TelaLoading :isLoading="loaded" />
  <div class="" v-if="!loaded">
    <h1 class="title">Posts of Users</h1>
    <div class="post-uniq" v-for="item in info" :key="item.id">
      <div class="post-user">
        <NameUser :userId="item.user_id" />
        <p class="name-user">{{ item.title }}</p>
        <p>
          {{ item.body }}
        </p>
      </div>
      <CommentsUser :idUser="item.id" />
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Make a comment"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button class="btn btn-primary" type="button" id="button-addon2">
          Send comment
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CommentsUser from "../components/CommentsUser.vue";
import NameUser from "../components/NameUser.vue";
import TelaLoading from "../components/TelaLoading.vue";

export default {
  name: "UserPosts",
  data() {
    return {
      info: null,
      comment: null,
      loaded: null,
    };
  },
  components: {
    CommentsUser,
    NameUser,
    TelaLoading,
  },
  mounted() {
    this.loaded = true
    axios
      .get(`https://gorest.co.in/public/v2/posts/`, {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      })
      .then((response) => {
        this.info = response.data;
        this.loaded = false
      })
      .catch(function(error){
        console.log(error)
      })  
  },
};
</script>

<style>
.post-user,
.coments {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.coments {
  margin-top: 1em;
}
.btn {
  font-size: 1em;
  width: 10em;
}
.post-uniq {
  margin: 0 auto;
  width: 50%;
  border: solid 1px #ccc;
  padding: 1em;
  margin-top: 3em;
  margin-bottom: 3em;
}
.name-user {
  font-weight: bold;
  font-size: 1.2em;
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
.title {
  text-align: center;
  font-size: 1.7em;
  margin-top: 1em;
}
</style>
