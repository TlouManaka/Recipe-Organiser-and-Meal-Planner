import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
    type: 'mysql',
    host: '192.168.0.140',       // Use IP address
    port: 3306,
    username: 'admin',
    password: 'password',
    database: 'meal_organiser_test',
    synchronize: true,      // Automatically create database schema
    logging: false,         // Log SQL queries
    entities: [],           // Array of entity classes
  });
  
  (async () => {
    try {
      await AppDataSource.initialize();
      console.log('Data Source has been initialized!');
    } catch (error) {
      console.error('Error during Data Source initialization:', error);
    }
  })();