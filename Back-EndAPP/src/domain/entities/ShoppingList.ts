import 'reflect-metadata'
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm'



@Entity('ShoppingLists')
export class ShoppingList{

    @PrimaryGeneratedColumn()
    @Column('id')
    shopping_list_id!:number;
    @Column('start_date')
    start_date!:Date;
    @Column('end_datae')
    end_date!:Date;
    @Column("List")
    shopping_list?:string;

}