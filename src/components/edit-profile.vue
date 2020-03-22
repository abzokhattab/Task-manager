<template>
  <div class="ui stackable grid container">

    <div class="eight wide column">
      <div class="ui segment">
        <h2 class="ui dividing header">Edit Profile</h2>
        <div class="col-xs-12" style="height:50px;"></div>

        <form class="ui form" @submit.prevent="updateProfile">

  <b-container >
    <b-form @submit="onSubmit" @reset="onReset">
       <b-form>     
      <b-form-group 
      class="text-sm-left"
        id="input-group-1"
        label="  Email address:"
        label-for="input-1" 
        description="We'll never share your email with anyone else."
      >
        <b-form-input 
          id="input-1"
          v-model="email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>
       </b-form>
      <b-form-group       class="text-sm-left"
 id="input-group-2" label="Your Name:" label-for="input-2" inline>
        <b-form-input
          id="input-2"
          v-model="name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>



      <b-form-group id="input-group-3"  label-for="input-3"       class="text-sm-left"
>
       <div>
  <b-form @submit.stop.prevent       class="text-sm-left"
 >
    <label for="text-password">Password</label>
    <b-input type="password" id="text-password" aria-describedby="password-help-block"        
     placeholder="Enter Password" v-model="password"
></b-input>
    <b-form-text id="password-help-block">
      Your password must be 8-20 characters long, contain letters and numbers
    </b-form-text>
   </b-form>
    </div>
      </b-form-group>


    </b-form>
 <b-form-group  label="Profile picture :"       class="text-sm-left"

          label-for="file-default" >
    <b-form-file       v-model="file"
 id="file-default"></b-form-file>
  </b-form-group>

  </b-container>

      <b-button type="submit" variant="primary">Update</b-button>
              </form>
      </div>
    </div>
  </div>
</template>

<script>
//import axios from 'axios'
    export default {
        components: {
       
        },
        data () {
            return {
                name: '',
                email: '',
                password: '',
                age: 0,
                file:null
               
            }
        },
        // beforeRouteEnter (to, from, next) {
        //     const token = localStorage.getItem('user-token')

        //     return token ? next() : next('/login')
        // },
        // created () {
        //     this.fetchAuthenticatedUser()
        // },
        // methods: {
        //     fetchAuthenticatedUser () {
        //         const token = localStorage.getItem('user-token')

        //         axios
        //             .get('account/me', {
        //                 headers: {
        //                     Authorization: `Bearer ${token}`
        //                 }
        //             })
        //             .then(response => {
        //                 this.name = response.user.name
        //                 this.email = response.user.email
        //                 this.age = response.user.age
        //                 this.password = response.user.password
        //             })
        //     },
        //     updateProfile () {
        //         const token = localStorage.getItem('user-token')

        //         axios
        //             .put(
        //                 '/account/update_profile',
        //                 {
        //                     name: this.name,
        //                     username: this.username,
        //                     email: this.email,
        //                     age: this.age,
        //                 },
        //                 {
        //                     headers: {
        //                         Authorization: `Bearer ${token}`
        //                     }
        //                 }
        //             )
              
        //     }
        // }
    }
</script>