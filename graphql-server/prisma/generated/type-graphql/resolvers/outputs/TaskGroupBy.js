"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskAvgAggregate_1 = require("../outputs/TaskAvgAggregate");
const TaskCountAggregate_1 = require("../outputs/TaskCountAggregate");
const TaskMaxAggregate_1 = require("../outputs/TaskMaxAggregate");
const TaskMinAggregate_1 = require("../outputs/TaskMinAggregate");
const TaskSumAggregate_1 = require("../outputs/TaskSumAggregate");
const Priority_1 = require("../../enums/Priority");
let TaskGroupBy = class TaskGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TaskGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TaskGroupBy.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskGroupBy.prototype, "subtitle", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskGroupBy.prototype, "notes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], TaskGroupBy.prototype, "completed", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Priority_1.Priority, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TaskGroupBy.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TaskGroupBy.prototype, "parentId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TaskGroupBy.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCountAggregate_1.TaskCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskCountAggregate_1.TaskCountAggregate)
], TaskGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskAvgAggregate_1.TaskAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskAvgAggregate_1.TaskAvgAggregate)
], TaskGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskSumAggregate_1.TaskSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskSumAggregate_1.TaskSumAggregate)
], TaskGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskMinAggregate_1.TaskMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskMinAggregate_1.TaskMinAggregate)
], TaskGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskMaxAggregate_1.TaskMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskMaxAggregate_1.TaskMaxAggregate)
], TaskGroupBy.prototype, "_max", void 0);
TaskGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TaskGroupBy", {
        isAbstract: true
    })
], TaskGroupBy);
exports.TaskGroupBy = TaskGroupBy;
