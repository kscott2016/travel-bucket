import {Trip} from '../models/trips.js'
import {Activity} from '../models/activities.js'

function newActivity(req,res){

  console.log("REACHED NEW ACTIVITY")
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

}

export{
  newActivity as new,
  create
}