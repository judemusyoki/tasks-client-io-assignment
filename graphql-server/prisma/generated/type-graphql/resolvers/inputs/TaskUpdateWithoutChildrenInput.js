"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskUpdateWithoutChildrenInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const EnumPriorityFieldUpdateOperationsInput_1 = require("../inputs/EnumPriorityFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TaskUpdateOneWithoutChildrenNestedInput_1 = require("../inputs/TaskUpdateOneWithoutChildrenNestedInput");
const UserUpdateOneRequiredWithoutTasksNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutTasksNestedInput");
let TaskUpdateWithoutChildrenInput = class TaskUpdateWithoutChildrenInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TaskUpdateWithoutChildrenInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TaskUpdateWithoutChildrenInput.prototype, "subtitle", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TaskUpdateWithoutChildrenInput.prototype, "notes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], TaskUpdateWithoutChildrenInput.prototype, "completed", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumPriorityFieldUpdateOperationsInput_1.EnumPriorityFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumPriorityFieldUpdateOperationsInput_1.EnumPriorityFieldUpdateOperationsInput)
], TaskUpdateWithoutChildrenInput.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskUpdateOneWithoutChildrenNestedInput_1.TaskUpdateOneWithoutChildrenNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskUpdateOneWithoutChildrenNestedInput_1.TaskUpdateOneWithoutChildrenNestedInput)
], TaskUpdateWithoutChildrenInput.prototype, "parent", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutTasksNestedInput_1.UserUpdateOneRequiredWithoutTasksNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutTasksNestedInput_1.UserUpdateOneRequiredWithoutTasksNestedInput)
], TaskUpdateWithoutChildrenInput.prototype, "user", void 0);
TaskUpdateWithoutChildrenInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskUpdateWithoutChildrenInput", {
        isAbstract: true
    })
], TaskUpdateWithoutChildrenInput);
exports.TaskUpdateWithoutChildrenInput = TaskUpdateWithoutChildrenInput;
