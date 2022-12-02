"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskUpdateManyWithoutUserNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateManyUserInputEnvelope_1 = require("../inputs/TaskCreateManyUserInputEnvelope");
const TaskCreateOrConnectWithoutUserInput_1 = require("../inputs/TaskCreateOrConnectWithoutUserInput");
const TaskCreateWithoutUserInput_1 = require("../inputs/TaskCreateWithoutUserInput");
const TaskScalarWhereInput_1 = require("../inputs/TaskScalarWhereInput");
const TaskUpdateManyWithWhereWithoutUserInput_1 = require("../inputs/TaskUpdateManyWithWhereWithoutUserInput");
const TaskUpdateWithWhereUniqueWithoutUserInput_1 = require("../inputs/TaskUpdateWithWhereUniqueWithoutUserInput");
const TaskUpsertWithWhereUniqueWithoutUserInput_1 = require("../inputs/TaskUpsertWithWhereUniqueWithoutUserInput");
const TaskWhereUniqueInput_1 = require("../inputs/TaskWhereUniqueInput");
let TaskUpdateManyWithoutUserNestedInput = class TaskUpdateManyWithoutUserNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskCreateWithoutUserInput_1.TaskCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskUpdateManyWithoutUserNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskCreateOrConnectWithoutUserInput_1.TaskCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskUpdateManyWithoutUserNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskUpsertWithWhereUniqueWithoutUserInput_1.TaskUpsertWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskUpdateManyWithoutUserNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateManyUserInputEnvelope_1.TaskCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskCreateManyUserInputEnvelope_1.TaskCreateManyUserInputEnvelope)
], TaskUpdateManyWithoutUserNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskWhereUniqueInput_1.TaskWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskUpdateManyWithoutUserNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskWhereUniqueInput_1.TaskWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskUpdateManyWithoutUserNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskWhereUniqueInput_1.TaskWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskUpdateManyWithoutUserNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskWhereUniqueInput_1.TaskWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskUpdateManyWithoutUserNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskUpdateWithWhereUniqueWithoutUserInput_1.TaskUpdateWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskUpdateManyWithoutUserNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskUpdateManyWithWhereWithoutUserInput_1.TaskUpdateManyWithWhereWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskUpdateManyWithoutUserNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskScalarWhereInput_1.TaskScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskUpdateManyWithoutUserNestedInput.prototype, "deleteMany", void 0);
TaskUpdateManyWithoutUserNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskUpdateManyWithoutUserNestedInput", {
        isAbstract: true
    })
], TaskUpdateManyWithoutUserNestedInput);
exports.TaskUpdateManyWithoutUserNestedInput = TaskUpdateManyWithoutUserNestedInput;
