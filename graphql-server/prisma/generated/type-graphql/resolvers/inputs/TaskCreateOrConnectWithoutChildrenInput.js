"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCreateOrConnectWithoutChildrenInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateWithoutChildrenInput_1 = require("../inputs/TaskCreateWithoutChildrenInput");
const TaskWhereUniqueInput_1 = require("../inputs/TaskWhereUniqueInput");
let TaskCreateOrConnectWithoutChildrenInput = class TaskCreateOrConnectWithoutChildrenInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskWhereUniqueInput_1.TaskWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskWhereUniqueInput_1.TaskWhereUniqueInput)
], TaskCreateOrConnectWithoutChildrenInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateWithoutChildrenInput_1.TaskCreateWithoutChildrenInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskCreateWithoutChildrenInput_1.TaskCreateWithoutChildrenInput)
], TaskCreateOrConnectWithoutChildrenInput.prototype, "create", void 0);
TaskCreateOrConnectWithoutChildrenInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskCreateOrConnectWithoutChildrenInput", {
        isAbstract: true
    })
], TaskCreateOrConnectWithoutChildrenInput);
exports.TaskCreateOrConnectWithoutChildrenInput = TaskCreateOrConnectWithoutChildrenInput;
