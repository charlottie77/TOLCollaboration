<template>
  <div class="final-quiz">
    <div class="title">
        <p class="h1-title">Final Quiz</p>
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

    </div>
    <div class="final-button">
      <button  class="final-btn" @click="submitFinalQuiz">Next</button>
        <!-- <router-link to="/report"> <button  class="final-btn">Next</button></router-link> -->
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
  margin-bottom: 30px;
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
</style>

<script>
import RM from '../utils/RequestManager'
import {setLS,getLS} from '../utils/LocalStorageManager'
const rightAnswer = 'BDDDADACC'.split('')
export default {
  name: 'CheckPoint',
  components: {

  },
  data: () =>({
    username: '',
    section: '',
    userid: '',
    Q:new Array(9)
    
  }),
  methods: {
    submitFinalQuiz: async function() {
      if (this.Q.includes(undefined)) return alert('Please finish all the questions.')
      let score = 0
      for(let i = 0; i < 9; i++){
        if(this.Q[i] == rightAnswer[i]) score++
      }
      setLS('finalQuizScore',score)
      setLS('finalQuizAnswer',this.Q)
      let result = await Promise.all([
        RM.UserSetAnswer('after',this.Q,this.userid),
        RM.UserSetScore('after',score,this.userid)
      ]) 
      result = await RM.UserLogin(getLS('userData').email)
      console.log(result.data)
      setLS('userData',result.data.user)
      this.$router.push({path:'/report'})
    }
  },
  created: function () {
    let userData = JSON.parse(localStorage.userData);
    this.userid = userData._id;
    this.username = userData.username;
    this.section = userData.sectionIdx;
    this.Q = userData.Answer['after'] ? userData.Answer['after'] : Array(9)
    console.log(this.section)
  }
}
</script>
