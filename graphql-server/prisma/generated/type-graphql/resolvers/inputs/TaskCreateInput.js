"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateNestedManyWithoutParentInput_1 = require("../inputs/TaskCreateNestedManyWithoutParentInput");
const TaskCreateNestedOneWithoutChildrenInput_1 = require("../inputs/TaskCreateNestedOneWithoutChildrenInput");
const UserCreateNestedOneWithoutTasksInput_1 = require("../inputs/UserCreateNestedOneWithoutTasksInput");
const Priority_1 = require("../../enums/Priority");
let TaskCreateInput = class TaskCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateInput.prototype, "subtitle", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateInput.prototype, "notes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], TaskCreateInput.prototype, "completed", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Priority_1.Priority, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateInput.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateNestedOneWithoutChildrenInput_1.TaskCreateNestedOneWithoutChildrenInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskCreateNestedOneWithoutChildrenInput_1.TaskCreateNestedOneWithoutChildrenInput)
], TaskCreateInput.prototype, "parent", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateNestedManyWithoutParentInput_1.TaskCreateNestedManyWithoutParentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskCreateNestedManyWithoutParentInput_1.TaskCreateNestedManyWithoutParentInput)
], TaskCreateInput.prototype, "children", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutTasksInput_1.UserCreateNestedOneWithoutTasksInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutTasksInput_1.UserCreateNestedOneWithoutTasksInput)
], TaskCreateInput.prototype, "user", void 0);
TaskCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskCreateInput", {
        isAbstract: true
    })
], TaskCreateInput);
exports.TaskCreateInput = TaskCreateInput;
