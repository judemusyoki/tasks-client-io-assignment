"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCreateManyUserInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateManyUserInput_1 = require("../inputs/TaskCreateManyUserInput");
let TaskCreateManyUserInputEnvelope = class TaskCreateManyUserInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskCreateManyUserInput_1.TaskCreateManyUserInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], TaskCreateManyUserInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], TaskCreateManyUserInputEnvelope.prototype, "skipDuplicates", void 0);
TaskCreateManyUserInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskCreateManyUserInputEnvelope", {
        isAbstract: true
    })
], TaskCreateManyUserInputEnvelope);
exports.TaskCreateManyUserInputEnvelope = TaskCreateManyUserInputEnvelope;
