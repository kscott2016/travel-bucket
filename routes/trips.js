import { Router } from 'express'
import * as tripsCtrl from '../controllers/trips.js'
import * as activitiesCtrl from '../controllers/activities.js'
import { isLoggedIn } from "../middleware/middleware.js"

const router= Router()

//GET localhost:3000/trips
router.get('/',isLoggedIn,tripsCtrl.index)

//GET localhost:3000/trips/new
router.get('/new',isLoggedIn,tripsCtrl.new)

//POST localhost:3000/trips
router.post('/',isLoggedIn,tripsCtrl.create)

//GET localhost:3000/trips/:tripId/edit
router.get('/:tripId',isLoggedIn,tripsCtrl.show)

//GET /trips/:tripId/activities/new
router.get('/:tripId/activities/new',isLoggedIn,activitiesCtrl.new)

//POST /trips/:tripId/activities/new
router.post('/:tripId/',isLoggedIn,activitiesCtrl.create)

//GET /trips/:tripId/activities/:activityId
router.get('/:tripId/activities/:activityId/edit',isLoggedIn,activitiesCtrl.edit)

//PUT /trips/:tripId/activities/:activityId
router.put('/:tripId/activities/:activityId',isLoggedIn,activitiesCtrl.update)

//DELETE /trips/:tripId/activities/:activityId
router.delete('/:tripId/activities/:activityId',isLoggedIn,activitiesCtrl.delete)

//GET localhost:3000/trips/:tripId/edit
router.get('/:tripId/edit',isLoggedIn,tripsCtrl.edit)

//DELETE localhost:3000/trips/:tripId
router.delete('/:tripId',isLoggedIn,tripsCtrl.delete)

//PUT localhost:3000/trips/:tripId
router.put('/:tripId',isLoggedIn,tripsCtrl.update)


export{
  router
}