import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  VersionColumn,
} from 'typeorm';
import { IChatBase } from '../interfaces/chat.interface';

@Entity('chat')
export class ChatEntity extends BaseEntity implements IChatBase {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  from: string;

  @Column()
  text: string;

  @Column()
  to: string;

  @Column()
  room: string;

  @VersionColumn({ type: 'int', unsigned: true })
  version: number;

  @Column({
    name: 'created_at',
  })
  createdAt: Date;

  @Column({
    name: 'updated_at',
  })
  updatedAt: Date;
}
