import { Table, Column, Model, HasMany } from 'sequelize-typescript'
import { Order } from './Order'

@Table({ tableName: 'users' })
export class User extends Model {
  @Column
    name: string

  @Column
    email: string

  @Column
    phoneNumber: string

  @Column
    departament: string

  @Column
    verificationCode: Date

  @Column
    emailChecked: number

  @Column
    cashForceAdm: number

  @HasMany(() => Order)
    order: Order
}
