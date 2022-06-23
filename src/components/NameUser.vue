<template>
  <p class="nameUser" v-for="item in info" :key="item.id">{{item.name}}</p>
</template>

<script>
import axios from 'axios';
export default {
  name: "NameUser",
  data() {
    return {
      info: null,
      token: "7603a2f8be290afa40b65eb5fcfbd96d1bb20ca16e180e766c5278e86dbb23f3",
    };
  },
  props:{
    userId: String
  },
  mounted() {
    axios
      .get(`https://gorest.co.in/public/v2/users?id=${this.userId}`, {
        headers: {
          Authorization: `Bearer ${this.token}`,
          RetryAfter: 3600
        },
      })
      .then((response) => {
        this.info = response.data;
      });
  },
};
</script>

<style>

</style>
