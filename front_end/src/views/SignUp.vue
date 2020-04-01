<template>
  <div class="sign-up">
    <div class="title">
      <p class="h2-title">Let’s learn about</p>
      <p class="h1-title">Phone Battery</p>
    </div>
    <div class="sign-box">
      <label class="sb-label">Log In</label>
      <div class="sb-1">
        <label>Enter your name</label>
        <input />
      </div>
      <div class="sb-1">
        <label>Enter you email address</label>
        <input />
      </div>
      <div class="sign-button">
        <router-link to="/start"><button>Sign Up</button></router-link>
        
      </div>
    </div>
    <Credit></Credit>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Credit from '@/components/Credit.vue'

export default {
  name: 'SignUp',
  components: {
    Credit
  }
}
</script>

<style>
.sign-up{
  padding-top: 50px;
}
.h1-title {
  font-weight: bold;
  font-size: 48px;
  line-height: 59px;
  /* identical to box height */
  text-align: center;
  color: #FFFFFF;
  margin: 8px 0px 8px 0px;
}

.h2-title {
  font-weight: normal;
  font-size: 48px;
  line-height: 59px;
  /* identical to box height */
  text-align: center;
  color: #FFFFFF;
  margin: 8px 0px 8px 0px;
}

.sign-box {
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  align-items: center;
}

.sb-label{
  font-size: 12px;
  line-height: 15px;
  color: #FFFFFF;
  justify-self: flex-end;
}
</style>
