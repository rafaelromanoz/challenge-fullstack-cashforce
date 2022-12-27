import { Sequelize } from 'sequelize-typescript'
import { Buyer } from '../models/Buyer'
import { Cnpj } from '../models/Cnpj'
import { Order } from '../models/Order'
import { User } from '../models/User'

export const sequelize = new Sequelize({
  database: 'cashforce_v3',
  dialect: 'mysql',
  username: 'root',
  password: '',
  models: [Cnpj, Order, User, Buyer],
  storage: ':memory:',
  repositoryMode: true
})
