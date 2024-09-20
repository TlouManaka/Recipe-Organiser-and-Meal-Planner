import 'reflect-metadata'
import {Entity,PrimaryGeneratedColumn,Column  } from "typeorm";
import { MealType } from './Meal';
import { timeStamp } from 'console';



@Entity('recipes')
export class Recipe{

    @PrimaryGeneratedColumn()
    @Column('recipe_id')
    recipe_id!:number;
    @Column('name')
    name!:string;
    @Column('ingredients')
    ingredients!:string;
    @Column('instructions')
    instructions!:string;
    @Column('notes')
    notes?:string;
    @Column({
        type:'enum',
        enum:MealType,
        default:MealType.BREAKFAST,
    })
    meal_type!:MealType;
    @Column()
    @Column({
        type:"date"
    })
    date_created!:Date;
    @Column({
        type:'blob'
    })
    image?:Buffer;

}