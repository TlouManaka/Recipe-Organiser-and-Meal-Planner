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
exports.ShoppingList = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
let ShoppingList = class ShoppingList {
    shopping_list_id;
    start_date;
    end_date;
    shopping_list;
    user;
};
exports.ShoppingList = ShoppingList;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ShoppingList.prototype, "shopping_list_id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'start_date',
        type: Date,
    }),
    __metadata("design:type", Date)
], ShoppingList.prototype, "start_date", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'end_date',
        type: Date,
    }),
    __metadata("design:type", Date)
], ShoppingList.prototype, "end_date", void 0);
__decorate([
    (0, typeorm_1.Column)("json"),
    __metadata("design:type", String)
], ShoppingList.prototype, "shopping_list", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => User_1.User, user => user.shoppinglist),
    __metadata("design:type", User_1.User)
], ShoppingList.prototype, "user", void 0);
exports.ShoppingList = ShoppingList = __decorate([
    (0, typeorm_1.Entity)('ShoppingLists')
], ShoppingList);
