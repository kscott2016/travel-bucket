import { Router } from 'express'
import * as tripsCtrl from '../controllers/trips.js'
import { isLoggedIn } from "../middleware/middleware.js"

const router= Router()

//GET localhost:3000/trips
router.get('/',isLoggedIn,tripsCtrl.index)

//GET localhost:3000/trips/new
router.get('/new',tripsCtrl.new)

export{
  router
}