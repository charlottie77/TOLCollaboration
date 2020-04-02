<template>
  <div class="guide-answer">
    <div class="sec-a-true ga-i" v-if="this.section == 'A' && this.is_right ">
      <div class="title">
        <p class="h1-title">Correct!</p>
      </div>
      <div class="question-div">
        <p class="text">What do you think the battery is made of?</p>
        <div class="qd-1">
          <div class="battery-img">
            <img src="../assets/charger.png"/>
            <label>Phone Battery</label>
          </div>
          <div class="choices">
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
              <label class="correct">Correct: Chemical Solution</label>
            </div>
            <div class="choices-i">
              <input type="radio" id="a4" value="a4" v-model="gq_picked"> 
              <label></label>
              <label>Cotton</label>
            </div>
          </div>
        </div>
        
      </div>
      <div class="feedback-div">
        <label>Feedback</label>
        <p>Yes, you are right! Battery is made by Chemical Solution. A current is just the rate of flow of charge through a point which is a concept, 
            not a material that can be used to make something.And metal is just one of the many components that are present in the battery.
            And the phone cannot run if it using cotton.  </p>
      </div>
      <router-link to="/video"><button class="gai-btn">Done</button></router-link>
    </div>
    <div class="sec-a-false ga-i" v-if="this.section == 'A' && !this.is_right ">
      <div class="title">
        <p class="h1-title"> Opps, it is not right....</p>
      </div>
      <div class="question-div">
        <p class="text">What do you think the battery is made of?</p>
        <div class="qd-1">
          <div class="battery-img">
            <img src="../assets/charger.png"/>
            <label>Phone Battery</label>
          </div>
          <div class="choices">
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
              <label class="correct">Correct: Chemical Solution</label>
            </div>
            <div class="choices-i">
              <input type="radio" id="a4" value="a4" v-model="gq_picked"> 
              <label></label>
              <label>Cotton</label>
            </div>
        </div>
        </div>
        
      </div>
      <div class="feedback-div">
        <label>Feedback</label>
        <p>Actually, battery is made by Chemical Solution. A current is just the rate of flow of charge through a point which is a concept, 
            not a material that can be used to make something.And metal is just one of the many components that are present in the battery.
            And the phone cannot run if it using cotton.  </p>
      </div>
      <router-link to="/video"><button class="gai-btn">Done</button></router-link>
    </div>

    
    <div class="sec-b-true ga-i" v-if="this.section == 'B' && this.is_right ">
      <div class="title">
        <p class="h1-title">Correct!</p>
      </div>
      <div class="question-div">
        <p class="text">Which of the statements about batteries is correct?</p>
        <div class="choices">
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
            <label class="correct">d) Correct: Batteries are constant voltage providers. </label>
          </div>
        </div>
      </div>
      <div class="feedback-div">
        <label>Feedback</label>
        <p>b  </p>
      </div>
      <router-link to="/video"><button class="gai-btn">Done</button></router-link>
    </div>
    <div class="sec-b-false ga-i" v-if="this.section == 'B' && !this.is_right ">
      <div class="title">
        <p class="h1-title">Opps, it is not right....</p>
      </div>
      <div class="question-div">
        <p class="text">Which of the statements about batteries is correct?</p>
        <div class="choices">
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
            <label class="correct"> Correct: d) Batteries are constant voltage providers. </label>
          </div>
        </div>
      </div>
      <div class="feedback-div">
        <label>Feedback</label>
        <p>b!  </p>
      </div>
      <router-link to="/video"><button class="gai-btn">Done</button></router-link>
    </div>
    <div class="sec-c-true ga-i" v-if="this.section == 'C' && this.is_right ">
      <div class="title">
        <p class="h1-title">Correct!</p>
      </div>
      <div class="question-div">
        <div class="choices">
          <p>Which of these is a wrong way to handle a Li-ion battery which you no longer need?</p>
          <div class="choices-i">
            <input type="radio" id="c1" value="c1" v-model="gq_picked"> 
            <label></label>
            <label>a) Put it in Recycling bin in the nearby collection spots in your city</label>
          </div>
          <div class="choices-i">
            <input type="radio" id="c2" value="c2" v-model="gq_picked"> 
            <label></label>
            <label>b) Avoid to let the battery go to 0%</label>
          </div>
          <div class="choices-i">
            <input type="radio" id="c3" value="c3" v-model="gq_picked"> 
            <label></label>
            <label class="correct">c) Correct: Throw it in the dustbin</label>
          </div>
          <div class="choices-i">
            <input type="radio" id="c4" value="c4" v-model="gq_picked"> 
            <label></label>
            <label>d) Keep it safely in a cool place</label>
          </div>
        </div>
      </div>
      <div class="feedback-div">
        <label>Feedback</label>
        <p>c </p>
      </div>
      <router-link to="/video"><button class="gai-btn">Done</button></router-link>
    </div>
    <div class="sec-c-false ga-i" v-if="this.section == 'C' && !this.is_right ">
      <div class="title">
        <p class="h1-title">Opps, it is not right...</p>
      </div>
      <div class="question-div">
        <div class="choices">
          <p>Which of these is a wrong way to handle a Li-ion battery which you no longer need?</p>
          <div class="choices-i">
            <input type="radio" id="c1" value="c1" v-model="gq_picked"> 
            <label></label>
            <label>a) Put it in Recycling bin in the nearby collection spots in your city</label>
          </div>
          <div class="choices-i">
            <input type="radio" id="c2" value="c2" v-model="gq_picked"> 
            <label></label>
            <label>b) Avoid to let the battery go to 0%</label>
          </div>
          <div class="choices-i">
            <input type="radio" id="c3" value="c3" v-model="gq_picked"> 
            <label></label>
            <label class="correct">c) Correct: Throw it in the dustbin</label>
          </div>
          <div class="choices-i">
            <input type="radio" id="c4" value="c4" v-model="gq_picked"> 
            <label></label>
            <label>d) Keep it safely in a cool place</label>
          </div>
        </div>
      </div>
      <div class="feedback-div">
        <label>Feedback</label>
        <p>c! </p>
      </div>
      <router-link to="/video"><button class="gai-btn">Done</button></router-link>
    </div>
    
  </div>
