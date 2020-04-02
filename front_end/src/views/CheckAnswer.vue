<template>
  <div class="check-answer">
     <div class="title">
      <p class="h1-title" v-if="score >= 2">Good job! You Learned Well!</p>
      <p class="h1-title" v-if="score < 2">Let's try again</p>
    </div>
    <div class="ca-score-div">
      <label>{{score}}/3</label>
      <label>your pts</label>
    </div>

     <div class="check-a" v-if="this.section == 'A'">
        <div class="ca-outer-i">
          <div class="section-a-q1 ca-i">
            <p>Q1. What are the benefits for using lithium ion batteries?</p>
            <div class="cai-i">
              <input type="radio" value='A' id="sec-a-q1-i1" v-model="Q1"> 
              <label>a) low energy density</label>
            </div>
            <div class="cai-i">
              <input type="radio" value='B' id="sec-a-q1-i2" v-model="Q1"> 
              <label class="correct">Corret: b) no memory effect</label>
            </div>
            <div class="cai-i">
              <input type="radio" value='C' id="sec-a-q1-i3" v-model="Q1"> 
              <label>c) a safety hazard</label>
            </div>
            <div class="cai-i">
              <input type="radio" value='D' id="sec-a-q1-i4" v-model="Q1"> 
              <label> d) low shelf lift</label>
            </div>
          </div>
          <div class="feedback-div">
            <label>Feedback</label>
            <p>There is no memory effect in lithium batteries compared with traditional batteries. </p>
          </div>
        </div>
        <div class="ca-outer-i">
          <div class="section-a-q2 ca-i">
            <p>Q2. What is the material in the negative electrode?</p>
            <div class="cai-i">
              <input type="radio" value='A' id="sec-a-q2-i1" v-model="Q2"> 
              <label>a) Intercalated lithium compound</label>
            </div>
            <div class="cai-i">
              <input type="radio" value='B' id="sec-a-q2-i2" v-model="Q2"> 
              <label>b) Separator</label>
            </div>
            <div class="cai-i">
              <input type="radio" value='C' id="sec-a-q2-i3" v-model="Q2"> 
              <label>c) Electrolyte</label>
            </div>
            <div class="cai-i">
              <input type="radio" value='D' id="sec-a-q2-i4" v-model="Q2"> 
              <label class="correct">Corret: d) Intercalated carbon compound</label>
            </div>
          </div>
          <div class="feedback-div">
            <label>Feedback</label>
            <p>Li-ion batteries use an intercalated lithium compound as the material at the positive electrode.</p>
          </div>
        </div>
        <div class="ca-outer-i">
          <div class="section-a-q3 ca-i">
            <p>Q3. What is the unnecessary selection criteria for picking the right anode of Lithium-Ion batteries?</p>
            <div class="cai-i">
              <input type="radio" value='A' id="sec-a-q3-i1" v-model="Q3"> 
              <label>a) The selected anode material and chemistry works well with the electrolyte and the cathode </label>
            </div>
            <div class="cai-i">
              <input type="radio" value='B' id="sec-a-q3-i2" v-model="Q3"> 
              <label>b) The solid electrolyte interface does not get very thick. It’s a layer that can form and will form as you charge and discharge. </label>
            </div>
            <div class="cai-i">
              <input type="radio" value='C' id="sec-a-q3-i3" v-model="Q3"> 
              <label>c) It doesn’t get very dense, because that will degrade the performance of the battery.</label>
            </div>
            <div class="cai-i">
              <input type="radio" value='D' id="sec-a-q3-i4" v-model="Q3"> 
              <label class="correct">Corret: d) It needs to be  Lithium compound.</label>
            </div>
          </div>
          <div class="feedback-div">
            <label>Feedback</label>
            <p>Generally, the negative electrode of a conventional lithium-ion cell is made from carbon. </p>
          </div>
        </div>
    </div>
    <div class="check-b" v-if="this.section == 'B'">
      <div class="ca-outer-i">
        <div class="section-b-q1 ca-i">
          <p>Q1. Which of the statements about batteries is correct?</p>
          <div class="cai-i">
            <input type="radio" value='A' id="sec-b-q1-i1" v-model="Q1"> 
            <label>a) Batteries store electric charges or electrons, they have electricity inside them </label>
          </div>
          <div class="cai-i">
            <input type="radio" value='B' id="sec-b-q1-i2" v-model="Q1"> 
            <label>b) The battery itself is a huge electrical cell.</label>
          </div>
          <div class="cai-i">
            <input type="radio" value='C' id="sec-b-q1-i3" v-model="Q1"> 
            <label>c) Batteries are rechargeable because the electrochemical cell is rechargeable.</label>
          </div>
          <div class="cai-i">
            <input type="radio" value='D' id="sec-b-q1-i4" v-model="Q1"> 
            <label class="correct">Corret: d) Batteries are constant voltage providers. </label>
          </div>
        </div>
        <div class="feedback-div">
          <label>Feedback</label>
          <p>Effective recycling can reduce the carbon footprint of the production significantly! Fully charged batteries 
          discharge when they are left unused, and will lose effectiveness. It’s not only dangerous to the environment but can also 
          lead to an explosion depending on how the garbage is disposed. Keeping it in a cool place ensure that it is not subjected 
          to too hot or cold temperatures which damages the battery. </p>
        </div>
      </div>
      <div class="ca-outer-i">
        <div class="section-b-q2 ca-i">
          <p>Q2. Which of the statements about Lithium-Ion batteries is wrong?</p>
          <div class="cai-i">
            <input type="radio" value='A' id="sec-b-q2-i1" v-model="Q2"> 
            <label class="correct">Corret: a) Lithium-Ion batteries won’t self-discharge when not in use.</label>
          </div>
          <div class="cai-i">
            <input type="radio" value='B' id="sec-b-q2-i2" v-model="Q2"> 
            <label>b)  Lithium-Ion batteries produce the same energy as old batteries but weigh approximately 35% lower.</label>
          </div>
          <div class="cai-i">
            <input type="radio" value='C' id="sec-b-q2-i3" v-model="Q2"> 
            <label>c) Lithium Ion batteries have a low self-discharge rate to retain their charge longer.</label>
          </div>
          <div class="cai-i">
            <input type="radio" value='D' id="sec-b-q2-i4" v-model="Q2"> 
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
      </div>
      <div class="ca-outer-i">
        <div class="section-c-q3 ca-i">
          <p>Q3. Choose the correct process for each blank. </p>
          <p>While the battery is discharging: The ____ releases __  to the ___; generating a flow of ___ from one side to the other. </p>
          <div class="cai-i">
            <input type="radio" value='A' id="sec-c-q3-i1" v-model="Q3"> 
            <label>a) Anode; lithium ions; cathode; solution </label>
          </div>
          <div class="cai-i">
            <input type="radio" value='B' id="sec-c-q3-i2" v-model="Q3"> 
            <label>b) Cathode; lithium ions; Anode; electrons </label>
          </div>
          <div class="cai-i">
            <input type="radio" value='C' id="sec-c-q3-i3" v-model="Q3"> 
            <label>c) Anode; lithium; cathode; solution </label>
          </div>
          <div class="cai-i">
            <input type="radio" value='D' id="sec-c-q3-i4" v-model="Q3"> 
            <label class="correct">Corret: d) Anode; lithium ions; cathode; electrons </label>
          </div>
        </div>
        <div class="feedback-div">
          <label>Feedback</label>
          <p>During a discharge of electricity, the chemical on the anode releases electrons to the negative terminal 
            and ions in the electrolyte through what’s called an oxidation reaction. Meanwhile, at the positive terminal, 
            the cathode accepts electrons, completing the circuit for the flow of electrons. </p>
        </div>
      </div>
    </div>
    <div class="check-c" v-if="this.section == 'C'">
      <div class="ca-outer-i">
        <div class="section-c-q1 ca-i">
          <p>Q1. Select all that apply.</p>
          <div class="cai-i"> 
            <input type="radio" value='A' id="sec-c-q1-i1"  v-model="Q1"> 
            <label>Corret: a) lNever store or charge battery pack inside your car in extreme temperatures, since extreme temperature could ignite fire.</label>
          </div>
          <div class="cai-i">
            <input type="radio" value='B' id="sec-c-q1-i2"  v-model="Q1"> 
            <label>b) If your phone case is at normal temperature and the battery is fully charged but still plugged in, there is still some risk of overcharging</label>
          </div>
          <div class="cai-i">
            <input type="radio" value='C' id="sec-c-q1-i3"  v-model="Q1"> 
            <label>c) If you have to store the battery over a longer period of time then drain the full battery beforehand. </label>
          </div>
          <div class="cai-i">
            <input type="radio" value='D' id="sec-c-q1-i4"  v-model="Q1"> 
            <label>d) If the dent in your battery is  really small, you can ignore it as the battery has strong metal cases.</label>
          </div>
        </div>
        <div class="feedback-div f-c-q1">
          <label>Feedback</label>
          <p> Subjecting battery to high temperatures make it more susceptible to fire. There is no overcharging in Li-ion batteries, 
            the only way for the Li-ion battery to overcharge is if the charging system malfunctions, and then the battery will heat 
            up while in the charger so you will know. If you don't plan to use your laptop for long period of time, you can extend the 
            life of your lithium ion laptop battery by storing it with a 50 percent charge. A fully discharged battery left for a long 
            period of time will lose its charging capacity. No matter how small the dent is, you should always have an expert look at it 
            otherwise it might explode immediately when connected with a charger if something is wrong. </p>
        </div>
      </div>
      <div class="ca-outer-i">
        <div class="section-c-q2 ca-i">
          <p>Q2. Which of these is a wrong way to handle a Li-ion battery which you no longer need?</p>
          <div class="cai-i">
            <input type="radio" value='A' id="sec-c-q2-i1" v-model="Q2"> 
            <label class="correct">a) Put it in Recycling bin in the nearby collection spots in your city </label>
          </div>
          <div class="cai-i">
            <input type="radio" value='B' id="sec-c-q2-i2" v-model="Q2"> 
            <label>b) Charge it until 50% before storing it </label>
          </div>
          <div class="cai-i">
            <input type="radio" value='C' id="sec-c-q2-i3" v-model="Q2"> 
            <label class="correct">Corret: c) Throw it in the dustbin</label>
          </div>
          <div class="cai-i">
            <input type="radio" value='D' id="sec-c-q2-i4" v-model="Q2"> 
            <label>d) Keep it safely in a cool place</label>
          </div>
        </div>
        <div class="feedback-div">
          <label>Feedback</label>
          <p> Effective recycling can reduce the carbon footprint of the production significantly! Fully charged batteries 
            discharge when they are left unused, and will lose effectiveness. It’s not only dangerous to the environment 
            but can also lead to an explosion depending on how the garbage is disposed. Keeping it in a cool place ensure 
            that it is not subjected to too hot or cold temperatures which damages the battery. </p>
        </div>
      </div>
      <div class="ca-outer-i">
        <div class="section-c-q3 ca-i">
          <p>Q3. Choose the suitable heat for keep the phone battery stay longer</p>
          <div class="cai-i">
            <input type="radio" value='A' id="sec-c-q3-i1" v-model="Q3"> 
            <label>a) -10 ºC /  14 ºF </label>
          </div>
          <div class="cai-i">
            <input type="radio" value='B' id="sec-c-q3-i2" v-model="Q3"> 
            <label>b) 0 ºC / 32 ºF </label>
          </div>
          <div class="cai-i">
            <input type="radio" value='C' id="sec-c-q3-i3" v-model="Q3"> 
            <label class="correct">Corret: c) 20 ºC /  68 ºF </label>
          </div>
          <div class="cai-i"> 
            <input type="radio" value='D' id="sec-c-q3-i4" v-model="Q3"> 
            <label>d) 55  ºC / 131º F </label>
          </div>
        </div>
        <div class="feedback-div">
          <label>Feedback</label>
          <p>Keeping it in a cool place ensure that it is not subjected to too hot or cold temperatures which damages the battery. </p>
        </div>
      </div>


    </div>

    <div class="check-point-button" v-if="score >= 2">
      <router-link to="/doc"> <button class="ca-btn">Next</button></router-link>
    </div>
    <div class="check-point-button" v-if="score < 2">
      <router-link to="/video"> <button class="ca-btn">Next</button></router-link>
    </div>
  </div>
