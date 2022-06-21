<template>
  <h1 class="create-acc">Create user</h1>
  <MessageConfirm :msg="msg" v-show="msg" />
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
   
    <div class="col-12 col-md-9">
      <button class="btn btn-primary" type="submit" @click="RegisterUsers()">
        Submit
      </button>
    </div>
  </form>
</template>
<script>
import axios from "axios";
import MessageConfirm from "../components/MessageConfirm.vue";

export default {
  name: "CreateUser",
  data() {
    return {
      token: "7603a2f8be290afa40b65eb5fcfbd96d1bb20ca16e180e766c5278e86dbb23f3",
      formDates: {
        name: null,
        gender: null,
        email: null,
        status: "active",
      },
      info: null,
      registers: null,
      status: null,
      msg: null,
    };
  },
  methods: {
    RegisterUsers() {
      axios
        .post("https://gorest.co.in/public/v2/users", this.formDates, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
        .then((response) => {
          console.log(response.status);
          this.status = response.status;
          if (this.status == 201) {
            this.msg = `Cadastro realizado com sucesso.`;
            setTimeout(() => (this.msg = null), 2000);
          }
          setTimeout(() => (this.formDates.name = null,
          this.formDates.email=null, this.formDates.gender=null), 2000)
        });
    },
  },
  components: {
    MessageConfirm,
  },
};
</script>
<style>
.needs-validation {
  width: 60%;
  margin: 0 auto;
}
.create-acc {
  text-align: center;
  margin-top: 1em;
}
.g-3,
.form-check {
  align-items: center !important;
  justify-content: center !important;
}
.col-12{
  padding: 0 !important;
  border: none !important;
}

</style>
