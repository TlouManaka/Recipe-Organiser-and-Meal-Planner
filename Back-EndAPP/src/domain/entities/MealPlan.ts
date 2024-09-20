import 'reflect-metadata'
import { Entity,PrimaryGeneratedColumn,Column, Timestamp } from "typeorm";


@Entity('meal_plans')
export class MealPlan{

    @Column('meal_plan_id')
    plan_id!:number;
    @Column('day_of_week')
    day!:Date;
    @Column('time')
    time!:Timestamp;
}



