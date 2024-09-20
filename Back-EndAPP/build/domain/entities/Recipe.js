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
exports.Recipe = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Meal_1 = require("./Meal");
let Recipe = class Recipe {
    recipe_id;
    name;
    ingredients;
    instructions;
    notes;
    meal_type;
    date_created;
    image;
};
exports.Recipe = Recipe;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, typeorm_1.Column)('recipe_id'),
    __metadata("design:type", Number)
], Recipe.prototype, "recipe_id", void 0);
__decorate([
    (0, typeorm_1.Column)('name'),
    __metadata("design:type", String)
], Recipe.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('ingredients'),
    __metadata("design:type", String)
], Recipe.prototype, "ingredients", void 0);
__decorate([
    (0, typeorm_1.Column)('instructions'),
    __metadata("design:type", String)
], Recipe.prototype, "instructions", void 0);
__decorate([
    (0, typeorm_1.Column)('notes'),
    __metadata("design:type", String)
], Recipe.prototype, "notes", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: Meal_1.MealType,
        default: Meal_1.MealType.BREAKFAST,
    }),
    __metadata("design:type", String)
], Recipe.prototype, "meal_type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, typeorm_1.Column)({
        type: "date"
    }),
    __metadata("design:type", Date)
], Recipe.prototype, "date_created", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'blob'
    }),
    __metadata("design:type", Buffer)
], Recipe.prototype, "image", void 0);
exports.Recipe = Recipe = __decorate([
    (0, typeorm_1.Entity)('recipes')
], Recipe);
