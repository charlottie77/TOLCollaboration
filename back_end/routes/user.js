const express = require('express')
const router = express.Router()
const {UserModel,GroupModel} = require('../models')

const section = ['A','B','C']
const stages = ['pre','before','after']

async function fetchOneGroup(userId){
  //check if there is any group not full
  try {
    let result = await GroupModel.findOne({"members.2":{$exists:false}})
    if(result === null){
      let group = new GroupModel({members:[userId]})
      await group.save()
      return group
    }else{
      result.members.push(userId)
      result.save()
      return result
    }
  } catch (e) {
    console.error(e.message)
    return null
  }
}

router.post('/regist',async (req,res,next)=>{
  let {username,email} = req.body
  let user = new UserModel({username,email})
  let group = await fetchOneGroup(user._id)
  if (group === null) {
    console.error("failed to fetch one group")
    return res.sendStatus(500)
  }
  user.groupId = group._id
  user.sectionIdx = section[group.members.length-1]
  try{
    await user.save()
    res.send({error:false,user})
  }catch(error){
    console.error('failed to save user with error message: ', error.message)
    res.sendStatus(500)
  }
})

router.post('/login',async (req,res,next)=>{
  let {email} = req.body
  try {
    let result = await UserModel.findOne({email}).exec()
    if(result !== null) {
      res.send({error:false,user:result})
    }else{
      res.send({error:true,msg:'user not exist.'})
    }
  } catch (e) {
    res.send({error:true,msg:e.message})
  }
})

router.put('/score/:stage', async (req,res,next)=>{
  let {stage} = req.params
  let {userId,score} = req.body
  if(!stages.includes(stage)) return res.send({error:true, msg:'stage not exist'})
  //create update object
  let updateObj = {}
  updateObj['Score.'+stage] = score
  try {
    await UserModel.findByIdAndUpdate(userId,updateObj).exec()
    return res.sendStatus(200)
  } catch (e) {
    console.error(`Failed to update ${stage} score for user: ${userId} with error message: ${e.message}`)
    return res.sendStatus(500)
  }
})

router.put('/answer/:stage', async (req,res,next)=>{
  let {stage} = req.params
  let {userId,answer} = req.body
  if(!stages.includes(stage)) return res.send({error:true, msg:'stage not exist'})
  //create update object
  let updateObj = {}
  updateObj['Answer.'+stage] = JSON.stringify(answer)
  try {
    await UserModel.findByIdAndUpdate(userId,updateObj).exec()
    return res.sendStatus(200)
  } catch (e) {
    console.error(`Failed to update ${stage} answer for user: ${userId} with error message: ${e.message}`)
    return res.sendStatus(500)
  }
})

router.get('/answer/:userId', async (req,res,next)=>{
  let {userId} = req.params
  try {
    let user = UserModel.findById(userId).exec()
    let answer = user.answer ? user.answer : {}
    return res.send({error:false, answer})
  } catch (e) {
    console.error(`Failed to get answer for user: ${userId} with error message: ${e.message}`)
    return res.sendStatus(500)
  }
})

router.get('/score/:userId', async (req,res,next)=>{
  let {userId} = req.params
  try {
    let user = UserModel.findById(userId).exec()
    let score = user.score ? user.score : {}
    return res.send({error:false, score})
  } catch (e) {
    console.error(`Failed to get score for user: ${userId} with error message: ${e.message}`)
    return res.sendStatus(500)
  }
})
module.exports = router
