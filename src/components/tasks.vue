<template>
  <b-container>
    <b-col>
      <center>
        <h2 class="ui dividing header">My Tasks</h2>
        <div class="col-xs-12" style="height:50px;"></div>
        <b-row align-h="center">
          <b-form inline align="center">
            <b-form-input
              size="sm"
              placeholder="Enter Task name"
            ></b-form-input>
            <b-button size="sm" type="submit" variant="primary">Add Task</b-button>
          </b-form>
        </b-row>
        <b-row align-h="center">
          <b-form-group>
            <b-form-checkbox-group
              size="large"
              v-model="selected"
              :options="options"
              stacked
            >
            </b-form-checkbox-group>
          </b-form-group>
        </b-row>

        <b-button type="submit" variant="primary">Completed</b-button>
		
        <b-button type="reset" variant="secondary  	">Uncompleted</b-button>
		
        <b-button type="reset" variant="danger">Delete</b-button>

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
export default {
  data() {
    return {
      options: [
        { text: "taasdlasdlasd", value: "dqwdkmqwdw" },
        { text: "eqweqweqw", value: "eqweqweqweqw" }
      ]
    };
  }
};
</script>
