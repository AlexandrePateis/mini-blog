<template>
  <div>
    <h1>Home Page</h1>
    <div class="text-bg-info p-3">
    <p class="card-text">Welcome to the Blog, to make posts and comments,<router-link to="/user"> please login.</router-link></p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
    
},
data(){
  return{
    
  }
}
}
</script>

<style>
.text-bg-info{
  width: 28%;
  background: rgb(190, 237, 255) !important;
}
</style>
