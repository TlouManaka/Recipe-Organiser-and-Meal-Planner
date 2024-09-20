import "reflect-metadata";
import {Entity,PrimaryGeneratedColumn,Column} from 'typeorm';




@Entity('users')
export class User{

    @PrimaryGeneratedColumn()
    user_id?:number;
    @Column()
    name?:string;
    @Column()
    surname?:string;
    @Column()
    phone?:string;
}
