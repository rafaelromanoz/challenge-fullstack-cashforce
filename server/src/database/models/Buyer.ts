import { Table, Column, Model, AutoIncrement, PrimaryKey } from "sequelize-typescript";

@Table({tableName: 'buyers'})
export class Buyers extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number
  @Column
  name: string
}