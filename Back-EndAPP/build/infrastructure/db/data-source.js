"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeDatabase = void 0;
const typeorm_1 = require("typeorm");
const dotenv = __importStar(require("dotenv"));
dotenv.config({ path: './config/.env' });
//db credentails
const db_host = process.env.DB_HOST;
const db_username = process.env.DB_USERNAME;
const db_password = process.env.DB_PASSWORD;
const db_name = process.env.DB_NAME;
const AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: db_host, // Use IP address
    port: 3306,
    username: db_username,
    password: db_password,
    database: db_name,
    synchronize: true, // Automatically create database schema
    logging: false, // Log SQL queries
    entities: [], // Array of entity classes
});
const initializeDatabase = async () => {
    try {
        await AppDataSource.initialize();
        console.log("Data source has been initialised");
    }
    catch (error) {
        console.error("Erro during Data source initialisation");
    }
};
exports.initializeDatabase = initializeDatabase;
