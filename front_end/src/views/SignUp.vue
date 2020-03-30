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
        <input v-model="username" />
      </div>
      <div>
        <label>Enter you email address</label>
        <input v-model="email"/>
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
//      alert('Succeeded')
    }
  }
}
</script>
