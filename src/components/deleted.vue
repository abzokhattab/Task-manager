<template>
<b-container>
        <h2 class="ui dividing header">Your account was deleted . thank you for being with us  </h2>
    <div class="col-xs-12" style="height:50px;"></div>
    <b-form inline>
        <center>
       <a href="#" @click="navigate">
                    <i class="glyphicon glyphicon-home"></i>
                    Login    ....
                  </a>
                         <a href="#" @click="navigate2">
                    <i class="glyphicon glyphicon-home"></i>
                    Register
                  </a>
        </center>
    </b-form>
</b-container>
</template>
<script>
export default {
    methods:{
        navigate(){
                        this.$router.push("/login");

        },
        navigate2(){
                        this.$router.push("/signup");

        }
    }
}
</script>