import { Router } from 'express'
import * as activitiesCtrl from '../controllers/activities.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

//GET /trips/:tripId/activities/new
// router.get('/trips/:tripId/activities/new',isLoggedIn,activitiesCtrl.new)

export{
  router
}