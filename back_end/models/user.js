const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: String,
  email: String,
  sectionIdx: String,
  groupId: {type: Schema.Types.ObjectId, ref: 'Group'},
  Answer:{
    _pre_: String,
    _before_: String,
    _after_ : String
  },
  Score: {
    _before_ : Number,
    _after_ : Number
  }
},{timestamps:true})

module.exports = mongoose.model('User',userSchema)
