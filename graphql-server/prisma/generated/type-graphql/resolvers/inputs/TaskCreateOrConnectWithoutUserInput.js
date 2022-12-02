"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCreateOrConnectWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateWithoutUserInput_1 = require("../inputs/TaskCreateWithoutUserInput");
const TaskWhereUniqueInput_1 = require("../inputs/TaskWhereUniqueInput");
let TaskCreateOrConnectWithoutUserInput = class TaskCreateOrConnectWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskWhereUniqueInput_1.TaskWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskWhereUniqueInput_1.TaskWhereUniqueInput)
], TaskCreateOrConnectWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateWithoutUserInput_1.TaskCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskCreateWithoutUserInput_1.TaskCreateWithoutUserInput)
], TaskCreateOrConnectWithoutUserInput.prototype, "create", void 0);
TaskCreateOrConnectWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskCreateOrConnectWithoutUserInput", {
        isAbstract: true
    })
], TaskCreateOrConnectWithoutUserInput);
exports.TaskCreateOrConnectWithoutUserInput = TaskCreateOrConnectWithoutUserInput;
