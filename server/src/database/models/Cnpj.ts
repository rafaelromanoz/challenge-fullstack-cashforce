import { Column, HasMany, Model, Table } from 'sequelize-typescript'
import { Order } from './Order'

@Table({ tableName: 'cnpjs' })
export class Cnpj extends Model {
  @Column
    cnpj: string

  @HasMany(() => Order)
    order: Order
}
