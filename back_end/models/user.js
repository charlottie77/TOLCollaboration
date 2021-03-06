const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: String,
  email: String,
  sectionIdx: String,
  groupId: {type: Schema.Types.ObjectId, ref: 'Group'},
  Answer:{
    pre: Object,
    before: Object,
    after: Object
  },
  Score: {
    before : Number,
    after : Number,
    group: Number
  }
},{timestamps:true})

module.exports = mongoose.model('User',userSchema)
