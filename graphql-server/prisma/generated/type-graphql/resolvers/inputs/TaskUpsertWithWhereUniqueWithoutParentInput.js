"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskUpsertWithWhereUniqueWithoutParentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateWithoutParentInput_1 = require("../inputs/TaskCreateWithoutParentInput");
const TaskUpdateWithoutParentInput_1 = require("../inputs/TaskUpdateWithoutParentInput");
const TaskWhereUniqueInput_1 = require("../inputs/TaskWhereUniqueInput");
let TaskUpsertWithWhereUniqueWithoutParentInput = class TaskUpsertWithWhereUniqueWithoutParentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskWhereUniqueInput_1.TaskWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskWhereUniqueInput_1.TaskWhereUniqueInput)
], TaskUpsertWithWhereUniqueWithoutParentInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskUpdateWithoutParentInput_1.TaskUpdateWithoutParentInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskUpdateWithoutParentInput_1.TaskUpdateWithoutParentInput)
], TaskUpsertWithWhereUniqueWithoutParentInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateWithoutParentInput_1.TaskCreateWithoutParentInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskCreateWithoutParentInput_1.TaskCreateWithoutParentInput)
], TaskUpsertWithWhereUniqueWithoutParentInput.prototype, "create", void 0);
TaskUpsertWithWhereUniqueWithoutParentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskUpsertWithWhereUniqueWithoutParentInput", {
        isAbstract: true
    })
], TaskUpsertWithWhereUniqueWithoutParentInput);
exports.TaskUpsertWithWhereUniqueWithoutParentInput = TaskUpsertWithWhereUniqueWithoutParentInput;
