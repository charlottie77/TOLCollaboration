<template>
  <div class="guide-question">
    <div class="section-a" v-if="this.section == 'A'">
      <div class="title">
        <p class="h1-title">What do you think the battery is made of?</p>
      </div>
      <div class="question-div">
        <div class="battery-img">
          <img src="../assets/charger.png"/>
          <label>Phone Battery</label>
        </div>
        <div class="choices">
          <p>Please select:</p>
          <div class="choices-i">
            <input type="radio" id="a1" value="a1" v-model="gq_picked"> 
            <label></label>
            <label>Current</label>
          </div>
          <div class="choices-i">
            <input type="radio" id="a2" value="a2" v-model="gq_picked"> 
            <label></label>
            <label>Metal</label>
          </div>
          <div class="choices-i">
            <input type="radio" id="a3" value="a3" v-model="gq_picked"> 
            <label></label>
            <label>Chemical Solution</label>
          </div>
          <div class="choices-i">
            <input type="radio" id="a4" value="a4" v-model="gq_picked"> 
            <label></label>
            <label>Cotton</label>
          </div>
        </div>
        
      </div>
      <router-link to="/guide-answer"><button class="guide-answer-btn" v-on:click="setGuideAnswer()">Done</button></router-link>
    </div>
    <div class="section-b" v-if="this.section == 'B'">
      <div class="title">
        <p class="h1-title">Which of the statements about batteries is correct? </p>
      </div>
      <div class="question-div">
        <div class="choices">
          <p>Please select:</p>
          <div class="choices-i">
            <input type="radio" id="b1" value="b1" v-model="gq_picked"> 
            <label></label>
            <label>a) Batteries store electric charges or electrons, they have electricity inside them</label>
          </div>
          <div class="choices-i">
            <input type="radio" id="b2" value="b2" v-model="gq_picked"> 
            <label></label>
            <label>b) The battery itself is a huge electrical cell.</label>
          </div>
          <div class="choices-i">
            <input type="radio" id="b3" value="b3" v-model="gq_picked"> 
            <label></label>
            <label>c) Batteries are rechargeable because the electrochemical cell is rechargeable.</label>
          </div>
          <div class="choices-i">
            <input type="radio" id="b4" value="b4" v-model="gq_picked"> 
            <label></label>
            <label>d) Batteries are constant voltage providers. </label>
          </div>
        </div>
        
      </div>
      <router-link to="/guide-answer"><button class="guide-answer-btn" v-on:click="setGuideAnswer()">Done</button></router-link>
    </div>
    <div class="section-a" v-if="this.section == 'C'">
      <div class="title">
        <p class="h1-title">Which of these is a wrong way to handle a Li-ion battery which you no longer need?</p>
      </div>
      <div class="question-div">
        <div class="choices">
          <p>Please select:</p>
          <div class="choices-i">
            <input type="radio" id="c1" value="c1" v-model="gq_picked"> 
            <label></label>
            <label>a) Put it in Recycling bin in the nearby collection spots in your city</label>
          </div>
          <div class="choices-i">
            <input type="radio" id="c2" value="c2" v-model="gq_picked"> 
            <label></label>
            <label>b) Charge it until 100% before storing it</label>
          </div>
          <div class="choices-i">
            <input type="radio" id="c3" value="c3" v-model="gq_picked"> 
            <label></label>
            <label>c) Throw it in the dustbin</label>
          </div>
          <div class="choices-i">
            <input type="radio" id="c4" value="c4" v-model="gq_picked"> 
            <label></label>
            <label>d) Keep it safely in a cool place</label>
          </div>
        </div>
        
      </div>
      <router-link to="/guide-answer"><button class="guide-answer-btn" v-on:click="setGuideAnswer()">Done</button></router-link>
    </div>

     
     
  </div>
</template>

<style scoped>

.guide-question {
  padding-top: 40px;
}

.section-a .question-div {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;;
}
.battery-img {
  display: flex;
  flex-direction: column;
}

.battery-img img{
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
}

.choices {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  margin-left: 45px;
  margin-bottom: 60px;
}
.choices-i {
  display: flex;
  margin-top:12px;
}

.choices-i label {
  font-weight: bold;
}

.guide-answer-btn {
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


