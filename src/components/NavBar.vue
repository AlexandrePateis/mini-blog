<template>
  <div class="div">
    <nav class="navbar navbar-expand-lg bg-dark">
      <div class="container-fluid">
        <router-link to="/" class="nav-link active">Home</router-link>
        <router-link to="/user" class="nav-link active">Users</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/post" class="nav-link active"
                >Posts</router-link
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="nameuse">{{$store.state.user.name}}</div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  components: {},
    computed: {
  },
  methods: {
      
    },
  
};
</script>
<style>
* {
  font-family: sans-serif;
  text-decoration: none;
}
.nav-link {
  font-size: 1.5em;
  padding: 0.4em;
  color: white !important;
}
.nameuse p {
  color: white !important;
  text-align: right !important;
  padding: 0;
  margin-right: 0 !important;
}
.nameuse {
  width: 20em;
  float: right;
  margin-right: 13em !important;
  color: white !important;
}

.use-name {
  color: white !important;
}
</style>
