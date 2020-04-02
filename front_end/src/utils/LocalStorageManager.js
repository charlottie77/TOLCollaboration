function getLS (key){
  return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : null
}
function setLS (key,value){
  localStorage.setItem(key,JSON.stringify(value))
}
module.exports = {getLS,setLS}