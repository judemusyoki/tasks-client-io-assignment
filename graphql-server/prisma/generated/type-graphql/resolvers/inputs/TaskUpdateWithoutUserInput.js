"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskUpdateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const EnumPriorityFieldUpdateOperationsInput_1 = require("../inputs/EnumPriorityFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TaskUpdateManyWithoutParentNestedInput_1 = require("../inputs/TaskUpdateManyWithoutParentNestedInput");
const TaskUpdateOneWithoutChildrenNestedInput_1 = require("../inputs/TaskUpdateOneWithoutChildrenNestedInput");
let TaskUpdateWithoutUserInput = class TaskUpdateWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TaskUpdateWithoutUserInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TaskUpdateWithoutUserInput.prototype, "subtitle", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TaskUpdateWithoutUserInput.prototype, "notes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], TaskUpdateWithoutUserInput.prototype, "completed", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumPriorityFieldUpdateOperationsInput_1.EnumPriorityFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumPriorityFieldUpdateOperationsInput_1.EnumPriorityFieldUpdateOperationsInput)
], TaskUpdateWithoutUserInput.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskUpdateOneWithoutChildrenNestedInput_1.TaskUpdateOneWithoutChildrenNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskUpdateOneWithoutChildrenNestedInput_1.TaskUpdateOneWithoutChildrenNestedInput)
], TaskUpdateWithoutUserInput.prototype, "parent", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskUpdateManyWithoutParentNestedInput_1.TaskUpdateManyWithoutParentNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskUpdateManyWithoutParentNestedInput_1.TaskUpdateManyWithoutParentNestedInput)
], TaskUpdateWithoutUserInput.prototype, "children", void 0);
TaskUpdateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskUpdateWithoutUserInput", {
        isAbstract: true
    })
], TaskUpdateWithoutUserInput);
exports.TaskUpdateWithoutUserInput = TaskUpdateWithoutUserInput;
