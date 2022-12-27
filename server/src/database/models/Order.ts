import { Table, Column, Model, AutoIncrement, PrimaryKey, ForeignKey, BelongsTo } from 'sequelize-typescript'
import { Cnpj } from './Cnpj'

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

  @BelongsTo(() => Cnpj)
    cnpjs: Cnpj

  @ForeignKey(() => Cnpj)
  @Column
    cnpjId: string
}
