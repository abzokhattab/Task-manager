<template>
  <div>
        <br />

    <!-- <ul id="example-1">
      <li v-for="task in tasks" :key="task.name">
        {{ task.name }}
      </li>
    </ul> -->
    <b-row align-h="center">
      <div class="row profile">
        <div class="profile-sidebar">
          <!-- SIDEBAR USERPIC -->
          <div class="profile-userpic">
            <!-- <img src="http://keenthemes.com/preview/metronic/theme/assets/admin/pages/media/profile/profile_user.jpg" class="img-responsive" alt=""> -->
          </div>
          <!-- END SIDEBAR USERPIaC -->
          <!-- SIDEBAR USER TITLE -->
          <div class="profile-usertitle">
            <div class="profile-usertitle-name">
              <strong>
              {{ name }}
              </strong>
            </div>
          </div>
              <br />


          <div class="profile-usermenu">
              <div><center>
                  <a href="#" @click="navigate">
                    <i class="glyphicon glyphicon-home"></i>
                    My Task
                  </a>
                                    </center>
              </div>
              <div>
                
                  <a href="#" @click="navigate2">
                    <i class="glyphicon glyphicon-user"></i>
                    Account Settings
                  </a>
              </div>
          </div>
          <!-- END MENU -->
        </div>
      </div>
    </b-row>
   
    <br />
    <br />    <br />
    <br />
        <br />

    <br />
    <br />

  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      name: ""
    };
  },
  beforeCreate() {
    const token = localStorage.getItem("user-token");
    if (token == null) {
      this.$router.push("/login");
    } else {
      Axios.get("https://abzo-user-task-api.herokuapp.com/users/me", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(res => {
        this.name = res.data.name;
      }).catch(()=>{
             localStorage.clear();
              this.$router.push("/login");

      });
    }
  },
  methods: {
    navigate() {
      this.$router.push("/tasks");
    },   navigate2() {
      this.$router.push("/edit");
    }
  }
};
</script>
