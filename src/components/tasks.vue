<template>
  <b-container>
    <b-col>
      <center>
        <h2 class="ui dividing header">My Tasks</h2>
        <div class="col-xs-12" style="height:50px;"></div>
        <b-row align-h="center">
          <b-form inline align="center" @submit.prevent="onSubmit">
            <b-form-input
              size="sm"
                        v-model="name"
              placeholder="Enter Unique Task name"
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
        :key="option.text"
        :value="option"
              stacked
            >        {{ option.text + option.des}}

            </b-form-checkbox>
          </b-form-group>
        </b-row>

        <b-button type="submit" variant="primary" @click="oncompleted">Completed</b-button>
 
        <b-button type="submit" variant="secondary  	" @click="uncompleted">Uncompleted</b-button>

        <b-button type="submit" variant="danger" @click="deletee" >Delete</b-button>

        <br />
                    <p class="invalid-feedback d-block" >{{error}}</p>
        <br />

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
    return {error:'',
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
      }).catch(() => {
                                localStorage.clear();
              this.$router.push("/login");

       // this.name = res.data._id;
      });

      Axios.get("https://abzo-user-task-api.herokuapp.com/tasks", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(res => {
        res.data.forEach(element => {
         this.options.push({
            text : element.description ,
            value: element.completed,
            _id:element._id,
            des:(element.completed?'  ,Completed':'  ,Uncompleted')
          })
          
        });
        // this.name = res.data.name;
      }).catch(() => {
                                localStorage.clear();
              this.$router.push("/login");

       // this.name = res.data._id;
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
          this.options.push({text:this.name,value:false,_id:res.data._id,des:'  ,UnCompleted'})

        })
        .catch((e) => {
console.log(e)        });
    },
    oncompleted(){
            const token = localStorage.getItem("user-token");
            this.selected.forEach(element => {

		Axios.patch("https://abzo-user-task-api.herokuapp.com/tasks/"+element._id,{completed:true},{
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(() => {
        var indx=  this.options.findIndex(el=>
             el._id == element._id

          )
          this.options[indx].value=true,
          this.options[indx].des='  ,Completed'
         })
        .catch(() => {
                  this.error='Invalid Inputs'
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
        .then(() => {
        var indx=  this.options.findIndex(el=>
             el._id == element._id

          )
          this.options[indx].value=true,
          this.options[indx].des='  ,Uncompleted'
        })
        .catch(() => {
        this.error='Invalid Inputs'
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
        .catch(() => {
        this.error='Invalid Inputs'
        });
            });
    }
  }
  
};
</script>
