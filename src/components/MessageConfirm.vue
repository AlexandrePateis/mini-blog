<template>
  <div class="alert alert-success message-conainer">
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  name: "MessageConfirm",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.message-conainer {
  width: 25%;
  margin: 0 auto;
  margin-bottom: 1em;
  margin-top: 1em;
}
.message-conainer p{
text-align: center;
margin-bottom: 3px;
}
</style>
