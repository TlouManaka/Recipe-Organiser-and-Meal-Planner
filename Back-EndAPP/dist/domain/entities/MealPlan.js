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
exports.MealPlan = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
let MealPlan = class MealPlan {
    plan_id;
    day;
    time;
    user;
};
exports.MealPlan = MealPlan;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], MealPlan.prototype, "plan_id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'day_of_week',
        type: Date,
    }),
    __metadata("design:type", Date)
], MealPlan.prototype, "day", void 0);
__decorate([
    (0, typeorm_1.Column)('time'),
    __metadata("design:type", typeorm_1.Timestamp)
], MealPlan.prototype, "time", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => User_1.User, user => user.mean_plan),
    __metadata("design:type", User_1.User)
], MealPlan.prototype, "user", void 0);
exports.MealPlan = MealPlan = __decorate([
    (0, typeorm_1.Entity)('meal_plans')
], MealPlan);
