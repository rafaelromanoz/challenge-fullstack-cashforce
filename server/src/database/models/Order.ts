import { Table, Column, Model, AutoIncrement, PrimaryKey, ForeignKey, BelongsTo } from 'sequelize-typescript'
import { Buyer } from './Buyer'
import { Cnpj } from './Cnpj'
import { Provider } from './Provider'
import { User } from './User'

@Table({ tableName: 'orders' })
export class Order extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
    id: number

  @Column
    orderNfId: string

  @Column
    orderNumber: string

  @Column
    orderPath: string

  @Column
    orderOriginalName: string

  @Column
    emissionDate: Date

  @Column
    pdfFile: string

  @Column
    emitedTo: string

  @Column
    nNf: string

  @Column
    CTE: string

  @Column
    value: string

  @Column
    orderStatusBuyer: string

  @Column
    orderStatusProvider: string

  @Column
    deliveryReceipt: string

  @Column
    cargoPackingList: string

  @Column
    deliveryCtrc: string

  @BelongsTo(() => Cnpj)
    cnpjs: Cnpj

  @BelongsTo(() => User)
    user: User

  @BelongsTo(() => Buyer)
    buyer: Buyer

  @BelongsTo(() => Provider)
    provider: Provider

  @ForeignKey(() => Buyer)
  @Column
    buyerId: string

  @ForeignKey(() => Cnpj)
  @Column
    cnpjId: string

  @ForeignKey(() => User)
  @Column
    userId: string

  @ForeignKey(() => Provider)
  @Column
    providerId: string
}
