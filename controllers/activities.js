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
  .populate('activities')
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

function edit(req,res){

  Activity.findById(req.params.activityId)
  .then(activity=>{ 
   res.render('activities/edit',{
      activity:activity,
      title: `Edit ${activity.name}`
   })
  })
}

function deleteActivity(req,res){

}

export{
  newActivity as new,
  create,
  edit,
  deleteActivity as delete
}