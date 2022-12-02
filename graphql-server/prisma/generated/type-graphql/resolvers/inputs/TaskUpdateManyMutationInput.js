"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const EnumPriorityFieldUpdateOperationsInput_1 = require("../inputs/EnumPriorityFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let TaskUpdateManyMutationInput = class TaskUpdateManyMutationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TaskUpdateManyMutationInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TaskUpdateManyMutationInput.prototype, "subtitle", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TaskUpdateManyMutationInput.prototype, "notes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], TaskUpdateManyMutationInput.prototype, "completed", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumPriorityFieldUpdateOperationsInput_1.EnumPriorityFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumPriorityFieldUpdateOperationsInput_1.EnumPriorityFieldUpdateOperationsInput)
], TaskUpdateManyMutationInput.prototype, "priority", void 0);
TaskUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskUpdateManyMutationInput", {
        isAbstract: true
    })
], TaskUpdateManyMutationInput);
exports.TaskUpdateManyMutationInput = TaskUpdateManyMutationInput;
