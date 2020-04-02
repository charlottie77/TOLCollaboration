function getLS (key){
  return JSON.parse(localStorage.getItem(key))
}
function setLS (key,value){
  localStorage.setItem(key,JSON.stringify(value))
}
module.exports = {getLS,setLS}