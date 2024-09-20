import 'reflect-metadata'
import {Entity,PrimaryGeneratedColumn,Column} from 'typeorm';




@Entity('users')
export class User{

    @PrimaryGeneratedColumn()
    @Column('user_id')
    user_id?:number;
    @Column('name')
    name?:string;
    @Column('surname')
    surname?:string;
    @Column('phone_number')
    phone?:string;
}
