<template>
  <TelaLoading :isLoading="loaded" />
  <div class="" v-if="!loaded">
    <h1 class="title">Posts of Users</h1>
    <div class="post-uniq">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name user</th>
            <th scope="col">Title Post</th>
            <th scope="col">View</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in info" :key="item.id">
            <th scope="row">{{ item.id }}</th>
            <td class="teste"><NameUser :userId="item.user_id" /></td>
            <td class="title-post">{{ item.title }}</td>
            <td><i @click="ShowPost(item.id)" class="fa-solid fa-eye"></i></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import NameUser from "./NameUser.vue";
import TelaLoading from "./TelaLoading.vue";

export default {
  name: "UserPosts",
  data() {
    return {
      info: null,
      comment: null,
      loaded: null,
      token: "7603a2f8be290afa40b65eb5fcfbd96d1bb20ca16e180e766c5278e86dbb23f3",
    };
  },
  components: {
    NameUser,
    TelaLoading,
  },
  mounted() {
    this.loaded = true;
    axios
      .get(`https://gorest.co.in/public/v2/posts/`, {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      })
      .then((response) => {
        this.info = response.data;
        this.loaded = false;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  methods: {
    MakeAComment(userSotreId, id_post, name, email) {
      const comment = {
        id: userSotreId,
        post_id: id_post,
        name: name,
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
    ShowPost(value) {
      this.$router.push({ name: "postuser", params: { id: value } });
    },
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
.title-post {
  font-style: italic;
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
