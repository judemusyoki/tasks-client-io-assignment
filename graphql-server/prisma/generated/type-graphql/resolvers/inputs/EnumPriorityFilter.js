"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumPriorityFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumPriorityFilter_1 = require("../inputs/NestedEnumPriorityFilter");
const Priority_1 = require("../../enums/Priority");
let EnumPriorityFilter = class EnumPriorityFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Priority_1.Priority, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumPriorityFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Priority_1.Priority], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumPriorityFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Priority_1.Priority], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumPriorityFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPriorityFilter_1.NestedEnumPriorityFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPriorityFilter_1.NestedEnumPriorityFilter)
], EnumPriorityFilter.prototype, "not", void 0);
EnumPriorityFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumPriorityFilter", {
        isAbstract: true
    })
], EnumPriorityFilter);
exports.EnumPriorityFilter = EnumPriorityFilter;
