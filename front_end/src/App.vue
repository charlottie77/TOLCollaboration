<template>
  <div id="app">
    <TopBar v-if="username" :username="username"></TopBar>
    <router-view v-on:update-username="updateUsesrname"/>
  </div>
</template>
<script>
import TopBar from '@/components/TopBar.vue'
export default {
  components: {
    TopBar
  },
  data: () =>({
    username: '',
  }),
  methods: {
    updateUsesrname: function(username){
      console.log('got message')
      this.username = username;
    }
  },
  created: function () {
      let userData = JSON.parse(localStorage.userData);
      this.username = userData.username;
  },
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background-color: #1F2437;
  min-height: 100%;
}

body, html{
  height: 100%;
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

.dark-input {
  background-color: #4A4F61;
  color: white;
  border: none;
  border-radius: 10px;
  height: 45px;
  outline: none;
  caret-color: white;
  padding: 0 15px;
  width: calc(100% - 30px) !important
}
button{
  cursor: pointer;
}
</style>
