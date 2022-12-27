import { Router } from 'express'
import OrdersController from '../controllers/orders'
import { sequelize } from '../database/config/sequelize'
import { Cnpj } from '../database/models/Cnpj'
import { Order } from '../database/models/Order'
import { OrdersService } from '../services/orders'

const ordersRepository = sequelize.getRepository(Order)
const cnpjRepository = sequelize.getRepository(Cnpj)

const ordersService = new OrdersService(ordersRepository, cnpjRepository)

const orderController = new OrdersController(ordersService)

const orderRouter = Router()

orderRouter.get('/', orderController.getAllOrdersController.bind(orderController))

export default orderRouter
