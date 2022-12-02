"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCreateNestedOneWithoutChildrenInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateOrConnectWithoutChildrenInput_1 = require("../inputs/TaskCreateOrConnectWithoutChildrenInput");
const TaskCreateWithoutChildrenInput_1 = require("../inputs/TaskCreateWithoutChildrenInput");
const TaskWhereUniqueInput_1 = require("../inputs/TaskWhereUniqueInput");
let TaskCreateNestedOneWithoutChildrenInput = class TaskCreateNestedOneWithoutChildrenInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateWithoutChildrenInput_1.TaskCreateWithoutChildrenInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskCreateWithoutChildrenInput_1.TaskCreateWithoutChildrenInput)
], TaskCreateNestedOneWithoutChildrenInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateOrConnectWithoutChildrenInput_1.TaskCreateOrConnectWithoutChildrenInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskCreateOrConnectWithoutChildrenInput_1.TaskCreateOrConnectWithoutChildrenInput)
], TaskCreateNestedOneWithoutChildrenInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskWhereUniqueInput_1.TaskWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskWhereUniqueInput_1.TaskWhereUniqueInput)
], TaskCreateNestedOneWithoutChildrenInput.prototype, "connect", void 0);
TaskCreateNestedOneWithoutChildrenInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskCreateNestedOneWithoutChildrenInput", {
        isAbstract: true
    })
], TaskCreateNestedOneWithoutChildrenInput);
exports.TaskCreateNestedOneWithoutChildrenInput = TaskCreateNestedOneWithoutChildrenInput;
