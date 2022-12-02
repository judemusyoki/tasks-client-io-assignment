"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskUpdateManyWithoutParentNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateManyParentInputEnvelope_1 = require("../inputs/TaskCreateManyParentInputEnvelope");
const TaskCreateOrConnectWithoutParentInput_1 = require("../inputs/TaskCreateOrConnectWithoutParentInput");
const TaskCreateWithoutParentInput_1 = require("../inputs/TaskCreateWithoutParentInput");
const TaskScalarWhereInput_1 = require("../inputs/TaskScalarWhereInput");
const TaskUpdateManyWithWhereWithoutParentInput_1 = require("../inputs/TaskUpdateManyWithWhereWithoutParentInput");
const TaskUpdateWithWhereUniqueWithoutParentInput_1 = require("../inputs/TaskUpdateWithWhereUniqueWithoutParentInput");
const TaskUpsertWithWhereUniqueWithoutParentInput_1 = require("../inputs/TaskUpsertWithWhereUniqueWithoutParentInput");
const TaskWhereUniqueInput_1 = require("../inputs/TaskWhereUniqueInput");
let TaskUpdateManyWithoutParentNestedInput = class TaskUpdateManyWithoutParentNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskCreateWithoutParentInput_1.TaskCreateWithoutParentInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskUpdateManyWithoutParentNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskCreateOrConnectWithoutParentInput_1.TaskCreateOrConnectWithoutParentInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskUpdateManyWithoutParentNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskUpsertWithWhereUniqueWithoutParentInput_1.TaskUpsertWithWhereUniqueWithoutParentInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskUpdateManyWithoutParentNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateManyParentInputEnvelope_1.TaskCreateManyParentInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskCreateManyParentInputEnvelope_1.TaskCreateManyParentInputEnvelope)
], TaskUpdateManyWithoutParentNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskWhereUniqueInput_1.TaskWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskUpdateManyWithoutParentNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskWhereUniqueInput_1.TaskWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskUpdateManyWithoutParentNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskWhereUniqueInput_1.TaskWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskUpdateManyWithoutParentNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskWhereUniqueInput_1.TaskWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskUpdateManyWithoutParentNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskUpdateWithWhereUniqueWithoutParentInput_1.TaskUpdateWithWhereUniqueWithoutParentInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskUpdateManyWithoutParentNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskUpdateManyWithWhereWithoutParentInput_1.TaskUpdateManyWithWhereWithoutParentInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskUpdateManyWithoutParentNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskScalarWhereInput_1.TaskScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskUpdateManyWithoutParentNestedInput.prototype, "deleteMany", void 0);
TaskUpdateManyWithoutParentNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskUpdateManyWithoutParentNestedInput", {
        isAbstract: true
    })
], TaskUpdateManyWithoutParentNestedInput);
exports.TaskUpdateManyWithoutParentNestedInput = TaskUpdateManyWithoutParentNestedInput;
