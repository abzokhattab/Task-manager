<template>
  <b-container>
    <b-form @submit="onSubmit" @reset="onReset">
      <h2 class="ui dividing header">Login</h2>
      <div class="col-xs-12" style="height:50px;"></div>
      <b-form-group
        id="input-group-2"
        label="Email:"
        label-for="input-2"
        inline
        class="text-sm-left"
      >
        <b-form-input
          id="input-2"
          v-model="form.email"
          required
          placeholder="Enter Email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label-for="input-3" class="text-sm-left">
        <div>
          <b-form @submit.stop.prevent>
            <label for="text-password">Password:</label>
            <b-input
              type="password"
              id="text-password"
              aria-describedby="password-help-block"
              placeholder="Enter Password"
              v-model="form.password"
            ></b-input>
            <b-form-text id="password-help-block" class="text-sm-left">
              Your password must be 8-20 characters long, contain letters and
              numbers, and must not contain spaces, special characters, or
              emoji.
            </b-form-text>
          </b-form>
        </div>
      </b-form-group>

      <b-button type="submit" variant="primary">Login</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
      <b-button type="submit" variant="secondary" @click="register"
        >Register</b-button
      >
    </b-form>
    <div class="text-left">
            <p class="invalid-feedback d-block" >{{error}}</p>
    </div>

  </b-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      error:'',
      form: {
        email: "",
        password: ""
      }
    };
  },
  beforeCreate() {
    const token = localStorage.getItem("user-token");
    if (token != null) {
      this.$router.push("/profile");
    }
  },
  methods: {
    register() {
      this.$router.push("/signup");
    },

    onSubmit(evt) {
      evt.preventDefault();
      axios
        .post("https://abzo-user-task-api.herokuapp.com/users/login", this.form)
        .then(res => {
          this.error=''
          const token = res.data.token;
          localStorage.setItem("user-token", token);
          this.$router.push("/profile");
        })
       .catch(()=>{
        this.error='Invalid Inputs'
      });
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.error="";
      this.form.password = "";
      // Trick to reset/clear native browser form validation state
    }
  }
};
</script>
