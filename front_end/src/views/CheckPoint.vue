<template>
  <div class="check-point">
     <div class="title">
      <p>Check Point</p>
    </div>
    <div class="section-a">
      <div class="section-a-q1">
        <p>Q1. What are the benefits for using lithium ion batteries?</p>
        <div>
          <input type="radio" id="sec-a-q1-i1"> 
          <label>a) low energy density</label>
        </div>
        <div>
          <input type="radio" id="sec-a-q1-i2"> 
          <label>b) no memory effect</label>
        </div>
        <div>
          <input type="radio" id="sec-a-q1-i3"> 
          <label>c) a safety hazard</label>
        </div>
        <div>
          <input type="radio" id="sec-a-q1-i4"> 
          <label>d) low shelf lift</label>
        </div>
      </div>
      <div class="section-a-q2">
        <p>Q2. What is the material in the negative electrode?</p>
        <div>
          <input type="radio" id="sec-a-q2-i1"> 
          <label>a) Intercalated lithium compound</label>
        </div>
        <div>
          <input type="radio" id="sec-a-q2-i2"> 
          <label>b) Separator</label>
        </div>
        <div>
          <input type="radio" id="sec-a-q2-i3"> 
          <label>c) Electrolyte</label>
        </div>
        <div>
          <input type="radio" id="sec-a-q2-i4"> 
          <label>d) Intercalated carbon compound</label>
        </div>
      </div>
      <div class="section-a-q3">
        <p>Q3. What is the unnecessary selection criteria for picking the right anode of Lithium-Ion batteries?</p>
        <div>
          <input type="radio" id="sec-a-q3-i1"> 
          <label>a) The selected anode material and chemistry works well with the electrolyte and the cathode </label>
        </div>
        <div>
          <input type="radio" id="sec-a-q3-i2"> 
          <label>b) The solid electrolyte interface does not get very thick. It’s a layer that can form and will form as you charge and discharge. </label>
        </div>
        <div>
          <input type="radio" id="sec-a-q3-i3"> 
          <label>c) It doesn’t get very dense, because that will degrade the performance of the battery.</label>
        </div>
        <div>
          <input type="radio" id="sec-a-q3-i4"> 
          <label>d) It needs to be  Lithium compound.</label>
        </div>
      </div>
    </div>
    <div class="check-point-button">
      <router-link to="/check-answer"> <button>Done</button></router-link>
    </div>
  </div>
</template>
