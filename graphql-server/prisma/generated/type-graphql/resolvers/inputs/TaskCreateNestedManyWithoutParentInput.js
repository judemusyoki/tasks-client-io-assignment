"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCreateNestedManyWithoutParentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateManyParentInputEnvelope_1 = require("../inputs/TaskCreateManyParentInputEnvelope");
const TaskCreateOrConnectWithoutParentInput_1 = require("../inputs/TaskCreateOrConnectWithoutParentInput");
const TaskCreateWithoutParentInput_1 = require("../inputs/TaskCreateWithoutParentInput");
const TaskWhereUniqueInput_1 = require("../inputs/TaskWhereUniqueInput");
let TaskCreateNestedManyWithoutParentInput = class TaskCreateNestedManyWithoutParentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskCreateWithoutParentInput_1.TaskCreateWithoutParentInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskCreateNestedManyWithoutParentInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskCreateOrConnectWithoutParentInput_1.TaskCreateOrConnectWithoutParentInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskCreateNestedManyWithoutParentInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateManyParentInputEnvelope_1.TaskCreateManyParentInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskCreateManyParentInputEnvelope_1.TaskCreateManyParentInputEnvelope)
], TaskCreateNestedManyWithoutParentInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskWhereUniqueInput_1.TaskWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskCreateNestedManyWithoutParentInput.prototype, "connect", void 0);
TaskCreateNestedManyWithoutParentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskCreateNestedManyWithoutParentInput", {
        isAbstract: true
    })
], TaskCreateNestedManyWithoutParentInput);
exports.TaskCreateNestedManyWithoutParentInput = TaskCreateNestedManyWithoutParentInput;
