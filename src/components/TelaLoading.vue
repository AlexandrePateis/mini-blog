<template>
  <div class="d-flex align-items-center" v-if="isLoading">
    <strong>Loading...</strong>
    <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
  </div>
</template>
<style>
.d-flex {
    width: 10%;
    margin: 0 auto;
    margin-top: 20em;
}
</style>
<script>
export default {
   name:"TelaLoading",
   props:{
    isLoading: Boolean
   },
}
</script>

