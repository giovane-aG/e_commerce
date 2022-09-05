import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class Product {
  @PrimaryColumn({ generated: 'uuid' })
  id: string

  @Column()
  name: string

  @Column()
  code: number
}