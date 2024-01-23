import mongoose from 'mongoose'

const Schema = mongoose.Schema

const tripSchema = new Schema({
  name: String,
  city: String,
  tripStart: {
    type: Date,
    default: function() {
      let currentDate = new Date()
      let currentDay= currentDate.getDate()
      currentDate.setDate(currentDay+1)
      return currentDate.toISOString().slice(0,16)
    }
  },
  tripEnd: {
    type: Date,
    default: function() {
      let currentDate = new Date()
      let currentDay= currentDate.getDate()
      currentDate.setDate(currentDay+3)
      return currentDate.toISOString().slice(0,16)
    }
  },
  imgUrl:{ 
    type:String,
    default:"https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2022/3/24/1/shutterstock_palm-full-coconuts-on-maldivian-beach575497081.jpg.rend.hgtvcom.1280.853.suffix/1648128375983.jpeg"
  },
  activities: [{type: Schema.Types.ObjectId, ref: "Activity"}],
  plannedBy: {type: Schema.Types.ObjectId, ref: "Profile"}
}, {
  timestamps: true
})

const Trip = mongoose.model('Trip', tripSchema)

export {
  Trip
}