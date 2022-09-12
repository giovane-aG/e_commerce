import "reflect-metadata"
import { Entity, PrimaryColumn, Column, OneToOne, ManyToOne, OneToMany, JoinColumn } from 'typeorm'

@Entity()
export class Cart {
  @PrimaryColumn({ generated: 'uuid' })
  id: string

  @Column()
  userId: string
}