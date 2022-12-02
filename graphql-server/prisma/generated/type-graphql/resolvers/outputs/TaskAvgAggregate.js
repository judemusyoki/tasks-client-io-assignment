"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TaskAvgAggregate = class TaskAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TaskAvgAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TaskAvgAggregate.prototype, "parentId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TaskAvgAggregate.prototype, "userId", void 0);
TaskAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TaskAvgAggregate", {
        isAbstract: true
    })
], TaskAvgAggregate);
exports.TaskAvgAggregate = TaskAvgAggregate;
