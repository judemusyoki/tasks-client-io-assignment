"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskUpdateManyWithWhereWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskScalarWhereInput_1 = require("../inputs/TaskScalarWhereInput");
const TaskUpdateManyMutationInput_1 = require("../inputs/TaskUpdateManyMutationInput");
let TaskUpdateManyWithWhereWithoutUserInput = class TaskUpdateManyWithWhereWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskScalarWhereInput_1.TaskScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskScalarWhereInput_1.TaskScalarWhereInput)
], TaskUpdateManyWithWhereWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskUpdateManyMutationInput_1.TaskUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskUpdateManyMutationInput_1.TaskUpdateManyMutationInput)
], TaskUpdateManyWithWhereWithoutUserInput.prototype, "data", void 0);
TaskUpdateManyWithWhereWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskUpdateManyWithWhereWithoutUserInput", {
        isAbstract: true
    })
], TaskUpdateManyWithWhereWithoutUserInput);
exports.TaskUpdateManyWithWhereWithoutUserInput = TaskUpdateManyWithWhereWithoutUserInput;
