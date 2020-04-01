<template>
  <div id="app">
    <TopBar v-if="username"></TopBar>
    <router-view/>
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
  height: 100%;
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


</style>
