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
  Trip.findById(req.params.tripId)
  .populate('activities')
  .then(trip=>{
    Activity.create(req.body)
    .then(activity=>{
      trip.activities.push(activity)
      trip.save()
      .then(()=>{
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

  Trip.findById(req.params.tripId)
  .then(trip=>{
    Activity.findById(req.params.activityId)
    .then(activity=>{ 
    res.render('activities/edit',{
        activity:activity,
        trip:trip,
        title: `Edit ${activity.name}`
    })
  })
  })
}

function update(req,res){

  Trip.findById(req.params.tripId)
  .then(trip=>{

    Activity.findByIdAndUpdate(req.params.activityId,req.body)
    .then(activity=>{
      res.redirect(`/trips/${trip._id}`)
    })
    .catch(err=>{
      console.log(err)
      res.redirect(`/trips/${trip._id}`)
    })
  })
  .catch(err=>{
    console.log(err)
    res.redirect(`/trips/${trip._id}`)
  })
}

function show(req,res){

  Trip.findById(req.params.tripId)
  .then(trip=> {
  Activity.findById(req.params.activityId)
  .then(activity=>{
    res.render('activities/show',{
      title:req.params.name,
      trip:trip,
      activity:activity
    })
  })
  })
  .catch (err=>{
    console.log(err)
    res.redirect(`/trips/${trip._id}`)
  })
}

function deleteActivity(req,res){

  Trip.findById(req.params.tripId)
  .then(trip=>{
    Activity.findByIdAndDelete(req.params.activityId)
    .then(activity=>{
      res.redirect(`/trips/${trip._id}`)
    })
  })
  .catch(err=>{
    console.log(err)
    res.redirect(`/trips/${trip._id}`)
  })
}

export{
  newActivity as new,
  create,
  edit,
  update,
  show,
  deleteActivity as delete
}