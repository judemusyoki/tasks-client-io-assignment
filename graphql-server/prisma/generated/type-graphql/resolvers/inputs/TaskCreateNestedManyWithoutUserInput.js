"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCreateNestedManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateManyUserInputEnvelope_1 = require("../inputs/TaskCreateManyUserInputEnvelope");
const TaskCreateOrConnectWithoutUserInput_1 = require("../inputs/TaskCreateOrConnectWithoutUserInput");
const TaskCreateWithoutUserInput_1 = require("../inputs/TaskCreateWithoutUserInput");
const TaskWhereUniqueInput_1 = require("../inputs/TaskWhereUniqueInput");
let TaskCreateNestedManyWithoutUserInput = class TaskCreateNestedManyWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskCreateWithoutUserInput_1.TaskCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskCreateNestedManyWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskCreateOrConnectWithoutUserInput_1.TaskCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskCreateNestedManyWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateManyUserInputEnvelope_1.TaskCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskCreateManyUserInputEnvelope_1.TaskCreateManyUserInputEnvelope)
], TaskCreateNestedManyWithoutUserInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskWhereUniqueInput_1.TaskWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskCreateNestedManyWithoutUserInput.prototype, "connect", void 0);
TaskCreateNestedManyWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskCreateNestedManyWithoutUserInput", {
        isAbstract: true
    })
], TaskCreateNestedManyWithoutUserInput);
exports.TaskCreateNestedManyWithoutUserInput = TaskCreateNestedManyWithoutUserInput;
