import { Router } from 'express'
import OrdersController from '../controllers/orders'
import { sequelize } from '../database/config/sequelize'
import { Buyer } from '../database/models/Buyer'
import { Cnpj } from '../database/models/Cnpj'
import { Order } from '../database/models/Order'
import { Provider } from '../database/models/Provider'
import { User } from '../database/models/User'
import { OrdersService } from '../services/orders'

const ordersRepository = sequelize.getRepository(Order)
const cnpjRepository = sequelize.getRepository(Cnpj)
const userRepository = sequelize.getRepository(User)
const buyerRepository = sequelize.getRepository(Buyer)
const providerRepository = sequelize.getRepository(Provider)

const ordersService = new OrdersService(
  ordersRepository,
  cnpjRepository,
  userRepository,
  buyerRepository,
  providerRepository
)

const orderController = new OrdersController(ordersService)

const orderRouter = Router()

orderRouter.get('/', orderController.getAllOrdersController.bind(orderController))

export default orderRouter
