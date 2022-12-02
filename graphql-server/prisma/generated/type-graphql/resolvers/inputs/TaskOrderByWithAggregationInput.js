"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskAvgOrderByAggregateInput_1 = require("../inputs/TaskAvgOrderByAggregateInput");
const TaskCountOrderByAggregateInput_1 = require("../inputs/TaskCountOrderByAggregateInput");
const TaskMaxOrderByAggregateInput_1 = require("../inputs/TaskMaxOrderByAggregateInput");
const TaskMinOrderByAggregateInput_1 = require("../inputs/TaskMinOrderByAggregateInput");
const TaskSumOrderByAggregateInput_1 = require("../inputs/TaskSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let TaskOrderByWithAggregationInput = class TaskOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskOrderByWithAggregationInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskOrderByWithAggregationInput.prototype, "subtitle", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskOrderByWithAggregationInput.prototype, "notes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskOrderByWithAggregationInput.prototype, "completed", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskOrderByWithAggregationInput.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskOrderByWithAggregationInput.prototype, "parentId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskOrderByWithAggregationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCountOrderByAggregateInput_1.TaskCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskCountOrderByAggregateInput_1.TaskCountOrderByAggregateInput)
], TaskOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskAvgOrderByAggregateInput_1.TaskAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskAvgOrderByAggregateInput_1.TaskAvgOrderByAggregateInput)
], TaskOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskMaxOrderByAggregateInput_1.TaskMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskMaxOrderByAggregateInput_1.TaskMaxOrderByAggregateInput)
], TaskOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskMinOrderByAggregateInput_1.TaskMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskMinOrderByAggregateInput_1.TaskMinOrderByAggregateInput)
], TaskOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskSumOrderByAggregateInput_1.TaskSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskSumOrderByAggregateInput_1.TaskSumOrderByAggregateInput)
], TaskOrderByWithAggregationInput.prototype, "_sum", void 0);
TaskOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskOrderByWithAggregationInput", {
        isAbstract: true
    })
], TaskOrderByWithAggregationInput);
exports.TaskOrderByWithAggregationInput = TaskOrderByWithAggregationInput;
