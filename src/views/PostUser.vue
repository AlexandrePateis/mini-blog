<template>
  <div>
    <UserPosts />
  </div>
</template>
<script>
import UserPosts from '../components/TablePost.vue'
  export default{
    name: "PostUser",
    components:{
      UserPosts
    }
  }
</script>
