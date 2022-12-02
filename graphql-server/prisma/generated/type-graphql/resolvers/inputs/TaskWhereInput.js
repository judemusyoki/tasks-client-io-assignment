"use strict";
var TaskWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFilter_1 = require("../inputs/BoolFilter");
const EnumPriorityFilter_1 = require("../inputs/EnumPriorityFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const IntNullableFilter_1 = require("../inputs/IntNullableFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const TaskListRelationFilter_1 = require("../inputs/TaskListRelationFilter");
const TaskRelationFilter_1 = require("../inputs/TaskRelationFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let TaskWhereInput = TaskWhereInput_1 = class TaskWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], TaskWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TaskWhereInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], TaskWhereInput.prototype, "subtitle", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], TaskWhereInput.prototype, "notes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFilter_1.BoolFilter)
], TaskWhereInput.prototype, "completed", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumPriorityFilter_1.EnumPriorityFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumPriorityFilter_1.EnumPriorityFilter)
], TaskWhereInput.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], TaskWhereInput.prototype, "parentId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskRelationFilter_1.TaskRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskRelationFilter_1.TaskRelationFilter)
], TaskWhereInput.prototype, "parent", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskListRelationFilter_1.TaskListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskListRelationFilter_1.TaskListRelationFilter)
], TaskWhereInput.prototype, "children", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], TaskWhereInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], TaskWhereInput.prototype, "user", void 0);
TaskWhereInput = TaskWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskWhereInput", {
        isAbstract: true
    })
], TaskWhereInput);
exports.TaskWhereInput = TaskWhereInput;
