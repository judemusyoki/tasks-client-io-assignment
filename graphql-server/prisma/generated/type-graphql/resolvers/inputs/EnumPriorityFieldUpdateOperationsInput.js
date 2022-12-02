"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumPriorityFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Priority_1 = require("../../enums/Priority");
let EnumPriorityFieldUpdateOperationsInput = class EnumPriorityFieldUpdateOperationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Priority_1.Priority, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumPriorityFieldUpdateOperationsInput.prototype, "set", void 0);
EnumPriorityFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumPriorityFieldUpdateOperationsInput", {
        isAbstract: true
    })
], EnumPriorityFieldUpdateOperationsInput);
exports.EnumPriorityFieldUpdateOperationsInput = EnumPriorityFieldUpdateOperationsInput;
