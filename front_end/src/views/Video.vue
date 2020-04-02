<template>
  <div class="video" >
    <div class="video-a" v-if="this.section == 'A'">
      <div class="title">
        <p class="h1-title">Video of Section A</p>
      </div>
      <div>
        <iframe width="700" height="500"
          src="https://www.youtube.com/embed/rUcC8VUpl4A">
        </iframe>
      </div>
      <div class="start-button">
        <router-link to="/check-point"> <button class="v-btn">Next</button></router-link>
      </div>
    </div>
    <div class="video-b" v-if="this.section == 'B'">
      <div class="title">
        <p class="h1-title">Video of Section B</p>
      </div>
      <div>
        <iframe width="700" height="500"
          src="https://www.youtube.com/embed/43Zvd2SbI6A">
        </iframe>
      </div>
      <div class="start-button">
        <router-link to="/check-point"> <button  class="v-btn">Next</button></router-link>
      </div>
    </div>
    <div class="video-c" v-if="this.section == 'C'">
      <div class="title">
        <p class="h1-title">Video of Section C</p>
      </div>
      <div>
        <iframe width="700" height="500"
          src="https://www.youtube.com/embed/oA51rJDIiVc">
        </iframe>
      </div>
      <div class="start-button">
        <router-link to="/check-point"> <button  class="v-btn">Next</button></router-link>
      </div>
    </div>
    
    
  </div>
  
</template>

<style scoped>
.v-btn {
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

<script>

export default {
  name: 'Video',
  components: {

  },
  data: () =>({
    username: '',
    section: '',
    userid: '',
  }),
  methods: {
    
  },
  created: function () {
    let userData = JSON.parse(localStorage.userData);
    this.userid = userData._id;
    this.username = userData.username;
    this.section = userData.sectionIdx;
    console.log(this.section)
  }
}
</script>
