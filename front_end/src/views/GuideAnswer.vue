<template>
  <div class="guide-answer">
    <div class="sec-a-true" v-if="this.section == 'A' && this.is_right ">
      <div class="title">
        <p>Correct!</p>
      </div>
      <div class="question-div">
        <p class="h2-title">What do you think the battery is made of?</p>
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
            <label class="correct">Chemical Solution</label>
          </div>
          <div class="choices-i">
            <input type="radio" id="a4" value="a4" v-model="gq_picked"> 
            <label></label>
            <label>Cotton</label>
          </div>
        </div>
      </div>
      <div class="feedback-div">
        <lable>Feedback</lable>
        <p>Yes, you are right! Battery is made by Chemical Solution. A current is just the rate of flow of charge through a point which is a concept, 
            not a material that can be used to make something.And metal is just one of the many components that are present in the battery.
            And the phone cannot run if it using cotton.  </p>
      </div>
      <router-link to="/video"><button>Done</button></router-link>
    </div>
    <div class="sec-a-false" v-if="this.section == 'A' && !this.is_right ">
      <div class="title">
        <p>Opps, it is not right....</p>
      </div>
      <div class="question-div">
        <p class="h2-title">What do you think the battery is made of?</p>
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
            <label class="correct">Chemical Solution</label>
          </div>
          <div class="choices-i">
            <input type="radio" id="a4" value="a4" v-model="gq_picked"> 
            <label></label>
            <label>Cotton</label>
          </div>
        </div>
      </div>
      <div class="feedback-div">
        <lable>Feedback</lable>
        <p>Actually, battery is made by Chemical Solution. A current is just the rate of flow of charge through a point which is a concept, 
            not a material that can be used to make something.And metal is just one of the many components that are present in the battery.
            And the phone cannot run if it using cotton.  </p>
      </div>
      <router-link to="/video"><button>Done</button></router-link>
    </div>

    
    <div class="sec-b-true" v-if="this.section == 'B' && this.is_right ">
      <div class="title">
        <p>Correct!</p>
      </div>
      <div class="question-div">
        <p class="h2-title">Which of the statements about batteries is correct?</p>
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
      <div class="feedback-div">
        <lable>Feedback</lable>
        <p>b  </p>
      </div>
      <router-link to="/video"><button>Done</button></router-link>
    </div>
    <div class="sec-b-false" v-if="this.section == 'B' && !this.is_right ">
      <div class="title">
        <p>Opps, it is not right....</p>
      </div>
      <div class="question-div">
        <p class="h2-title">Which of the statements about batteries is correct?</p>
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
      <div class="feedback-div">
        <lable>Feedback</lable>
        <p>b!  </p>
      </div>
      <router-link to="/video"><button>Done</button></router-link>
    </div>
    <div class="sec-c-true" v-if="this.section == 'C' && this.is_right ">
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
            <label>b) Avoid to let the battery go to 0%</label>
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
      <div class="feedback-div">
        <lable>Feedback</lable>
        <p>c </p>
      </div>
      <router-link to="/video"><button>Done</button></router-link>
    </div>
    <div class="sec-c-false" v-if="this.section == 'C' && !this.is_right ">
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
            <label>b) Avoid to let the battery go to 0%</label>
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
      <div class="feedback-div">
        <lable>Feedback</lable>
        <p>c! </p>
      </div>
      <router-link to="/video"><button>Done</button></router-link>
    </div>
    
  </div>
</template>

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
          this.is_right = true
        }else
        if(this.section == 'B')
        {
          if(this.gq_picked == 'b4')
          this.is_right = true
        }else
        if(this.section == 'C')
        {
          if(this.gq_picked == 'c3')
          this.is_right = true
        }
      }
  },
  created: function () {
    let userData = JSON.parse(localStorage.userData);
    this.userid = userData._id;
    this.username = userData.username;
    this.section = userData.sectionIdx;
    this.gq_picked = userData.answer; 
  }
}
</script>
