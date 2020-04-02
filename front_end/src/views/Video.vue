<template>
  <div class="video" >
    <div class="video-a" v-if="this.section == 'A'">
      <div class="title">
        <p>Video of Section A</p>
      </div>
      <div>
        <iframe width="420" height="315"
          src="https://www.youtube.com/embed/rUcC8VUpl4A">
        </iframe>
      </div>
      <div class="start-button">
        <router-link to="/check-point"> <button>Next</button></router-link>
      </div>
    </div>
    <div class="video-b" v-if="this.section == 'B'">
      <div class="title">
        <p>Video of Section B</p>
      </div>
      <div>
        <iframe width="420" height="315"
          src="https://www.youtube.com/embed/43Zvd2SbI6A">
        </iframe>
      </div>
      <div class="start-button">
        <router-link to="/check-point"> <button>Next</button></router-link>
      </div>
    </div>
    <div class="video-c" v-if="this.section == 'C'">
      <div class="title">
        <p>Video of Section C</p>
      </div>
      <div>
        <iframe width="420" height="315"
          src="https://www.youtube.com/embed/oA51rJDIiVc">
        </iframe>
      </div>
      <div class="start-button">
        <router-link to="/check-point"> <button>Next</button></router-link>
      </div>
    </div>
    
    
  </div>
  
</template>
<script>
import RequestManager from '../utils/RequestManager'

export default {
  name: 'GuideQuestion',
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
