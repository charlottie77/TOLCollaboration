<template>
  <div class="video">
     <div class="title">
      <p>Video of Section A</p>
    </div>
    <div>
      <iframe width="420" height="315"
        src="https://www.youtube.com/embed/rUcC8VUpl4A">
      </iframe>
    </div>
    <div class="start-button">
      <label>You are assigned to Section A</label>
      <router-link to="/check-point"> <button>Next</button></router-link>
     
    </div>
  </div>
</template>
