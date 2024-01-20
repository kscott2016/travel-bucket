import mongoose from 'mongoose'

const Schema = mongoose.Schema

const tripSchema = new Schema({
  name: String,
  city: String,
  tripStart: Date,
  tripEnd: Date,
  imgUrl: String,
  activities: [{type: Schema.Types.ObjectId, ref: "Activities"}]
}, {
  timestamps: true
})

const Trip = mongoose.model('Trip', tripSchema)

export {
  Trip
}