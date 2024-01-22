import {Trip} from '../models/trips.js'
import {Activity} from '../models/activities.js'

function newActivity(req,res){

  Trip.findById(req.params.tripId)
  .then(trip=>{
        res.render('activities/new',{
      trip:trip,
      title: 'Add Activity'
    })
  })
  .catch(err=>{

    console.log(err)
    res.redirect('/trips')
  })
}

function create(req,res){
  console.log(`Adding activity to ${req.params.tripId}`)
  Trip.findById(req.params.tripId)
  .then(trip=>{
    Activity.create(req.body)
    .then(activity=>{
      trip.activities.push(activity)
      trip.save()
      .then(()=>{
        console.log("The activity is at: ")
        console.log(activity.venue)
        res.redirect(`/trips/${req.params.tripId}`)
      })
      .catch(err=>{
          console.log(err)
          res.redirect('/trips')
      })
    })
  })
  .catch(err=>{
    console.log(err)
    res.redirect('/trips')
  })
}

export{
  newActivity as new,
  create
}