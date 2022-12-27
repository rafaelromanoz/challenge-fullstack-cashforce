import { NextFunction, Request, Response } from 'express'
import { StatusCode } from '../http/statusCodes'
import { OrdersService } from '../services/orders'

export default class OrdersController {
  constructor (private readonly ordersService: OrdersService) {}

  async getAllOrdersController (_req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const orders = await this.ordersService.getAllOrders()
      return res.status(StatusCode.OK).json(orders)
    } catch (error) {
      return next(error)
    }
  }
}
