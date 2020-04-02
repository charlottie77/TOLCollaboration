<template>
  <div class="cong">
    
     <div class="title">
      <p class="h1-title">Congratulations!</p>
     
    </div>
    <div class="cong-1">
       <div class="avatar-a avatar" >
        <img src="../assets/avatar_a.png"/>
        <label>{{groupMember[0]}}</label>
      </div>
      <div class="avatar-b avatar" >
        <img src="../assets/avatar_b.png"/>
        <label>{{groupMember[1]}}</label>
      </div>
      <div class="avatar-c avatar" >
        <img src="../assets/avatar_c.png"/>
        <label>{{groupMember[2]}}</label>
      </div>
    </div>
    <Credit></Credit>
  </div>
</template>
<script>
import RequestManager from '../utils/RequestManager'
import Credit from '../components/Credit.vue'
export default {
  name: 'Cong',
  components: {
    Credit
  },
  data: () =>({
    username: '',
    section: '',
    groupid: '',
    groupMember: []
  }),
  methods: {
    getGroupList: async function() {
      this.groupMember = await RequestManager.UserGetGroupmembers(this.groupid);
      console.log(this.groupMember)
    }

  
  },
  created: function () {
    let userData = JSON.parse(localStorage.userData);
    this.username = userData.username;
    this.section = userData.sectionIdx;
    this.groupid = userData.groupId;
    this.getGroupList()
     
    console.log(this.section)
  }

}


</script>

<style scoped>
.cong{
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
   margin: 0px 25px 25px 40px;
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
.cong-1 {
  display: flex;
  margin-top: 120px;
}

</style>
