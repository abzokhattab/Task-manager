<template>
  <b-container >
            <h2 class="ui dividing header">Edit Profile</h2>
        <div class="col-xs-12" style="height:50px;"></div>
    <b-form @submit="onSubmit" @reset="onReset">
       <b-form>     
      <b-form-group 
        id="input-group-1"
              class="text-sm-left"
        label="Email address:"
        label-for="input-1" 
        description="We'll never share your email with anyone else."
      >
        <b-form-input 
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>
       </b-form>
      <b-form-group id="input-group-2"               class="text-sm-left"
 label="Your Name:" label-for="input-2" inline>
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>



      <b-form-group id="input-group-3"               class="text-sm-left"
 label-for="input-3">
       <div>
  <b-form @submit.stop.prevent>
    <label for="text-password">Password</label>
    <b-input type="password" id="text-password" aria-describedby="password-help-block"        
     placeholder="Enter Password" v-model="form.password"
></b-input>
    <b-form-text id="password-help-block">
      Your password must be 8-20 characters long, contain letters and numbers, and must not
      contain spaces, special characters, or emoji.
    </b-form-text>
   </b-form>
    </div>
      </b-form-group>


      <b-button type="submit" variant="primary">Register</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </b-container>
  
</template>

<script>
    import axios from 'axios';

  export default {
    
    data() {
      return {
        form: {
          email: '',
          name: '',
          password: '',
        },

      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()

        axios.post( 'https://abzo-user-task-api.herokuapp.com/users',this.form).
        then(()=>{
  console.log('suc')
}).catch((error)=>{
console.log('fail'+error)
})
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.password = 0
     
      }
    }
  }
</script>