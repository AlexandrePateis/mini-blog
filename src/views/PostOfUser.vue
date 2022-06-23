<template>
    <h1 class="title">Posts of Users</h1>
    <div class="post-uniq" v-for="item in info" :key="item.id">
      <div class="post-user">
        <NameUser class="teste" :userId="item.user_id" />
        <p class="name-user">{{ item.title }}</p>
        <p>
          {{ item.body }}
        </p>
      </div>
      <CommentsUser :idUser="item.id" />
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
import CommentsUser from "../components/CommentsUser.vue";
import NameUser from "../components/NameUser.vue";
export default{

    name:"PostOfUser",
    data(){
        return {
            token: "7603a2f8be290afa40b65eb5fcfbd96d1bb20ca16e180e766c5278e86dbb23f3",
            info:null,
            comment: null
        }
    },

    components: {
    CommentsUser,
    NameUser,
  },
  mounted(){
    this.loaded = true
    axios
      .get(`https://gorest.co.in/public/v2/posts?id=${this.$route.params.id}`, {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      })
      .then((response) => {
        this.info = response.data;
        this.info = response.data;
        console.log(response)
      })
      
  },
  methods:{
     MakeAComment(id_user_comment, id_post, name_user_comment, email) {
      const comment = {
        id: id_user_comment,
        post_id: id_post,
        name: name_user_comment,
        email: email,
        body: this.comment,
      };
      axios
        .post(
          `https://gorest.co.in/public/v2/posts/${comment.post_id}/comments`,
          comment,
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          }
        )
        .then((response) => {
          console.log(response.status);
          this.status = response.status;
        });
    },
  }
        
}
    
</script>
<style scoped>

</style>