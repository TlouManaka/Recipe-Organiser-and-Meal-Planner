"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("./user/user"));
person: user_1.default;
let person = new user_1.default("tlou", "manaka");
console.log("name", person.name, " surname", person.surname);
