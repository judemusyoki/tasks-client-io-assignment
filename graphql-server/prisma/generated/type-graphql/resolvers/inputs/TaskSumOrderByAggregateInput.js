"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TaskSumOrderByAggregateInput = class TaskSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskSumOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskSumOrderByAggregateInput.prototype, "parentId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskSumOrderByAggregateInput.prototype, "userId", void 0);
TaskSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskSumOrderByAggregateInput", {
        isAbstract: true
    })
], TaskSumOrderByAggregateInput);
exports.TaskSumOrderByAggregateInput = TaskSumOrderByAggregateInput;
