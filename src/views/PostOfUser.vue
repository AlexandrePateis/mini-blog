<template>
  <h1 class="title">Posts of Users</h1>
  <div class="post-uniq" v-for="item in info" :key="item.id">
    <div class="post-user">
      <h2 class="teste"><NameUser :userId="item.user_id" /></h2>
      <p class="name-user">{{ item.title }}</p>
      <p>
        {{ item.body }}
      </p>
    </div>
    <div class="coments" v-for="item in comentUser" :key="item.id">
      <p class="nome-comment-name">{{item.name}}</p>
      <p class="comment-make">
        {{item.body}}
      </p>
      
    </div>
    <div class="input-group mb-3">
      <input
        :disabled="!$store.state.user.name"
        v-model="comment"
        type="text"
        class="form-control"
        placeholder="Make a comment"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
      />
      <button
        class="btn btn-primary"
        type="button"
        id="button-addon2"
        @click="
          MakeAComment(
            $store.state.user.id,
            item.id,
            $store.state.user.name,
            $store.state.user.email
          )
        "
      >
        Send comment
      </button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import NameUser from "../components/NameUser.vue";
export default {
  name: "PostOfUser",
  data() {
    return {
      token: "7603a2f8be290afa40b65eb5fcfbd96d1bb20ca16e180e766c5278e86dbb23f3",
      info: null,
      comment: null,
      response: null,
      comentUser: null
    };
  },

  components: {
    NameUser,
  },
  mounted() {
    this.loaded = true;
    //pega post
    axios
      .get(`https://gorest.co.in/public/v2/posts?id=${this.$route.params.id}`, {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      })
      .then((response) => {
        this.info = response.data;
        this.info = response.data;
        console.log(response);
      });

      //pega comentario
      axios
        .get(`https://gorest.co.in/public/v2/posts/${this.$route.params.id}/comments`, {
          headers: {
            Authorization: `Bearer ${this.token}`,
            RetryAfter: 3600
          },
        })
        .then((response) => {
          this.comentUser = response.data;
        });
  },
  methods: {
    MakeAComment(id_user_comment, id_post, name_user_comment, email) {
      const comment = {
        id: id_user_comment,
        post_id: id_post,
        name: name_user_comment,
        email: email,
        body: this.comment,
      };
      axios.post(`https://gorest.co.in/public/v2/posts/${comment.post_id}/comments`,
          comment,
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          }
        )
        .then((response) => {
          //Renderiza em tempo real o comentario
          axios
        .get(`https://gorest.co.in/public/v2/posts/${this.$route.params.id}/comments`, {
          headers: {
            Authorization: `Bearer ${this.token}`,
            RetryAfter: 3600
          },
        })
        .then((response) => {
          this.comentUser = response.data;
          this.comment = '' //limpa o input do comentario
        });
          console.log(response);
        });
    },
  },
};
</script>
<style scoped>
.teste {
  font-size: 1.5em;
  color: red;
  font-weight: bold;
}
</style>
