<template>
  <div class="log-in">
    <div class="title">
      <p class="h2-title">Let’s learn about</p>
      <p class="h1-title">Phone Battery</p>
    </div>
    <div class="login-box">
      <label class="sb-label" @click="gotoSignup">Sign Up</label>
      <div class="sb-1">
        <label>Enter you email address</label>
        <input class="dark-input" v-model="email"/>
      </div>
      <div class="sign-button">
        <button v-on:click="login()">Log In</button>
      </div>
    </div>
    <Credit></Credit>
  </div>
</template>

<script>
import Credit from '@/components/Credit.vue'
import RequestManager from '../utils/RequestManager'
import {setLS,getLS} from '../utils/LocalStorageManager'

export default {
  data: ()=>({
    email:''
  }),
  components: {
    Credit
  },
  methods:{
    gotoSignup : function(){
      this.$router.push({path:'/'})
    },
    login: async function(){
      let result = await RequestManager.UserLogin(this.email)
      console.log(result.data)
      setLS('userData',result.data.user)
      console.log(getLS('userData'))
      this.$emit('update-username',result.data.user.username)
      this.$router.push({path:'/start'})
    }
  }
}
</script>

<style scoped>
.log-in{
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.login-box {
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
  background: #7DAEE9;
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