import express from 'express'
import cors from 'cors'
import connectDB from './db/DB.js'
import bookRoute from './routes/bookRoutes.js'
import userRoute from './routes/userRouter.js'





const app = express()
app.use(cors())
app.use(express.json())


const port = process.env.PORT || 5003

connectDB()

app.use('/book', bookRoute)
app.use('/user', userRoute)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})