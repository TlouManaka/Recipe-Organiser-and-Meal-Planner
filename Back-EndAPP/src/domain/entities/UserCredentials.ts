import "reflect-metadata"
import { Entity,PrimaryGeneratedColumn,Column,OneToOne, NumericType } from "typeorm";


@Entity()
export class UserCredentials{

    @Column('id')
    user_id?:number;
    @Column('email')
    username?:string;
    @Column('password')
    password?:string;
    
}