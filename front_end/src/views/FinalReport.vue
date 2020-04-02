<template>
  <div class="final-quiz">
    <div class="title">
        <p class="h1-title">Great!</p>
        <p>We will send you the final score of your group after all teammembers finished </p>
    </div>
    <div class="fq-score-div">
    <label>{{score}}/9 </label>
    <label>your pts</label>
    </div>
    <div class="final-question-area">
      <div class="final-question-item">
        <p>Q1. What are the benefits for using lithium ion batteries?</p>
        <div class="fq-i">
          <input type="radio" value='A' id="sec-a-q1-i1" v-model="Q[0]"> 
          <label>a) low energy density</label>
        </div>
        <div class="fq-i">
          <input type="radio" value='B' id="sec-a-q1-i2" v-model="Q[0]"> 
          <label>b) no memory effect</label>
        </div>
        <div class="fq-i">
          <input type="radio" value='C' id="sec-a-q1-i3" v-model="Q[0]"> 
          <label>c) a safety hazard</label>
        </div>
        <div class="fq-i">
          <input type="radio" value='D' id="sec-a-q1-i4" v-model="Q[0]"> 
          <label>d) low shelf lift</label>
        </div>
      </div>
      <div class="feedback-div">
        <label>Feedback</label>
        <p>There is no memory effect in lithium batteries compared with traditional batteries. </p>
      </div>

      <div class="final-question-item">
        <p>Q2. What is the material in the negative electrode?</p>
        <div class="fq-i">
          <input type="radio" value='A' id="sec-a-q2-i1" v-model="Q[1]"> 
          <label>a) Intercalated lithium compound</label>
        </div>
        <div class="fq-i">
          <input type="radio" value='B' id="sec-a-q2-i2" v-model="Q[1]"> 
          <label>b) Separator</label>
        </div>
        <div class="fq-i">
          <input type="radio" value='C' id="sec-a-q2-i3" v-model="Q[1]"> 
          <label>c) Electrolyte</label>
        </div>
        <div class="fq-i">
          <input type="radio" value='D' id="sec-a-q2-i4" v-model="Q[1]"> 
          <label>d) Intercalated carbon compound</label>
        </div>
      </div>
      <div class="feedback-div">
        <label>Feedback</label>
        <p>Li-ion batteries use an intercalated lithium compound as the material at the positive electrode. </p>
      </div>

      <div class="final-question-item">
        <p>Q3. What is the unnecessary selection criteria for picking the right anode of Lithium-Ion batteries?</p>
        <div class="fq-i">
          <input type="radio" value='A' id="sec-a-q3-i1" v-model="Q[2]"> 
          <label>a) The selected anode material and chemistry works well with the electrolyte and the cathode </label>
        </div>
        <div class="fq-i">
          <input type="radio" value='B' id="sec-a-q3-i2" v-model="Q[2]"> 
          <label>b) The solid electrolyte interface does not get very thick. It’s a layer that can form and will form as you charge and discharge. </label>
        </div>
        <div class="fq-i">
          <input type="radio" value='C' id="sec-a-q3-i3" v-model="Q[2]"> 
          <label>c) It doesn’t get very dense, because that will degrade the performance of the battery.</label>
        </div>
        <div class="fq-i">
          <input type="radio" value='D' id="sec-a-q3-i4" v-model="Q[2]"> 
          <label>d) It needs to be  Lithium compound.</label>
        </div>
      </div>
      <div class="feedback-div">
        <label>Feedback</label>
        <p>Generally, the negative electrode of a conventional lithium-ion cell is made from carbon. </p>
      </div>

      <div class="final-question-item">
        <p>Q4. Which of the statements about batteries is correct?</p>
        <div class="fq-i">
          <input type="radio" value='A' id="sec-b-q1-i1" v-model="Q[3]"> 
          <label>a) Batteries store electric charges or electrons, they have electricity inside them </label>
        </div>
        <div class="fq-i">
          <input type="radio" value='B' id="sec-b-q1-i2" v-model="Q[3]"> 
          <label>b) The battery itself is a huge electrical cell.</label>
        </div>
        <div class="fq-i">
          <input type="radio" value='C' id="sec-b-q1-i3" v-model="Q[3]"> 
          <label>c) Batteries are rechargeable because the electrochemical cell is rechargeable.</label>
        </div>
        <div class="fq-i">
          <input type="radio" value='D' id="sec-b-q1-i4" v-model="Q[3]"> 
          <label>d) Batteries are constant voltage providers. </label>
        </div>
      </div>
      <div class="feedback-div">
        <label>Feedback</label>
        <p>Effective recycling can reduce the carbon footprint of the production significantly! Fully charged batteries 
          discharge when they are left unused, and will lose effectiveness. It’s not only dangerous to the environment but can also 
          lead to an explosion depending on how the garbage is disposed. Keeping it in a cool place ensure that it is not subjected 
          to too hot or cold temperatures which damages the battery. </p>
      </div>

      <div class="final-question-item">
        <p>Q5. Which of the statements about Lithium-Ion batteries is wrong?</p>
        <div class="fq-i">
          <input type="radio" value='A' id="sec-b-q2-i1" v-model="Q[4]"> 
          <label>a) Lithium-Ion batteries won’t self-discharge when not in use.</label>
        </div>
        <div class="fq-i">
          <input type="radio" value='B' id="sec-b-q2-i2" v-model="Q[4]"> 
          <label>b)  Lithium-Ion batteries produce the same energy as old batteries but weigh approximately 35% lower.</label>
        </div>
        <div class="fq-i">
          <input type="radio" value='C' id="sec-b-q2-i3" v-model="Q[4]"> 
          <label>c) Lithium Ion batteries have a low self-discharge rate to retain their charge longer.</label>
        </div>
        <div class="fq-i">
          <input type="radio" value='D' id="sec-b-q2-i4" v-model="Q[4]"> 
          <label>d) A battery is made up of an anode, cathode, separator, electrolyte, and two current collectors (positive and negative).</label>
        </div>
      </div>
      <div class="feedback-div">
        <label>Feedback</label>
        <p>Self-discharge is a phenomenon in batteries in which internal chemical reactions reduce the stored charge of the battery without 
            any connection between the electrodes or any external circuit. The typical self-discharge is 2–3% per month. Lithium-Ion batteries 
            produce the same energy as old batteries but weigh approximately 35% lower. Li-ion self-discharges about 5 percent in the first 24 
            hours and then loses 1–2 percent per month; the protection circuit adds another 3 percent per month. A battery is made up of an anode,
             cathode, separator, electrolyte, and two current collectors (positive and negative). </p>
      </div>

      <div class="final-question-item">
        <p>Q6. Choose the correct process for each blank. </p>
        <p>While the battery is discharging: The ____ releases __  to the ___; generating a flow of ___ from one side to the other. </p>
        <div class="fq-i">
          <input type="radio" value='A' id="sec-c-q3-i1" v-model="Q[5]"> 
          <label>a) Anode; lithium ions; cathode; solution </label>
        </div>
        <div class="fq-i">
          <input type="radio" value='B' id="sec-c-q3-i2" v-model="Q[5]"> 
          <label>b) Cathode; lithium ions; Anode; electrons </label>
        </div>
        <div class="fq-i">
          <input type="radio" value='C' id="sec-c-q3-i3" v-model="Q[5]"> 
          <label>c) Anode; lithium; cathode; solution </label>
        </div>
        <div class="fq-i">
          <input type="radio" value='D' id="sec-c-q3-i4" v-model="Q[5]"> 
          <label>d) Anode; lithium ions; cathode; electrons </label>
        </div>
      </div>
      <div class="feedback-div">
        <label>Feedback</label>
        <p>During a discharge of electricity, the chemical on the anode releases electrons to the negative terminal 
            and ions in the electrolyte through what’s called an oxidation reaction. Meanwhile, at the positive terminal, 
            the cathode accepts electrons, completing the circuit for the flow of electrons. </p>
      </div>

      <div class="final-question-item">
        <p>Q7. Select all that apply.</p>
        <div class="fq-i">
          <input type="radio" value='A' id="sec-c-q1-i1"  v-model="Q[6]"> 
          <label>a) lNever store or charge battery pack inside your car in extreme temperatures, since extreme temperature could ignite fire.</label>
        </div>
        <div class="fq-i">
          <input type="radio" value='B' id="sec-c-q1-i2"  v-model="Q[6]"> 
          <label>b) If your phone case is at normal temperature and the battery is fully charged but still plugged in, there is still some risk of overcharging</label>
        </div>
        <div class="fq-i">
          <input type="radio" value='C' id="sec-c-q1-i3"  v-model="Q[6]"> 
          <label>c) If you have to store the battery over a longer period of time then drain the full battery beforehand. </label>
        </div>
        <div class="fq-i">
          <input type="radio" value='D' id="sec-c-q1-i4"  v-model="Q[6]"> 
          <label>d) If the dent in your battery is  really small, you can ignore it as the battery has strong metal cases.</label>
        </div>
      </div>
      <div class="feedback-div">
        <label>Feedback</label>
        <p>Subjecting battery to high temperatures make it more susceptible to fire. There is no overcharging in Li-ion batteries, 
            the only way for the Li-ion battery to overcharge is if the charging system malfunctions, and then the battery will heat 
            up while in the charger so you will know. If you don't plan to use your laptop for long period of time, you can extend the 
            life of your lithium ion laptop battery by storing it with a 50 percent charge. A fully discharged battery left for a long 
            period of time will lose its charging capacity. No matter how small the dent is, you should always have an expert look at it 
            otherwise it might explode immediately when connected with a charger if something is wrong. </p>
      </div>

      <div class="final-question-item">
        <p>Q8. Which of these is a wrong way to handle a Li-ion battery which you no longer need?</p>
        <div class="fq-i">
          <input type="radio" value='A' id="sec-c-q2-i1" v-model="Q[7]"> 
          <label>a) Put it in Recycling bin in the nearby collection spots in your city </label>
        </div>
        <div class="fq-i">
          <input type="radio" value='B' id="sec-c-q2-i2" v-model="Q[7]"> 
          <label>b) Charge it until 50% before storing it </label>
        </div>
        <div class="fq-i">
          <input type="radio" value='C' id="sec-c-q2-i3" v-model="Q[7]"> 
          <label>c) Throw it in the dustbin</label>
        </div>
        <div class="fq-i">
          <input type="radio" value='D' id="sec-c-q2-i4" v-model="Q[7]"> 
          <label>d) Keep it safely in a cool place</label>
        </div>
      </div>
      <div class="feedback-div">
        <label>Feedback</label>
        <p>Effective recycling can reduce the carbon footprint of the production significantly! Fully charged batteries 
            discharge when they are left unused, and will lose effectiveness. It’s not only dangerous to the environment 
            but can also lead to an explosion depending on how the garbage is disposed. Keeping it in a cool place ensure 
            that it is not subjected to too hot or cold temperatures which damages the battery. </p>
      </div>

      <div class="final-question-item">
        <p>Q9. Choose the suitable heat for keep the phone battery stay longer</p>
        <div class="fq-i">
          <input type="radio" value='A' id="sec-c-q3-i1" v-model="Q[8]"> 
          <label>a) -10 ºC /  14 ºF </label>
        </div>
        <div class="fq-i"> 
          <input type="radio" value='B' id="sec-c-q3-i2" v-model="Q[8]"> 
          <label>b) 0 ºC / 32 ºF </label>
        </div>
        <div class="fq-i">
          <input type="radio" value='C' id="sec-c-q3-i3" v-model="Q[8]"> 
          <label>c) 20 ºC /  68 ºF </label>
        </div>
        <div class="fq-i">
          <input type="radio" value='D' id="sec-c-q3-i4" v-model="Q[8]"> 
          <label>d) 55  ºC / 131º F </label>
        </div>
      </div>
      <div class="feedback-div">
        <label>Feedback</label>
        <p>Keeping it in a cool place ensure that it is not subjected to too hot or cold temperatures which damages the battery. </p>
      </div>

    </div>
    <div class="final-button">
        <router-link to="/cong"> <button  class="final-btn">Next</button></router-link>
      </div>

  </div>
