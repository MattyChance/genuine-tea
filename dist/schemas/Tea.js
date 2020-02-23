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
const type_graphql_1 = require("type-graphql");
const Functionality_1 = require("./Functionality");
const TeaCategory_1 = require("./TeaCategory");
let Tea = class Tea {
};
__decorate([
    type_graphql_1.Field(type => type_graphql_1.Int),
    __metadata("design:type", Number)
], Tea.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Tea.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", TeaCategory_1.default)
], Tea.prototype, "category", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Boolean)
], Tea.prototype, "caffeine", void 0);
__decorate([
    type_graphql_1.Field(type => [Functionality_1.default]),
    __metadata("design:type", Array)
], Tea.prototype, "functions", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Tea.prototype, "description", void 0);
Tea = __decorate([
    type_graphql_1.ObjectType()
], Tea);
exports.default = Tea;
//# sourceMappingURL=Tea.js.map