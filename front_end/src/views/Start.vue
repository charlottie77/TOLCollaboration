<template>
  <div class="start">
    
     <div class="title">
      <p class="h1-title">Let’s learn about</p>
      <p class="h2-title">Phone Battery</p>
      <!-- TODO -->
      <p class="h3-title">You could start your learning first. We will help you to find teammates meanwhile....</p>
    </div>
    <div class="avatar-a avatar" v-if="this.section == 'A'">
      <img src="../assets/avatar_a.png"/>
      <label>{{username}}</label>
    </div>
    <div class="avatar-b avatar" v-if="this.section == 'B'">
      <img src="../assets/avatar_b.png"/>
      <label>{{username}}</label>
    </div>
    <div class="avatar-c avatar" v-if="this.section == 'C'">
      <img src="../assets/avatar_c.png"/>
      <label>{{username}}</label>
    </div>
    <div class="start-button" > 
      <label> You are assigned to Section {{section}} </label>
      <router-link to="/guide-question"> <button>Start My Learning</button></router-link>
     
    </div>
  </div>
</template>
<script>
export default {
  name: 'Start',
  components: {

  },
  data: () =>({
    username: '',
    section: ''
  }),
  methods: {

  
  },
  created: function () {
    let userData = JSON.parse(localStorage.userData);
    this.username = userData.username;
    this.section = userData.sectionIdx;
    console.log(this.section)
  }

}


</script>

<style scoped>
.start{
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
 .avatar-a {
   color: #CF87E9;
   font-size: 24px;
 }
 .avatar-b {
   color: #7DAEE9;
   font-size: 24px;
 }
 .avatar-c {
   color: #EDC494;
   font-size: 24px;
 }

 .avatar {
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-top: 40px;
 }

 .avatar img{
   width: 100px;
   height: 100px;
   margin-bottom: 24px;
 }

 .start-button{
  display: flex;
   flex-direction: column;
   align-items: center;
   margin-top: 60px;
 }

 .start-button button {
  background: #F9B623;
  border-radius: 8px;
  width: 300px;
  height: 56px;
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
  text-align: center;
  color: #FFFFFF;
  border: none;
  margin-top: 12px;

}

</style>
