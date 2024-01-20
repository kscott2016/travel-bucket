import { Router } from 'express'
import * as tripsCtrl from '../controllers/trips.js'
import { isLoggedIn } from "../middleware/middleware.js"

const router= Router()

export{
  router
}