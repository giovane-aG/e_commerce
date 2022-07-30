import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity('user')
export class User  {
  @PrimaryColumn({ generated: 'uuid' })
  id: string

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ unique: true })
  cpf: string;
}
