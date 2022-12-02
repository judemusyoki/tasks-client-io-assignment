"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCreateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateNestedManyWithoutParentInput_1 = require("../inputs/TaskCreateNestedManyWithoutParentInput");
const TaskCreateNestedOneWithoutChildrenInput_1 = require("../inputs/TaskCreateNestedOneWithoutChildrenInput");
const Priority_1 = require("../../enums/Priority");
let TaskCreateWithoutUserInput = class TaskCreateWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateWithoutUserInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateWithoutUserInput.prototype, "subtitle", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateWithoutUserInput.prototype, "notes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], TaskCreateWithoutUserInput.prototype, "completed", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Priority_1.Priority, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateWithoutUserInput.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateNestedOneWithoutChildrenInput_1.TaskCreateNestedOneWithoutChildrenInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskCreateNestedOneWithoutChildrenInput_1.TaskCreateNestedOneWithoutChildrenInput)
], TaskCreateWithoutUserInput.prototype, "parent", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateNestedManyWithoutParentInput_1.TaskCreateNestedManyWithoutParentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskCreateNestedManyWithoutParentInput_1.TaskCreateNestedManyWithoutParentInput)
], TaskCreateWithoutUserInput.prototype, "children", void 0);
TaskCreateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskCreateWithoutUserInput", {
        isAbstract: true
    })
], TaskCreateWithoutUserInput);
exports.TaskCreateWithoutUserInput = TaskCreateWithoutUserInput;
