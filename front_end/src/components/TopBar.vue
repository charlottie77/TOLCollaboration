<template>
  <div class="top-bar" >
    <label>{{username}}</label>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
  components: {
    
  },
  data: () =>({
    // username: '',
  }),
  methods: {

  
  },
  computed: {
    username: function () {
      let userData = JSON.parse(localStorage.userData);
      return userData.username;
    }
  },
  created: function () {
      // let userData = JSON.parse(localStorage.userData);
      // this.username = userData.username;
  },
}
</script>

<style scoped>
.top-bar {
  display: flex;
  justify-content: flex-end;
  padding-right: 28px;
  padding-top: 8px;;
}

.top-bar label {
  color: #fff;
  font-size: 20px;
}

  
</style>
