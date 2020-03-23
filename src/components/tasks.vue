<template>
  <b-container>
    <b-col>
      <center>
        <h2 class="ui dividing header">My Tasks</h2>
        <div class="col-xs-12" style="height:50px;"></div>
        <b-row align-h="center">
          <b-form inline align="center" @submit="onSubmit">
            <b-form-input
              size="sm"
                        v-model="name"
              placeholder="Enter Task name"
            ></b-form-input>
            <b-button size="sm" type="submit" variant="primary"
              >Add Task</b-button
            >
          </b-form>
        </b-row>
        <b-row align-h="center">
          <b-form-group>
            <b-form-checkbox
              size="large"
  v-for="option in options"
        v-model="selected"
        :key="option.value"
        :value="option"
              stacked
            >        {{ option.text }}

            </b-form-checkbox>
          </b-form-group>
        </b-row>

        <b-button type="submit" variant="primary" @click="oncompleted">Completed</b-button>
 
        <b-button type="submit" variant="secondary  	" @click="uncompleted">Uncompleted</b-button>

        <b-button type="submit" variant="danger" @click="deletee" >Delete</b-button>

        <br />

        <strong
          >Powered by
          <a href="https://github.com/Abzokhattab/Task-manager" target="_blank"
            >Abdelrahman Khattab</a
          ></strong
        >
      </center>
      <br />
      <br />
    </b-col>
  </b-container>
</template>

<script>
import Axios from "axios";

export default {
  data() {
    return {dataa :[],
              selected: [], // Must be an array reference!

      name: "",
      options: [
      ]
    };
  },

  beforeCreate() {
    const token = localStorage.getItem("user-token");
    if (token == null) {

      this.$router.push("/login");
    } else {
      console.log(token);
      Axios.get("https://abzo-user-task-api.herokuapp.com/users/me", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(res => {
       // this.name = res.data._id;
        console.log(res.data._id);
      });

      Axios.get("https://abzo-user-task-api.herokuapp.com/tasks", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(res => {
        res.data.forEach(element => {
         this.options.push({
            text : element.description,
            value: element.completed,
            _id:element._id
          })
          
        });
        // this.name = res.data.name;
        this.dataa=res.data
        console.log(res.data);
      });
    }
  },
  methods: {
    onSubmit() {
      const token = localStorage.getItem("user-token");
		Axios.post("https://abzo-user-task-api.herokuapp.com/tasks",{description:this.name,completed:false},{
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(res => {
          this.options.push({text:this.name,value:false,_id:res.data._id})
          console.log(this.selected);

        })
        .catch(error => {
          console.log("fail" + error);
        });
    },
    oncompleted(){
            const token = localStorage.getItem("user-token");
            this.selected.forEach(element => {

		Axios.patch("https://abzo-user-task-api.herokuapp.com/tasks/"+element._id,{completed:true},{
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(res => {
          console.log(res.data);
        })
        .catch(error => {
          console.log("fail" + error);
        });


            });
    },
    uncompleted(){
            const token = localStorage.getItem("user-token");
            this.selected.forEach(element => {

		Axios.patch("https://abzo-user-task-api.herokuapp.com/tasks/"+element._id,{completed:false},{
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(res => {
          console.log(res.data);
        })
        .catch(error => {
          console.log("fail" + error);
        });


            });
    }
    ,
      deletee(){
            const token = localStorage.getItem("user-token");
            this.selected.forEach(element => {

		Axios.delete("https://abzo-user-task-api.herokuapp.com/tasks/"+element._id,{
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then( ()=> {
          this.options=this.options.filter(el=>el._id!=element._id)
        
        })
        .catch(error => {
          console.log("fail" + error);
        });
            });
    }
  }
  
};
</script>
