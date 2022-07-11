<template>
    <MessageConfirm :msg="msg" v-show="msg" />
  <div class="p">
    <h1 class="title">Make your post</h1>
    <div class="input-group input-group-sm mb-3">
      <span class="input-group-text" id="inputGroup-sizing-sm">Title</span>
      <input
        v-model="formDates.title"
        type="text"
        class="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-sm"
      />
    </div>
    <div class="input-group">
      <textarea
      v-model="formDates.body"
        rows="7"
        cols="100"
        maxlength="500"
        class="ta"
        placeholder="Type you post..."
      ></textarea>
    </div>
    <button class="btn btn-primary" @click="SendPost()">Send Post</button>
  </div>
</template>

<script>
import MessageConfirm from "../components/MessageConfirm.vue";
import axios from "axios";
export default {
  name: "MakeAPost",
  data() {
    return {
      formDates: {
        user_id: this.$store.state.user.id,
        title: null,
        body: null,
      },
      token:"7603a2f8be290afa40b65eb5fcfbd96d1bb20ca16e180e766c5278e86dbb23f3",
      msg:null
    };
  },
  methods:{
    SendPost(){
        axios
        .post("https://gorest.co.in/public/v2/posts", this.formDates, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
        .then((response) => {
          console.log(response.status);
          this.status = response.status;
          if (this.status == 201) {
            this.msg = `Post feito com sucesso.`;
            setTimeout(() => (this.msg = null), 2000);
          }
          setTimeout(() => (
          this.formDates.title=null, this.formDates.body=null), 2000)
        });
    }
  },
  components:{
    MessageConfirm
  }
};
</script>

<style>
.input-group-sm {
  width: 50%;
  margin: 0 auto;
  margin-top: 3.5em;
}
.ta {
  width: 50%;
  margin: 0 auto;
}
.p{
    display: flex;
    flex-direction: column;
    align-items:center;
}
.btn-primary{
    margin-top: 2em;
}
</style>
