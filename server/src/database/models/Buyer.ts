import { Table, Column, Model, HasMany } from 'sequelize-typescript'
import { Order } from './Order'

@Table({ tableName: 'buyers' })
export class Buyer extends Model {
  @Column
    name: string

  @Column
    tradingName: string

  @Column
    cashForceTax: string

  @Column
    responsibleName: string

  @Column
    responsibleEmail: string

  @Column
    responsiblePosition: string

  @Column
    responsiblePhone: string

  @Column
    responsibleMobile: string

  @Column
    website: string

  @Column
    postalCode: string

  @Column
    address: string

  @Column
    number: string

  @Column
    complement: string

  @Column
    neighborhood: string

  @Column
    city: string

  @Column
    state: string

  @Column
    phoneNumber: string

  @Column
    situation: string

  @Column
    situationDate: string

  @Column
    confirm: number

  @Column
    email: string

  @HasMany(() => Order)
    order: Order
}
