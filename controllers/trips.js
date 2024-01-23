import {Trip} from '../models/trips.js'
import {Activity} from '../models/activities.js'


function index(req,res){

  Trip.find({plannedBy: req.user.profile._id}).sort("tripStart")
  .then(trips=>{
    res.render('trips/index',{
      trips,
      title: 'Your trips'
    })
  })
  .catch(err=>{
    console.log(err)
    res.redirect('/')
  })
}

function newTrip(req,res){
  res.render('trips/new',{
    title:"Add Trip",
    defaultImg:"https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2022/3/24/1/shutterstock_palm-full-coconuts-on-maldivian-beach575497081.jpg.rend.hgtvcom.1280.853.suffix/1648128375983.jpeg"
  })
}

function create(req,res){
  req.body.plannedBy = req.user.profile._id
  
  Trip.create(req.body)
  .then(trip=>{
    res.redirect('/trips')
  })
  .catch(err=>{
    console.log(err)
    res.redirect('/trips/new')
  })
}

function show(req,res){

  Trip.findById(req.params.tripId)
  .populate('activities')
  .then(trip=> {
   Activity.find({_id:{$nin:trip.activities}})
   .then(activity=>{
    res.render('trips/show',{
      title:req.params.name,
      trip:trip,
      activity:activity
    })
  })
  })
  .catch (err=>{
    console.log(err)
    res.redirect('/')
  })
}

function edit (req,res){

  Trip.findById(req.params.tripId)
  .then(trip=>{
    res.render('trips/edit',{
      trip:trip,
      title: `Edit ${trip.name}`
    })
  })
}

function update (req, res){

  Trip.findByIdAndUpdate(req.params.tripId,req.body)
  .then(trip=>{

    res.redirect(`/trips/${trip._id}`)
  })
  .catch(err=>{
    console.log(err)
    res.redirect(`/trips/${trip._id}`)
  })
}

function deleteTrip(req,res){

  Trip.findByIdAndDelete(req.params.tripId)
  .then(trip=>{
    res.redirect('/trips')
  })
  .catch(err=>{
    console.log(err)
    res.redirect('/trips')
  })

  
}


export{
  index,
  newTrip as new,
  create,
  show,
  edit,
  update,
  deleteTrip as delete
}