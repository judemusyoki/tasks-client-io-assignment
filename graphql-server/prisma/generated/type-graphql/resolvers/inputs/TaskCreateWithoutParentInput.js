"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCreateWithoutParentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateNestedManyWithoutParentInput_1 = require("../inputs/TaskCreateNestedManyWithoutParentInput");
const UserCreateNestedOneWithoutTasksInput_1 = require("../inputs/UserCreateNestedOneWithoutTasksInput");
const Priority_1 = require("../../enums/Priority");
let TaskCreateWithoutParentInput = class TaskCreateWithoutParentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateWithoutParentInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateWithoutParentInput.prototype, "subtitle", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateWithoutParentInput.prototype, "notes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], TaskCreateWithoutParentInput.prototype, "completed", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Priority_1.Priority, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateWithoutParentInput.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateNestedManyWithoutParentInput_1.TaskCreateNestedManyWithoutParentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskCreateNestedManyWithoutParentInput_1.TaskCreateNestedManyWithoutParentInput)
], TaskCreateWithoutParentInput.prototype, "children", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutTasksInput_1.UserCreateNestedOneWithoutTasksInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutTasksInput_1.UserCreateNestedOneWithoutTasksInput)
], TaskCreateWithoutParentInput.prototype, "user", void 0);
TaskCreateWithoutParentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskCreateWithoutParentInput", {
        isAbstract: true
    })
], TaskCreateWithoutParentInput);
exports.TaskCreateWithoutParentInput = TaskCreateWithoutParentInput;
