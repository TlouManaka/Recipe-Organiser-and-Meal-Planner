"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: '192.168.0.140', // Use IP address
    port: 3306,
    username: 'admin',
    password: 'password',
    database: 'meal_organiser_test',
    synchronize: true, // Automatically create database schema
    logging: false, // Log SQL queries
    entities: [], // Array of entity classes
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield AppDataSource.initialize();
        console.log('Data Source has been initialized!');
    }
    catch (error) {
        console.error('Error during Data Source initialization:', error);
    }
}))();
