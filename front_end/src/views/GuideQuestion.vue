<template>
  <div class="guide-question">
    <div class="section-a">
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
            <input type="radio" id="a1"> 
            <label></label>
            <label>Current</label>
          </div>
          <div>
            <input type="radio" id="a2"> 
            <label></label>
            <label>Metal</label>
          </div>
          <div>
            <input type="radio" id="a3"> 
            <label></label>
            <label>Chemical Solution</label>
          </div>
          <div>
            <input type="radio" id="a4"> 
            <label></label>
            <label>Cotton</label>
          </div>
        </div>
        <router-link to="/guide-answer-a"><button>Done</button></router-link>
      </div>
    </div>
     
     
  </div>
</template>
