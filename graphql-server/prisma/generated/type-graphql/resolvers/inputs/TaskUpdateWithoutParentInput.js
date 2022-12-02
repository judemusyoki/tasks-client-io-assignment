"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskUpdateWithoutParentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const EnumPriorityFieldUpdateOperationsInput_1 = require("../inputs/EnumPriorityFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TaskUpdateManyWithoutParentNestedInput_1 = require("../inputs/TaskUpdateManyWithoutParentNestedInput");
const UserUpdateOneRequiredWithoutTasksNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutTasksNestedInput");
let TaskUpdateWithoutParentInput = class TaskUpdateWithoutParentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TaskUpdateWithoutParentInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TaskUpdateWithoutParentInput.prototype, "subtitle", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TaskUpdateWithoutParentInput.prototype, "notes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], TaskUpdateWithoutParentInput.prototype, "completed", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumPriorityFieldUpdateOperationsInput_1.EnumPriorityFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumPriorityFieldUpdateOperationsInput_1.EnumPriorityFieldUpdateOperationsInput)
], TaskUpdateWithoutParentInput.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskUpdateManyWithoutParentNestedInput_1.TaskUpdateManyWithoutParentNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskUpdateManyWithoutParentNestedInput_1.TaskUpdateManyWithoutParentNestedInput)
], TaskUpdateWithoutParentInput.prototype, "children", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutTasksNestedInput_1.UserUpdateOneRequiredWithoutTasksNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutTasksNestedInput_1.UserUpdateOneRequiredWithoutTasksNestedInput)
], TaskUpdateWithoutParentInput.prototype, "user", void 0);
TaskUpdateWithoutParentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskUpdateWithoutParentInput", {
        isAbstract: true
    })
], TaskUpdateWithoutParentInput);
exports.TaskUpdateWithoutParentInput = TaskUpdateWithoutParentInput;
