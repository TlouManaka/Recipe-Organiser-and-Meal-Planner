import { DataSource } from "typeorm";
import * as dotenv from 'dotenv'

dotenv.config({path:'./config/.env'});


//db credentails
const db_host:string | undefined = process.env.DB_HOST;
const db_username:string | undefined = process.env.DB_USERNAME;
const db_password:string |undefined =process.env.DB_PASSWORD;
const db_name:string | undefined = process.env.DB_NAME;


const AppDataSource = new DataSource({
    type: "mysql",
    host: db_host,       // Use IP address
    port: 3306,
    username: db_username,
    password: db_password,
    database: db_name,
    synchronize: true,      // Automatically create database schema
    logging: false,         // Log SQL queries
    entities: [],           // Array of entity classes
  });
  

  export const initializeDatabase = async () => {
 try{
    await AppDataSource.initialize();
    console.log("Data source has been initialised");

 }catch(error){
    console.error("Erro during Data source initialisation");
 }
 };