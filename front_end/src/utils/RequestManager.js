const axios = require('axios')
const baseUrl = 'http://localhost:3000/api'

async function UserRegister(username,email){
  try {
    let result = await axios.post(`${baseUrl}/user/regist`,{username,email})
    return result
  } catch (e) {
    console.warn(e)
    return null
  }
}
async function UserLogin(email){
  try {
    let result = await axios.post(`${baseUrl}/user/login`,{email})
    return result
  } catch (e) {
    console.warn(e)
    return null
  }
}
async function UserSetScore(stage,score,userId){
  try {
    let result = await axios.put(`${baseUrl}/score/${stage}`,{userId,score})
    return result
  } catch (e) {
    console.warn(e)
    return null
  }
}
async function UserSetAnswer(stage,answer,userId){
  try {
    let result = await axios.put(`${baseUrl}/answer/${stage}`,{answer,userId})
    return result
  } catch (e) {
    console.warn(e)
    return null
  }
}
async function UserGetScore(userId){
  try {
    let result = await axios.get(`${baseUrl}/score/${userId}`)
    return result
  } catch (e) {
    console.warn(e)
    return null
  }
}
async function UserGetAnswer(userId){
  try {
    let result = await axios.get(`${baseUrl}/answer/${userId}`)
    return result
  } catch (e) {
    console.warn(e)
    return null
  }
}
module.exports = {UserRegister, UserLogin, UserSetScore, UserSetAnswer, UserGetScore, UserGetAnswer}
