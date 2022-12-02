"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskUpdateWithWhereUniqueWithoutParentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskUpdateWithoutParentInput_1 = require("../inputs/TaskUpdateWithoutParentInput");
const TaskWhereUniqueInput_1 = require("../inputs/TaskWhereUniqueInput");
let TaskUpdateWithWhereUniqueWithoutParentInput = class TaskUpdateWithWhereUniqueWithoutParentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskWhereUniqueInput_1.TaskWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskWhereUniqueInput_1.TaskWhereUniqueInput)
], TaskUpdateWithWhereUniqueWithoutParentInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskUpdateWithoutParentInput_1.TaskUpdateWithoutParentInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskUpdateWithoutParentInput_1.TaskUpdateWithoutParentInput)
], TaskUpdateWithWhereUniqueWithoutParentInput.prototype, "data", void 0);
TaskUpdateWithWhereUniqueWithoutParentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskUpdateWithWhereUniqueWithoutParentInput", {
        isAbstract: true
    })
], TaskUpdateWithWhereUniqueWithoutParentInput);
exports.TaskUpdateWithWhereUniqueWithoutParentInput = TaskUpdateWithWhereUniqueWithoutParentInput;
