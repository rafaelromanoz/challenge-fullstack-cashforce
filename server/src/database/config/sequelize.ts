import { Sequelize } from 'sequelize-typescript'
import { Cnpj } from '../models/Cnpj'
import { Order } from '../models/Order'

export const sequelize = new Sequelize({
  database: 'cashforce_v3',
  dialect: 'mysql',
  username: 'root',
  password: '',
  storage: ':memory:',
  repositoryMode: true
})

sequelize.addModels([Cnpj, Order])
