"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCreateOrConnectWithoutParentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateWithoutParentInput_1 = require("../inputs/TaskCreateWithoutParentInput");
const TaskWhereUniqueInput_1 = require("../inputs/TaskWhereUniqueInput");
let TaskCreateOrConnectWithoutParentInput = class TaskCreateOrConnectWithoutParentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskWhereUniqueInput_1.TaskWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskWhereUniqueInput_1.TaskWhereUniqueInput)
], TaskCreateOrConnectWithoutParentInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateWithoutParentInput_1.TaskCreateWithoutParentInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskCreateWithoutParentInput_1.TaskCreateWithoutParentInput)
], TaskCreateOrConnectWithoutParentInput.prototype, "create", void 0);
TaskCreateOrConnectWithoutParentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskCreateOrConnectWithoutParentInput", {
        isAbstract: true
    })
], TaskCreateOrConnectWithoutParentInput);
exports.TaskCreateOrConnectWithoutParentInput = TaskCreateOrConnectWithoutParentInput;
