
import { Entity,PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity()
export  class User{

@PrimaryGeneratedColumn()  
user_id?:Number;

@Column()
first_name?: string;

@Column()
last_nme?:string;

@Column
phone?:string;



}