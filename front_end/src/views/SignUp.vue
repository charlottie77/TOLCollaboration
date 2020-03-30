<template>
  <div class="sign-up">
    <div class="title">
      <p>Let’s learn about</p>
      <p>Phone Battery</p>
    </div>
    <div class="sign-box">
      <label>Log In</label>
      <div>
        <label>Enter your name</label>
        <input />
      </div>
      <div>
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
