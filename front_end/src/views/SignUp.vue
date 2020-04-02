<template>
  <div class="sign-up">
    <div class="title">
      <p class="h2-title">Let’s learn about</p>
      <p class="h1-title">Phone Battery</p>
    </div>
    <div class="sign-box">
      <label class="sb-label" @click="gotoLogin">Log In</label>
      <div class="sb-1">
        <label>Enter your name</label>
        <input class="dark-input" v-model="username" />
      </div>
      <div class="sb-1">
        <label>Enter you email address</label>
        <input class="dark-input" v-model="email"/>
      </div>
      <div class="sign-button">
        <!-- <router-link to="/start"><button>Sign Up</button></router-link> -->
        <button v-on:click="register()">Sign Up Here</button>
      </div>
    </div>
    <Credit></Credit>
  </div>
</template>

<script>
// @ is an alias to /src
import Credit from '@/components/Credit.vue'
import RequestManager from '../utils/RequestManager'

export default {
  name: 'SignUp',
  components: {
    Credit
  },
  data: ()=>({
    username:'',
    email:''
  }),
  methods:{
    register: async function(){
      let result = await RequestManager.UserRegister(this.username,this.email)
      console.log(result.data)
      localStorage.userData = JSON.stringify(result.data.user)
      console.log(localStorage.userData)
      this.$emit('update-username',result.data.user.username)
      let userData = result.data.user
      console.log(userData)
      if (userData.Answer){
        if(userData.Answer.pre != null && userData.Answer.before != null && userData.Answer.after == null && userData.Score.group == null) this.$router.push({path:'/final'})
        else if (userData.Answer.pre != null && userData.Answer.before != null && userData.Answer.after != null && userData.Score.group == null) this.$router.push({path:'/report'})
        else if (userData.Answer.pre != null && userData.Answer.before != null && userData.Answer.after != null && userData.Score.group != null) this.$router.push({path:'/group-report'})
        else this.$router.push({path:'/start'})
      }
      else  this.$router.push({path:'/start'})
//      alert('Succeeded')
    },
    gotoLogin : function(){
      this.$router.push({path:'/login'})
    }
  }
}
</script>

<style scoped>
.sign-up{
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sign-box {
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  align-items: center;
  width: 454px;
  background-color: #363B4F;
  padding: 18px 24px 40px 24px;
}

.sb-label{
  font-size: 12px;
  line-height: 15px;
  color: #FFFFFF;
  align-self: flex-end;
}
.sb-1 {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: flex-start;
}

.sb-1 input{
  width: 100%;
  margin-top: 8px;
}

.sign-button button {
  background: #F9B623;
  border-radius: 8px;
  width: 166px;
  height: 56px;
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
  text-align: center;
  color: #FFFFFF;
  border: none;
  margin-top: 60px;

}
</style>


