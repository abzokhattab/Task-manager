<template>
  <b-container >
    <b-form @submit="onSubmit" @reset="onReset" >
               <h2 class="ui dividing header"> Login </h2>
        <div class="col-xs-12" style="height:50px;"></div>
      <b-form-group id="input-group-2" label="Username:" label-for="input-2" inline
      class="text-sm-left">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Enter Username"
        ></b-form-input>
      </b-form-group>
         

      <b-form-group id="input-group-3"  label-for="input-3" class="text-sm-left">
       <div>
  <b-form @submit.stop.prevent>
    <label for="text-password">Password:</label>
    <b-input type="password" id="text-password" aria-describedby="password-help-block"        
     placeholder="Enter Password" v-model="form.Password"
></b-input>
    <b-form-text id="password-help-block" class="text-sm-left">
      Your password must be 8-20 characters long, contain letters and numbers, and must not
      contain spaces, special characters, or emoji.
    </b-form-text>
   </b-form>
    </div>
      </b-form-group>


      <b-button type="submit" variant="primary">Login</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </b-container>
  
</template>

<script>
import axios from 'axios'
  export default {
 
    
    data() {
      return {
        form: {
            name:'',
            Password:''
        }      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        axios.post( 'https://abzo-user-task-api.herokuapp.com/users/login',this.form).
        then((resp)=>{
                  const token = resp.token
      localStorage.setItem('user-token', token)
  console.log('suc'+ token)
}).catch((error)=>{
console.log('fail'+error)
})
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.name = ''
        this.form.Password = ''
        // Trick to reset/clear native browser form validation state

      }
    }
  }
</script>