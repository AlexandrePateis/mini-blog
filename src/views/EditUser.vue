<template>
  <MessageConfirm :msg="msg" v-show="msg" />
  <TelaLoading :isLoading="!loaded" />
  <div class="" v-if="loaded">
    <h1 class="title">Edit user</h1>
    <div class="edit">
      <form class="row g-3 needs-validation" novalidate>
        <div class="col-md-9">
          <label for="validationCustom01" class="form-label">Name</label>
          <input
            placeholder="Enter you name"
            autocomplete="off"
            type="text"
            class="form-control"
            id="validationCustom01"
            required
            v-model="formDates.name"
          />
          <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="col-md-4">
          <label for="validationCustom01" class="form-label">Email</label>
          <input
            placeholder="Enter you name"
            autocomplete="off"
            type="email"
            class="form-control"
            id="validationCustom01"
            required
            v-model="formDates.email"
          />
          <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="col-md-5">
          <label for="validationCustom04" class="form-label">Gender</label>
          <select class="form-select" v-model="formDates.gender">
            <option value="male">Masculine</option>
            <option value="female">Feminine</option>
          </select>
        </div>
        <div class="col-12 col-md-9"></div>
        <div class="col-12 col-md-9">
          <button
            class="btn btn-primary"
            type="submit"
            @click="UpdateUser(idForEdit)"
          >
            Edit User
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import TelaLoading from "../components/TelaLoading.vue";
import MessageConfirm from "../components/MessageConfirm.vue";
import axios from "axios";
export default {
  name: "EditUser",
  props: {
    idForEdit: String,
  },
  data() {
    return {
      formDates: {
        name: null,
        email: null,
        gender: null,
        status: "active",
      },
      token: "7603a2f8be290afa40b65eb5fcfbd96d1bb20ca16e180e766c5278e86dbb23f3",
      loaded: false,
      show_msg: true,
      msg: null,
      status: null,
    };
  },
  mounted() {
    axios
      .get(`https://gorest.co.in/public/v2/users?id=${this.$route.params.id}`, {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      })
      .then((response) => {
        this.formDates = response.data[0];
      });
    let self = this;
    setTimeout(function () {
      self.loaded = true;
    }, 1000);
    self.loaded = false;
  },
  methods: {
    UpdateUser() {
      axios
        .put(
          `https://gorest.co.in/public/v2/users/${this.$route.params.id}`,

          this.formDates,
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
              Accept: "application/json",
              XPOST: "https://gorest.co.in/pblic/v2/graphql",
            },
          }
        )
        .then((response) => {
          console.log(response.status);
          this.status = response.status;
          if (this.status == 200) {
            this.msg = `Cadastro atualizado com sucesso.`;
            setTimeout(() => (this.msg = null), 2000);
          }
        });
    },
  },
  components: {
    TelaLoading,
    MessageConfirm,
  },
};
</script>
<style>
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
