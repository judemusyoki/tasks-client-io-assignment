"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskUpsertWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateWithoutUserInput_1 = require("../inputs/TaskCreateWithoutUserInput");
const TaskUpdateWithoutUserInput_1 = require("../inputs/TaskUpdateWithoutUserInput");
const TaskWhereUniqueInput_1 = require("../inputs/TaskWhereUniqueInput");
let TaskUpsertWithWhereUniqueWithoutUserInput = class TaskUpsertWithWhereUniqueWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskWhereUniqueInput_1.TaskWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskWhereUniqueInput_1.TaskWhereUniqueInput)
], TaskUpsertWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskUpdateWithoutUserInput_1.TaskUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskUpdateWithoutUserInput_1.TaskUpdateWithoutUserInput)
], TaskUpsertWithWhereUniqueWithoutUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateWithoutUserInput_1.TaskCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskCreateWithoutUserInput_1.TaskCreateWithoutUserInput)
], TaskUpsertWithWhereUniqueWithoutUserInput.prototype, "create", void 0);
TaskUpsertWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskUpsertWithWhereUniqueWithoutUserInput", {
        isAbstract: true
    })
], TaskUpsertWithWhereUniqueWithoutUserInput);
exports.TaskUpsertWithWhereUniqueWithoutUserInput = TaskUpsertWithWhereUniqueWithoutUserInput;
