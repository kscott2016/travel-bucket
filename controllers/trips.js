import {Trip} from '../models/trips.js'

function index(req,res){

  Trip.find({})
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

}


export{
  index,
  newTrip as new
}