</template>

<style scoped>
.check-answer{
  background-color: #1F2437;
}
.feedback-div {
    margin-top: 20px;
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
  .ca-score-div {
    display: flex;
    flex-direction: column;
  }

  .ca-score-div label {
    font-weight: bold;
    color: #FFC107;
    font-size: 30px;
  }

  .title {
    padding-top: 30px;
  }

  .ca-i {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .ca-i p{
    font-weight: bold;
    text-align: left;
  }
  .ca-outer-i {
    margin-top: 40px;
    width: 50%;
  }
 
  .check-a, .check-b, .check-c {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .cai-i {
    display: flex;
  }

  .cai-i label {
    text-align: left;
  }
  .ca-btn {
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
    margin-bottom: 70px;
  }

  .correct {
    font-weight: bold;
    color: #FFC107;
  }
</style>

<script>
import {getLS,setLS} from '../utils/LocalStorageManager'

export default {
  name: 'GuideQuestion',
  components: {

  },
  data: () =>({
    username: '',
    section: '',
    userid: '',
    score:0,
    gq_picked: '',
    Q1:'',
    Q2:'',
    Q3:''
  }),
  methods: {
    
  },
  created: function () {
    let userData = JSON.parse(localStorage.userData);
    this.userid = userData._id;
    this.username = userData.username;
    this.section = userData.sectionIdx;
    let {Q1,Q2,Q3} = getLS('checkPointAnswer') ? getLS('checkPointAnswer') : {Q1:'',Q2:'',Q3:''}
    this.score = getLS('checkPointScore') ? getLS('checkPointScore') : -1
    this.Q1 = Q1
    this.Q2 = Q2
    this.Q3 = Q3
    console.log(this.section)
  }
}
</script>
