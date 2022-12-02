"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCreateWithoutChildrenInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateNestedOneWithoutChildrenInput_1 = require("../inputs/TaskCreateNestedOneWithoutChildrenInput");
const UserCreateNestedOneWithoutTasksInput_1 = require("../inputs/UserCreateNestedOneWithoutTasksInput");
const Priority_1 = require("../../enums/Priority");
let TaskCreateWithoutChildrenInput = class TaskCreateWithoutChildrenInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateWithoutChildrenInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateWithoutChildrenInput.prototype, "subtitle", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateWithoutChildrenInput.prototype, "notes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], TaskCreateWithoutChildrenInput.prototype, "completed", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Priority_1.Priority, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateWithoutChildrenInput.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateNestedOneWithoutChildrenInput_1.TaskCreateNestedOneWithoutChildrenInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskCreateNestedOneWithoutChildrenInput_1.TaskCreateNestedOneWithoutChildrenInput)
], TaskCreateWithoutChildrenInput.prototype, "parent", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutTasksInput_1.UserCreateNestedOneWithoutTasksInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutTasksInput_1.UserCreateNestedOneWithoutTasksInput)
], TaskCreateWithoutChildrenInput.prototype, "user", void 0);
TaskCreateWithoutChildrenInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskCreateWithoutChildrenInput", {
        isAbstract: true
    })
], TaskCreateWithoutChildrenInput);
exports.TaskCreateWithoutChildrenInput = TaskCreateWithoutChildrenInput;
