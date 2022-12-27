import express from 'express'
import cors from 'cors'
import orderRouter from './routes/ordersRoutes'
import 'express-async-errors'
import errorHandler from './middlewares/errorHandler'

const app = express()

app.use(express.json())
app.use(cors())

const PORT = 5000

app.use('/orders', orderRouter)

app.use(errorHandler)

app.listen(PORT, async () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
