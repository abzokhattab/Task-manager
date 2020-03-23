<template>
  <div>
    <ul id="example-1">
  <li v-for="task in tasks" :key="task.name">
    {{ task.name }}
  </li> 
</ul>
  <b-row align-h="center">
    <div class="row profile">
			<div class="profile-sidebar">
				<!-- SIDEBAR USERPIC -->
				<div class="profile-userpic">
					<img src="http://keenthemes.com/preview/metronic/theme/assets/admin/pages/media/profile/profile_user.jpg" class="img-responsive" alt="">
				</div>
				<!-- END SIDEBAR USERPIaC -->
				<!-- SIDEBAR USER TITLE -->
				<div class="profile-usertitle">
					<div class="profile-usertitle-name">
						Marcus Doe
					</div>
	
				</div>

				<div class="profile-usermenu">
					<ul class="nav">
            <div>
						<li class="active">
							<a href="#">
							<i class="glyphicon glyphicon-home"></i>
						My Task  </a>
						</li>
            </div>
            <div>
						<li>
							<a href="#">
							<i class="glyphicon glyphicon-user"></i>
							Account Settings </a>
						</li>
            </div>
		
					</ul>
				</div>
				<!-- END MENU -->
			</div>
		
	</div>
  </b-row>
<center>
<strong>Powered by <a href="https://github.com/Abzokhattab/Task-manager" target="_blank">Abdelrahman Khattab</a></strong>
</center>
<br>
<br>
  </div>
</template>

<script>
export default{
data(){
  return{
tasks:[
 { name:'eqweqw'},
  {name:'e12e12'}
]
  }
}
}
</script>

