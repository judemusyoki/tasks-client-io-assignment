"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskUpdateWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskUpdateWithoutUserInput_1 = require("../inputs/TaskUpdateWithoutUserInput");
const TaskWhereUniqueInput_1 = require("../inputs/TaskWhereUniqueInput");
let TaskUpdateWithWhereUniqueWithoutUserInput = class TaskUpdateWithWhereUniqueWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskWhereUniqueInput_1.TaskWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskWhereUniqueInput_1.TaskWhereUniqueInput)
], TaskUpdateWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskUpdateWithoutUserInput_1.TaskUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskUpdateWithoutUserInput_1.TaskUpdateWithoutUserInput)
], TaskUpdateWithWhereUniqueWithoutUserInput.prototype, "data", void 0);
TaskUpdateWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskUpdateWithWhereUniqueWithoutUserInput", {
        isAbstract: true
    })
], TaskUpdateWithWhereUniqueWithoutUserInput);
exports.TaskUpdateWithWhereUniqueWithoutUserInput = TaskUpdateWithWhereUniqueWithoutUserInput;
