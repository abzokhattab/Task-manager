
<template>
  <div>
  <b-navbar toggleable="lg" type="dark" fixed="top" variant="info">
    <b-navbar-brand href="#" @click="navigate">Task Manager</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
  
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