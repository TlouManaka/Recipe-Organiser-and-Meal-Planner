"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("./infrastructure/db/data-source");
data_source_1.AppDataSource.initialize().then(async () => {
    console.log("Data Source has been ini");
    await data_source_1.AppDataSource.runMigrations();
    console.log("Migration has been run successfully");
}).catch((error) => {
    console.error("During initilization", error);
});
