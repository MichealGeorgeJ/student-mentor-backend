import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import AppRoutes from './router/homePageRouter.js'
dotenv.config()

const PORT = process.env.PORT || 8000; // Change port here
const app = express()
app.use(cors())
app.use(express.json())
app.use('/', AppRoutes)

app.listen(PORT, () => console.log(`App is listening to ${PORT}`))