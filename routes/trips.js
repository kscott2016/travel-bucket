import { Router } from 'express'
import * as tripsCtrl from '../controllers/trips.js'
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

//GET localhost:3000/trips/:tripId/edit
router.get('/:tripId/edit',isLoggedIn,tripsCtrl.edit)

//PUT localhost:3000/trips/:tripId
router.put('/:tripId',isLoggedIn,tripsCtrl.update)

export{
  router
}