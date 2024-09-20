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
exports.UserCredentials = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
let UserCredentials = class UserCredentials {
    user_id;
    username;
    password;
};
exports.UserCredentials = UserCredentials;
__decorate([
    (0, typeorm_1.Column)('id'),
    __metadata("design:type", Number)
], UserCredentials.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)('email'),
    __metadata("design:type", String)
], UserCredentials.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)('password'),
    __metadata("design:type", String)
], UserCredentials.prototype, "password", void 0);
exports.UserCredentials = UserCredentials = __decorate([
    (0, typeorm_1.Entity)()
], UserCredentials);
