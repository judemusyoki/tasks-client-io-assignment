"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskUpsertWithoutChildrenInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateWithoutChildrenInput_1 = require("../inputs/TaskCreateWithoutChildrenInput");
const TaskUpdateWithoutChildrenInput_1 = require("../inputs/TaskUpdateWithoutChildrenInput");
let TaskUpsertWithoutChildrenInput = class TaskUpsertWithoutChildrenInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskUpdateWithoutChildrenInput_1.TaskUpdateWithoutChildrenInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskUpdateWithoutChildrenInput_1.TaskUpdateWithoutChildrenInput)
], TaskUpsertWithoutChildrenInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateWithoutChildrenInput_1.TaskCreateWithoutChildrenInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskCreateWithoutChildrenInput_1.TaskCreateWithoutChildrenInput)
], TaskUpsertWithoutChildrenInput.prototype, "create", void 0);
TaskUpsertWithoutChildrenInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskUpsertWithoutChildrenInput", {
        isAbstract: true
    })
], TaskUpsertWithoutChildrenInput);
exports.TaskUpsertWithoutChildrenInput = TaskUpsertWithoutChildrenInput;
