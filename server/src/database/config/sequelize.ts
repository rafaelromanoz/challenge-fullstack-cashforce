import { Sequelize } from 'sequelize-typescript'
import { Buyer } from '../models/Buyer'
import { Cnpj } from '../models/Cnpj'
import { Order } from '../models/Order'
import { Provider } from '../models/Provider'
import { User } from '../models/User'

export const sequelize = new Sequelize({
  database: 'cashforce_v3',
  dialect: 'mysql',
  username: 'root',
  password: '',
  port: 3306,
  host: 'mysql',
  models: [Cnpj, Order, User, Buyer, Provider],
  storage: ':memory:',
  repositoryMode: true
})