</template>

<style scoped>
.battery-img {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

.battery-img img{
    width: 150px;
    height: 150px;
    margin-bottom: 20px;
  }

.qd-1 {
  display: flex;
  justify-content: center;
}

.correct {
  font-weight: bold;
  color: #FFC107;
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

  .feedback-div {
    margin-top: 60px;
    width: 60%;
    background-color: #4A4F61 ;
    padding: 12px 18px 12px 18px;
    border-radius: 8px;;
  }

  .feedback-div p{
    text-align: left;
  }

  .feedback-div label {
    font-weight: bold;
  }
  .ga-i{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .gai-btn {
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
  name: 'GuideAnswer',
  components: {

  },
  data: () =>({
    username: '',
    section: '',
    userid: '',
    gq_picked: '',
    is_right: false
  }),
  methods: {
      validateAnswer: function () {
        if (this.section == 'A' )
        {
          if(this.gq_picked == 'a3')
          this.is_right = true;
          console.log("right a")
        }else
        if(this.section == 'B')
        {
          if(this.gq_picked == 'b4')
          this.is_right = true;
          console.log("right b")
        }else
        if(this.section == 'C')
        {
          if(this.gq_picked == 'c3')
          this.is_right = true
          console.log("right c")
        }
      }
  },
  created: function () {
    let userData = JSON.parse(localStorage.userData);
    this.userid = userData._id;
    this.username = userData.username;
    this.section = userData.sectionIdx;
    this.gq_picked = userData.answer; 

    this.validateAnswer();
  }
}
</script>

