"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TaskSumAggregate = class TaskSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TaskSumAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TaskSumAggregate.prototype, "parentId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TaskSumAggregate.prototype, "userId", void 0);
TaskSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TaskSumAggregate", {
        isAbstract: true
    })
], TaskSumAggregate);
exports.TaskSumAggregate = TaskSumAggregate;
