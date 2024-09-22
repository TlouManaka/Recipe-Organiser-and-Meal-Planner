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
exports.UserAddress = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
let UserAddress = class UserAddress {
    address_id;
    province;
    city;
    street_number;
    user;
};
exports.UserAddress = UserAddress;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], UserAddress.prototype, "address_id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'province',
        type: 'varchar',
        length: 20,
    }),
    __metadata("design:type", String)
], UserAddress.prototype, "province", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'city',
        type: 'varchar',
        length: 20,
    }),
    __metadata("design:type", String)
], UserAddress.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'house_address',
        type: 'varchar',
        length: 20,
    }),
    __metadata("design:type", String)
], UserAddress.prototype, "street_number", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => User_1.User, user => user.user_addresses),
    __metadata("design:type", User_1.User)
], UserAddress.prototype, "user", void 0);
exports.UserAddress = UserAddress = __decorate([
    (0, typeorm_1.Entity)("addresses")
], UserAddress);
