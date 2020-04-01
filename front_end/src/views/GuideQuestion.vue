<template>
  <div class="guide-question">
    <div class="section-a" v-if="this.section == 'A'">
      <div class="title">
        <p>What do you think the battery is made of?</p>
      </div>
      <div class="question-div">
        <div class="battery-img">
          <img />
          <label>Battery</label>
        </div>
        <div class="choices">
          <p>Please select:</p>
          <div>
            <input type="radio" id="a1" value="a1" v-model="gq_picked"> 
            <label></label>
            <label>Current</label>
          </div>
          <div>
            <input type="radio" id="a2" value="a2" v-model="gq_picked"> 
            <label></label>
            <label>Metal</label>
          </div>
          <div>
            <input type="radio" id="a3" value="a3" v-model="gq_picked"> 
            <label></label>
            <label>Chemical Solution</label>
          </div>
          <div>
            <input type="radio" id="a4" value="a4" v-model="gq_picked"> 
            <label></label>
            <label>Cotton</label>
          </div>
        </div>
        <router-link to="/guide-answer-a"><button v-on:click="setGuideAnswer()">Done</button></router-link>
      </div>
    </div>
     
     
  </div>
</template>

<style scoped>


</style>
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
    gq_picked: ''
  }),
  methods: {
    setGuideAnswer: async function() {
      // let result = await RequestManager.UserRegister(this.username,this.email)
      let result = await RequestManager.UserSetAnswer('pre',this.gq_picked, this.userid)

    }  
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


