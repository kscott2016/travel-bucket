import mongoose from 'mongoose'

const Schema = mongoose.Schema

const activitiesSchema = new Schema({
  name: String,
  type: String,
  venue: String
}, {
  timestamps: true
})

const Activities = mongoose.model('Trip', activitiesSchema)

export {
  Activities
}