import { Sequelize } from 'sequelize-typescript'
import { Buyers } from '../models/Buyer';

export const sequelize = new Sequelize({
  database: 'cashforce_v3',
  dialect: 'mysql',
  username: 'root',
  password: '',
  storage: ':memory:',
  models: [Buyers],
  repositoryMode: true,
})