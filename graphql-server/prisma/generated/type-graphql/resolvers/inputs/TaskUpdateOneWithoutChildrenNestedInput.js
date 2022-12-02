"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskUpdateOneWithoutChildrenNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateOrConnectWithoutChildrenInput_1 = require("../inputs/TaskCreateOrConnectWithoutChildrenInput");
const TaskCreateWithoutChildrenInput_1 = require("../inputs/TaskCreateWithoutChildrenInput");
const TaskUpdateWithoutChildrenInput_1 = require("../inputs/TaskUpdateWithoutChildrenInput");
const TaskUpsertWithoutChildrenInput_1 = require("../inputs/TaskUpsertWithoutChildrenInput");
const TaskWhereUniqueInput_1 = require("../inputs/TaskWhereUniqueInput");
let TaskUpdateOneWithoutChildrenNestedInput = class TaskUpdateOneWithoutChildrenNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateWithoutChildrenInput_1.TaskCreateWithoutChildrenInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskCreateWithoutChildrenInput_1.TaskCreateWithoutChildrenInput)
], TaskUpdateOneWithoutChildrenNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateOrConnectWithoutChildrenInput_1.TaskCreateOrConnectWithoutChildrenInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskCreateOrConnectWithoutChildrenInput_1.TaskCreateOrConnectWithoutChildrenInput)
], TaskUpdateOneWithoutChildrenNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskUpsertWithoutChildrenInput_1.TaskUpsertWithoutChildrenInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskUpsertWithoutChildrenInput_1.TaskUpsertWithoutChildrenInput)
], TaskUpdateOneWithoutChildrenNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], TaskUpdateOneWithoutChildrenNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], TaskUpdateOneWithoutChildrenNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskWhereUniqueInput_1.TaskWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskWhereUniqueInput_1.TaskWhereUniqueInput)
], TaskUpdateOneWithoutChildrenNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskUpdateWithoutChildrenInput_1.TaskUpdateWithoutChildrenInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskUpdateWithoutChildrenInput_1.TaskUpdateWithoutChildrenInput)
], TaskUpdateOneWithoutChildrenNestedInput.prototype, "update", void 0);
TaskUpdateOneWithoutChildrenNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskUpdateOneWithoutChildrenNestedInput", {
        isAbstract: true
    })
], TaskUpdateOneWithoutChildrenNestedInput);
exports.TaskUpdateOneWithoutChildrenNestedInput = TaskUpdateOneWithoutChildrenNestedInput;
