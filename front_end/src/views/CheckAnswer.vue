<template>
  <div class="check-answer">
     <div class="title">
      <p>Good job! You Learned Well!</p>
    </div>
    <div>
      <label>3/3</label>
      <label>your pts</label>
    </div>

     <div class="check-a" v-if="this.section == 'A'">
      <div class="title">
        <p>Check Point</p>
      </div>
      <div class="check-question-area">
        <div class="section-a-q1">
          <p>Q1. What are the benefits for using lithium ion batteries?</p>
          <div>
            <input type="radio" value='A' id="sec-a-q1-i1" v-model="Q1"> 
            <label>a) low energy density</label>
          </div>
          <div>
            <input type="radio" value='B' id="sec-a-q1-i2" v-model="Q1"> 
            <label>b) no memory effect</label>
          </div>
          <div>
            <input type="radio" value='C' id="sec-a-q1-i3" v-model="Q1"> 
            <label>c) a safety hazard</label>
          </div>
          <div>
            <input type="radio" value='D' id="sec-a-q1-i4" v-model="Q1"> 
            <label>d) low shelf lift</label>
          </div>
        </div>
        <div class="feedback-div f-a-q1">
          <label>Feedback</label>
          <p>f-a-q1 </p>
        </div>

        <div class="section-a-q2">
          <p>Q2. What is the material in the negative electrode?</p>
          <div>
            <input type="radio" value='A' id="sec-a-q2-i1" v-model="Q2"> 
            <label>a) Intercalated lithium compound</label>
          </div>
          <div>
            <input type="radio" value='B' id="sec-a-q2-i2" v-model="Q2"> 
            <label>b) Separator</label>
          </div>
          <div>
            <input type="radio" value='C' id="sec-a-q2-i3" v-model="Q2"> 
            <label>c) Electrolyte</label>
          </div>
          <div>
            <input type="radio" value='D' id="sec-a-q2-i4" v-model="Q2"> 
            <label>d) Intercalated carbon compound</label>
          </div>
        </div>
        <div class="section-a-q3">
          <p>Q3. What is the unnecessary selection criteria for picking the right anode of Lithium-Ion batteries?</p>
          <div>
            <input type="radio" value='A' id="sec-a-q3-i1" v-model="Q3"> 
            <label>a) The selected anode material and chemistry works well with the electrolyte and the cathode </label>
          </div>
          <div>
            <input type="radio" value='B' id="sec-a-q3-i2" v-model="Q3"> 
            <label>b) The solid electrolyte interface does not get very thick. It’s a layer that can form and will form as you charge and discharge. </label>
          </div>
          <div>
            <input type="radio" value='C' id="sec-a-q3-i3" v-model="Q3"> 
            <label>c) It doesn’t get very dense, because that will degrade the performance of the battery.</label>
          </div>
          <div>
            <input type="radio" value='D' id="sec-a-q3-i4" v-model="Q3"> 
            <label>d) It needs to be  Lithium compound.</label>
          </div>
        </div>
      </div>
     
    </div>
    <div class="check-b" v-if="this.section == 'B'">
      <div class="title">
        <p>Check Point</p>
      </div>
      <div class="check-question-area">
        <div class="section-b-q1">
          <p>Q1. Which of the statements about batteries is correct?</p>
          <div>
            <input type="radio" value='A' id="sec-b-q1-i1" v-model="Q1"> 
            <label>a) Batteries store electric charges or electrons, they have electricity inside them </label>
          </div>
          <div>
            <input type="radio" value='B' id="sec-b-q1-i2" v-model="Q1"> 
            <label>b) The battery itself is a huge electrical cell.</label>
          </div>
          <div>
            <input type="radio" value='C' id="sec-b-q1-i3" v-model="Q1"> 
            <label>c) Batteries are rechargeable because the electrochemical cell is rechargeable.</label>
          </div>
          <div>
            <input type="radio" value='D' id="sec-b-q1-i4" v-model="Q1"> 
            <label>d) Batteries are constant voltage providers. </label>
          </div>
        </div>
        <div class="section-b-q2">
          <p>Q2. Which of the statements about Lithium-Ion batteries is wrong?</p>
          <div>
            <input type="radio" value='A' id="sec-b-q2-i1" v-model="Q2"> 
            <label>a) Lithium-Ion batteries won’t self-discharge when not in use.</label>
          </div>
          <div>
            <input type="radio" value='B' id="sec-b-q2-i2" v-model="Q2"> 
            <label>b)  Lithium-Ion batteries produce the same energy as old batteries but weigh approximately 35% lower.</label>
          </div>
          <div>
            <input type="radio" value='C' id="sec-b-q2-i3" v-model="Q2"> 
            <label>c) Lithium Ion batteries have a low self-discharge rate to retain their charge longer.</label>
          </div>
          <div>
            <input type="radio" value='D' id="sec-b-q2-i4" v-model="Q2"> 
            <label>d) A battery is made up of an anode, cathode, separator, electrolyte, and two current collectors (positive and negative).</label>
          </div>
        </div>
        <div class="section-c-q3">
          <p>Q3. Choose the correct process for each blank. </p>
          <p>While the battery is discharging: The ____ releases __  to the ___; generating a flow of ___ from one side to the other. </p>
          <div>
            <input type="radio" value='A' id="sec-c-q3-i1" v-model="Q3"> 
            <label>a) Anode; lithium ions; cathode; solution </label>
          </div>
          <div>
            <input type="radio" value='B' id="sec-c-q3-i2" v-model="Q3"> 
            <label>b) Cathode; lithium ions; Anode; electrons </label>
          </div>
          <div>
            <input type="radio" value='C' id="sec-c-q3-i3" v-model="Q3"> 
            <label>c) Anode; lithium; cathode; solution </label>
          </div>
          <div>
            <input type="radio" value='D' id="sec-c-q3-i4" v-model="Q3"> 
            <label>d) Anode; lithium ions; cathode; electrons </label>
          </div>
        </div>
      </div>
    

    </div>
    <div class="check-c" v-if="this.section == 'C'">
      <div class="title">
        <p>Check Point</p>
      </div>
      <div class="check-question-area">
        <div class="section-c-q1">
          <p>Q1. Select all that apply.</p>
          <div>
            <input type="radio" value='A' id="sec-c-q1-i1"  v-model="Q1"> 
            <label>a) lNever store or charge battery pack inside your car in extreme temperatures, since extreme temperature could ignite fire.</label>
          </div>
          <div>
            <input type="radio" value='B' id="sec-c-q1-i2"  v-model="Q1"> 
            <label>b) If your phone case is at normal temperature and the battery is fully charged but still plugged in, there is still some risk of overcharging</label>
          </div>
          <div>
            <input type="radio" value='C' id="sec-c-q1-i3"  v-model="Q1"> 
            <label>c) If you have to store the battery over a longer period of time then drain the full battery beforehand. </label>
          </div>
          <div>
            <input type="radio" value='D' id="sec-c-q1-i4"  v-model="Q1"> 
            <label>d) If the dent in your battery is  really small, you can ignore it as the battery has strong metal cases.</label>
          </div>
        </div>
        <div class="section-c-q2">
          <p>Q2. Which of these is a wrong way to handle a Li-ion battery which you no longer need?</p>
          <div>
            <input type="radio" value='A' id="sec-c-q2-i1" v-model="Q2"> 
            <label>a) Put it in Recycling bin in the nearby collection spots in your city </label>
          </div>
          <div>
            <input type="radio" value='B' id="sec-c-q2-i2" v-model="Q2"> 
            <label>b) Charge it until 50% before storing it </label>
          </div>
          <div>
            <input type="radio" value='C' id="sec-c-q2-i3" v-model="Q2"> 
            <label>c) Throw it in the dustbin</label>
          </div>
          <div>
            <input type="radio" value='D' id="sec-c-q2-i4" v-model="Q2"> 
            <label>d) Keep it safely in a cool place</label>
          </div>
        </div>
        <div class="section-c-q3">
          <p>Q3. Choose the suitable heat for keep the phone battery stay longer</p>
          <div>
            <input type="radio" value='A' id="sec-c-q3-i1" v-model="Q3"> 
            <label>a) -10 ºC /  14 ºF </label>
          </div>
          <div>
            <input type="radio" value='B' id="sec-c-q3-i2" v-model="Q3"> 
            <label>b) 0 ºC / 32 ºF </label>
          </div>
          <div>
            <input type="radio" value='C' id="sec-c-q3-i3" v-model="Q3"> 
            <label>c) 20 ºC /  68 ºF </label>
          </div>
          <div>
            <input type="radio" value='D' id="sec-c-q3-i4" v-model="Q3"> 
            <label>d) 55  ºC / 131º F </label>
          </div>
        </div>
      </div>
     

    </div>
    



    
    <div class="check-point-button">
      <router-link to="/doc"> <button>Next</button></router-link>
    </div>
  </div>
</template>

<style scoped>
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
</style>

<script>
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
    
  },
  created: function () {
    let userData = JSON.parse(localStorage.userData);
    this.userid = userData._id;
    this.username = userData.username;
    this.section = userData.sectionIdx;
  }
}
</script>
