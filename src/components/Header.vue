
<template>
  <div>
  <b-navbar toggleable="lg" type="dark" fixed="top" variant="info">
    <b-navbar-brand href="#" @click="navigate">Task Manager</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">



        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#" @click="navigate">Profile</b-dropdown-item>
          <b-dropdown-item href="#" @click="signout">Sign Out</b-dropdown-item>
                    <b-dropdown-item href="#" @click="logoutall">Sign Out all accounts </b-dropdown-item>

        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>  
</template>
<script>
import axios from 'axios'
export default {
  
  methods:{
 navigate() {
      this.$router.push("/profile");
    },
    signout(){



    const token = localStorage.getItem("user-token");
    if (token == null) {
      this.$router.push("/login");
    } 
  

            axios
        .post("https://abzo-user-task-api.herokuapp.com/users/logout",{},{
        headers: {
          Authorization: `Bearer ${token}`
        }})
        .then(() => {
                        localStorage.clear();
                        this.$router.push("/signout");
        })
        .catch(() => {
        });

    } ,
      logoutall(){

        
    const token = localStorage.getItem("user-token");
    if (token == null) {
      this.$router.push("/login");
    } 
  

            axios
        .post("https://abzo-user-task-api.herokuapp.com/users/logoutAll",{},{
        headers: {
          Authorization: `Bearer ${token}`
        }})
        .then(() => {
                        localStorage.clear();
                        this.$router.push("/signout");
        })
        .catch(() => {
        });


      }
    
    }
}
</script>