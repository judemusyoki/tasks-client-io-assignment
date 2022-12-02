"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TaskCount = class TaskCount {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TaskCount.prototype, "children", void 0);
TaskCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TaskCount", {
        isAbstract: true
    })
], TaskCount);
exports.TaskCount = TaskCount;
