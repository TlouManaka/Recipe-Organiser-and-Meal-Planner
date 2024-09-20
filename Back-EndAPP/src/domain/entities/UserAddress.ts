import 'reflect-metadata'
import { Entity,PrimaryGeneratedColumn,Column } from 'typeorm'


@Entity("addresses")
export class UserAddress{

    @PrimaryGeneratedColumn()
    @Column('id')
    address_id?:string;
    @Column('province')
    province?:string;
    @Column('city')
    city?:string;
    @Column('street_number')
    street_number?:string;
}