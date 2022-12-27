import { Repository } from 'sequelize-typescript'
import { Buyer } from '../database/models/Buyer'
import { Cnpj } from '../database/models/Cnpj'
import { Order } from '../database/models/Order'
import { Provider } from '../database/models/Provider'
import { User } from '../database/models/User'

export class OrdersService {
  constructor (
    private readonly ordersRepository: Repository<Order>,
    private readonly cnpjRepository: Repository<Cnpj>,
    private readonly userRepository: Repository<User>,
    private readonly buyerRepository: Repository<Buyer>,
    private readonly providerRepository: Repository<Provider>
  ) { }

  async getAllOrders (): Promise<Order[]> {
    const orders = await this.ordersRepository.findAll(
      {
        include: [
          this.cnpjRepository,
          this.userRepository,
          this.buyerRepository,
          this.providerRepository
        ]
      })
    return orders
  }
}
