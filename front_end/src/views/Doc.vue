<template>
  <div class="doc">
     <div class="title">
      <p class="h1-title">Shared Learning Doc</p>
    </div>
    <div class="d-prompt">
      <label>Every one is IMPORTANT!</label>
      <p>Share what you learned with other teammates! They have no idea about <span>your part</span> yet.</p>
    </div>
    <div class="d-link">
      <p>Please go to this link: </p>
      <div>
        <a href="https://drive.google.com/drive/folders/1fYZ0vCwa2MTwFpfV6jFIwsNkEZdsktK_?usp=sharing">drive.google.com/drive/folders/1fYZ0vCwa2MTwFpfV6jFIwsNkEZdsktK_?usp=sharing</a>
      </div>
    </div>
   
    <!-- <div class="doc-button">
      <router-link to=""> <button>Next</button></router-link>
     
    </div> -->
  </div>
</template>

<style scoped>
.doc {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
}

.d-prompt {
  background-color: #4E53C2 ;
  border-radius: 10px;
  padding: 18px;
  width: 750px ;
  margin-top: 60px;
}

.d-prompt label {
  font-weight: bold;
  font-size: 33px;
}

.d-prompt p{
  font-size: 24px;
}

.d-prompt p span {
  color: #FFC107 ;
  font-size: 24px;
}

.d-link {
  margin-top: 30px;
}

.d-link div{
  background-color: #4A4F61;
  border-radius: 10px;
  padding: 18px;
}

.d-link div a{
  color: #fff;
}

.doc-button button {
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
