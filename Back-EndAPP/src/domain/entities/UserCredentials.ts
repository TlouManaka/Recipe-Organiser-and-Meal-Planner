import "reflect-metadata"
import { Entity,PrimaryGeneratedColumn,Column,OneToOne, NumericType } from "typeorm";


@Entity()
export class UserCredentials{

    @Column()
    user_id?:number;
    @Column()
    username?:string;
    @Column()
    password:string;
    
}