</template>

<style scoped>
.final-question-area {
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: flex-start;
}

.final-quiz {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.final-question-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
}

.final-question-item p{
  font-weight: bold;
  text-align: left;
}

.fq-i {
  display: flex;
  align-items: flex-start;
}

.fq-i label {
  text-align: left;
}

.final-btn {
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
.feedback-div {
  margin-top: 20px;
  background-color: #4A4F61 ;
  padding: 12px 18px 12px 18px;
  border-radius: 8px;
  margin-bottom: 60px;
  text-align: left;
}

.feedback-div p{
  text-align: left;
}

.feedback-div label {
  font-weight: bold;
}

.fq-score-div {
  font-weight: bold;
  color: #FFC107;
  font-size: 30px;
  display: flex;
  flex-direction: column;
}
</style>

<script>
import RequestManager from '../utils/RequestManager'

export default {
  name: 'CheckPoint',
  components: {

  },
  data: () =>({
    username: '',
    section: '',
    userid: '',
    score: '',
    Q:new Array(9)
  }),
  methods: {
    
  },
  created: function () {
    let userData = JSON.parse(localStorage.userData);
    console.log(userData)
    this.userid = userData._id;
    this.username = userData.username;
    this.section = userData.sectionIdx;
    this.score = userData.Score['after']
    this.Q = userData.Answer['after']
    console.log(this.section)
  }
}
</script>
