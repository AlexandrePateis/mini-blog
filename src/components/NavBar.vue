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
      <div class="nameuse">
        <a class="space" @click="EditThisUser($store.state.user.id)">
        {{ $store.state.user.name }}
        </a>
        <span>
          <a v-if="$store.state.user.name" href="" @click="Logout()">
            <i class="fa-solid fa-arrow-right-from-bracket"></i>
          </a>
        </span>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  components: {},
  computed: {},
  methods: {
    Logout() {
      localStorage.clear();
    },
     EditThisUser(value) {
      this.$router.push({ name: "edit", params: { id: value } });
    },
  },
};
</script>
<style>
* {
  font-family: sans-serif;
  text-decoration: none;
}
.space{
  text-decoration: none !important;
  color: white !important;
  margin-right: 1em;
  cursor: pointer;
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
