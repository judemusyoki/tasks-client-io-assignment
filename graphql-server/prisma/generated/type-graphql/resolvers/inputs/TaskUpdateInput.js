"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const EnumPriorityFieldUpdateOperationsInput_1 = require("../inputs/EnumPriorityFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TaskUpdateManyWithoutParentNestedInput_1 = require("../inputs/TaskUpdateManyWithoutParentNestedInput");
const TaskUpdateOneWithoutChildrenNestedInput_1 = require("../inputs/TaskUpdateOneWithoutChildrenNestedInput");
const UserUpdateOneRequiredWithoutTasksNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutTasksNestedInput");
let TaskUpdateInput = class TaskUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TaskUpdateInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TaskUpdateInput.prototype, "subtitle", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TaskUpdateInput.prototype, "notes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], TaskUpdateInput.prototype, "completed", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumPriorityFieldUpdateOperationsInput_1.EnumPriorityFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumPriorityFieldUpdateOperationsInput_1.EnumPriorityFieldUpdateOperationsInput)
], TaskUpdateInput.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskUpdateOneWithoutChildrenNestedInput_1.TaskUpdateOneWithoutChildrenNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskUpdateOneWithoutChildrenNestedInput_1.TaskUpdateOneWithoutChildrenNestedInput)
], TaskUpdateInput.prototype, "parent", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskUpdateManyWithoutParentNestedInput_1.TaskUpdateManyWithoutParentNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskUpdateManyWithoutParentNestedInput_1.TaskUpdateManyWithoutParentNestedInput)
], TaskUpdateInput.prototype, "children", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutTasksNestedInput_1.UserUpdateOneRequiredWithoutTasksNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutTasksNestedInput_1.UserUpdateOneRequiredWithoutTasksNestedInput)
], TaskUpdateInput.prototype, "user", void 0);
TaskUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskUpdateInput", {
        isAbstract: true
    })
], TaskUpdateInput);
exports.TaskUpdateInput = TaskUpdateInput;
