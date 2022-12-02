"use strict";
var TaskOrderByWithRelationInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskOrderByRelationAggregateInput_1 = require("../inputs/TaskOrderByRelationAggregateInput");
const UserOrderByWithRelationInput_1 = require("../inputs/UserOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let TaskOrderByWithRelationInput = TaskOrderByWithRelationInput_1 = class TaskOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskOrderByWithRelationInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskOrderByWithRelationInput.prototype, "subtitle", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskOrderByWithRelationInput.prototype, "notes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskOrderByWithRelationInput.prototype, "completed", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskOrderByWithRelationInput.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskOrderByWithRelationInput.prototype, "parentId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskOrderByWithRelationInput_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskOrderByWithRelationInput)
], TaskOrderByWithRelationInput.prototype, "parent", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskOrderByRelationAggregateInput_1.TaskOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskOrderByRelationAggregateInput_1.TaskOrderByRelationAggregateInput)
], TaskOrderByWithRelationInput.prototype, "children", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskOrderByWithRelationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserOrderByWithRelationInput_1.UserOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserOrderByWithRelationInput_1.UserOrderByWithRelationInput)
], TaskOrderByWithRelationInput.prototype, "user", void 0);
TaskOrderByWithRelationInput = TaskOrderByWithRelationInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskOrderByWithRelationInput", {
        isAbstract: true
    })
], TaskOrderByWithRelationInput);
exports.TaskOrderByWithRelationInput = TaskOrderByWithRelationInput;
