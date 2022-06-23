<template>
  <NavBar />
  <router-view />
</template>

<script>
import { mapActions } from 'vuex'
import NavBar from '../src/components/NavBar.vue'
export default {
  components:{
    NavBar
  },
   created(){
    this.getUser()
  },
  methods:{
    ...mapActions(['saveNameUser']),
    getUser(){
      const userLoged = JSON.parse(localStorage.getItem('state_user'));
      if (userLoged) this.saveNameUser(userLoged);
    }
  },
 
  
}
</script>

