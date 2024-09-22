"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const UserCredentials_1 = require("./UserCredentials");
const UserAddress_1 = require("./UserAddress");
const Recipe_1 = require("./Recipe");
const ShoppingList_1 = require("./ShoppingList");
const MealPlan_1 = require("./MealPlan");
let User = class User {
    user_id;
    name;
    surname;
    phone;
    user_credentials;
    user_addresses;
    recipe;
    shoppinglist;
    mean_plan;
};
exports.User = User;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], User.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'names',
        type: 'varchar',
        length: 20,
        nullable: false
    }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'surname',
        type: 'varchar',
        length: 20,
        nullable: false
    }),
    __metadata("design:type", String)
], User.prototype, "surname", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'phone_number',
        length: 10,
        nullable: true
    }),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => UserCredentials_1.UserCredentials, { cascade: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", UserCredentials_1.UserCredentials)
], User.prototype, "user_credentials", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => UserAddress_1.UserAddress, user_address => user_address.user),
    __metadata("design:type", Array)
], User.prototype, "user_addresses", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Recipe_1.Recipe, recipe => recipe.user_id),
    __metadata("design:type", Array)
], User.prototype, "recipe", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ShoppingList_1.ShoppingList, shoppingList => shoppingList.user),
    __metadata("design:type", Array)
], User.prototype, "shoppinglist", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => MealPlan_1.MealPlan, meal_plan => meal_plan.user),
    __metadata("design:type", Array)
], User.prototype, "mean_plan", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)('users')
], User);
