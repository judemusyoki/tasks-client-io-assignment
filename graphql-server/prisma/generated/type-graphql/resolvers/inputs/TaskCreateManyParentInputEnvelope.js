"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCreateManyParentInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateManyParentInput_1 = require("../inputs/TaskCreateManyParentInput");
let TaskCreateManyParentInputEnvelope = class TaskCreateManyParentInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskCreateManyParentInput_1.TaskCreateManyParentInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], TaskCreateManyParentInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], TaskCreateManyParentInputEnvelope.prototype, "skipDuplicates", void 0);
TaskCreateManyParentInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskCreateManyParentInputEnvelope", {
        isAbstract: true
    })
], TaskCreateManyParentInputEnvelope);
exports.TaskCreateManyParentInputEnvelope = TaskCreateManyParentInputEnvelope;
