<template>
  <TelaLoading :isLoading="loaded" />
  <div v-if="!loaded">
    <h1 class="title">User Register</h1>
    <div class="ac">
      <router-link to="/cadastro" class="btn btn-primary"
        >Create new user
      </router-link>
      <button :disabled="!$store.state.user.id" class="btn btn-primary" @click="MakePost($store.state.user.id)">
        Make a post
      </button>
    </div>
    <table class="table">
      <thead class="table-light">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Gender</th>
          <th scope="col">Active?</th>
          <th scope="col" class="col-1">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in info" :key="item.id">
          <th scope="row">{{ item.id }}</th>
          <td>{{ item.name }}</td>
          <td>{{ item.email }}</td>
          <td v-if="item.gender == 'male'" class="userGender">Masculino</td>
          <td v-else class="userGender">Feminine</td>
          <td v-if="item.status == 'active'">Active</td>
          <td v-else>Inative</td>
          <td>
            <div class="btn-options">
              <button class="myButton" @click="FazLogin(item)">Log</button>
              <button class="myButton" @click="EditAction(item.id)">
                Edit
              </button>
              <!-- Button trigger modal -->
              <button
                type="button"
                class="myButton colormyButton"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Delete
              </button>

              <!-- Modal -->
              <div
                class="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="staticBackdropLabel">
                        Tem certeza que deseja excluir ?
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      Essa ação não poderá ser desfeita!
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        class="btn btn-danger"
                        @click="DeletUser(item.id)"
                      >
                        Excluir
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import TelaLoading from "../components/TelaLoading.vue";
export default {
  name: "CardUser",
  data() {
    return {
      token: "7603a2f8be290afa40b65eb5fcfbd96d1bb20ca16e180e766c5278e86dbb23f3",
      userName: null,
      userEmail: null,
      userGender: null,
      info: null,
      componentKey: 0,
      userIdName: [],
      loaded: null,
    };
  },

  mounted() {
    this.loaded = true;
    axios
      .get("https://gorest.co.in/public/v2/users", {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      })
      .then((response) => {
        this.info = response.data;
        this.userName = response.data;
        this.loaded = false;
      });
  },
  methods: {
    DeletUser(id) {
      axios
        .delete(`https://gorest.co.in/public/v2/users/${id}`, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
        .then((response) => {
          this.info = response.data;
          window.location.reload();
        });
    },

    forceRerender() {
      this.componentKey += 1;
    },
    EditAction(value) {
      this.$router.push({ name: "edit", params: { id: value } });
    },
    MakePost(value) {
      this.$router.push({ name: "makeapost", params: { id: value } });
    },
    FazLogin(id) {
      //Action
      this.$store.dispatch("saveNameUser", id);
    },
  },

  components: {
    TelaLoading,
  },
};
</script>

<style>
.card {
  display: flex;
  justify-content: left;
  flex-direction: row;
  align-items: center;
  width: 45%;
  padding: 0;
  margin-top: 3em;
  margin-left: 4em;
  height: 9em;
  margin-bottom: 2em;
}
.ac {
  display: flex;
  justify-content: right;
  width: 65%;
  margin: 0 auto;
  padding: 2em;
}
.btn-outline-primary {
  padding: 1em;
}
.username {
  font-size: 1.1em;
}
.userEmailAdress,
.userGender {
  font-size: 15px;
}
p {
  padding: 0;
  margin: 0;
}
.fa-user {
  font-size: 3em;
  margin-left: 1em;
}
.info-user {
  margin-left: 2em !important;
  width: 15em;
}
.btn {
  margin-left: 2em !important;
}
.col-1 {
  text-align: center !important;
}
.btn-options {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.table {
  margin-top: 2em;
  width: 68%;
  margin: 0 auto;
}
.colormyButton {
  background: red !important;
  color: white !important;
  border: none !important;
  padding: 0;
  text-decoration: none !important;
  font-weight: 100 !important;
  text-shadow: none !important;
  box-shadow: none !important;
}
.myButton {
  background: linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
  background-color: #ffffff;
  border-radius: 6px;
  border: 1px solid #dcdcdc;
  display: inline-block;
  cursor: pointer;
  color: black;
  font-family: Arial;
  font-size: 12px;
  padding: 4px 11px;
  text-decoration: none;
  margin-left: 1px;
}
.myButton:hover {
  background: linear-gradient(to bottom, #f6f6f6 5%, #ffffff 100%);
  background-color: #f6f6f6;
}
.myButton:active {
  position: relative;
  top: 1px;
}
</style>
