import { Repository } from 'sequelize-typescript'
import { Buyer } from '../database/models/Buyer'
import { Cnpj } from '../database/models/Cnpj'
import { Order } from '../database/models/Order'
import { User } from '../database/models/User'

export class OrdersService {
  constructor (
    private readonly ordersRepository: Repository<Order>,
    private readonly cnpjRepository: Repository<Cnpj>,
    private readonly userRepository: Repository<User>,
    private readonly buyerRepository: Repository<Buyer>
  ) { }

  async getAllOrders (): Promise<Order[]> {
    const orders = await this.ordersRepository.findAll(
      {
        include: [
          this.cnpjRepository,
          this.userRepository,
          this.buyerRepository
        ]
      })
    return orders
  }
}
