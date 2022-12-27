import { Repository } from 'sequelize-typescript'
import { Cnpj } from '../database/models/Cnpj'
import { Order } from '../database/models/Order'

export class OrdersService {
  constructor (
    private readonly ordersRepository: Repository<Order>,
    private readonly cnpjRepository: Repository<Cnpj>
  ) { }

  async getAllOrders (): Promise<Order[]> {
    const orders = await this.ordersRepository.findAll({ include: this.cnpjRepository })
    return orders
  }
}
