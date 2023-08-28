import express from 'express'

import {userRoutes} from './http/controllers/user/routes.js'

const app = express()

app.use(express.json())
app.use(userRoutes)

export {app}