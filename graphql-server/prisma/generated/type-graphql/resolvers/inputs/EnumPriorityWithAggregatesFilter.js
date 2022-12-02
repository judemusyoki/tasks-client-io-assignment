"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumPriorityWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumPriorityFilter_1 = require("../inputs/NestedEnumPriorityFilter");
const NestedEnumPriorityWithAggregatesFilter_1 = require("../inputs/NestedEnumPriorityWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const Priority_1 = require("../../enums/Priority");
let EnumPriorityWithAggregatesFilter = class EnumPriorityWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Priority_1.Priority, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumPriorityWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Priority_1.Priority], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumPriorityWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Priority_1.Priority], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumPriorityWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPriorityWithAggregatesFilter_1.NestedEnumPriorityWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPriorityWithAggregatesFilter_1.NestedEnumPriorityWithAggregatesFilter)
], EnumPriorityWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumPriorityWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPriorityFilter_1.NestedEnumPriorityFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPriorityFilter_1.NestedEnumPriorityFilter)
], EnumPriorityWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPriorityFilter_1.NestedEnumPriorityFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPriorityFilter_1.NestedEnumPriorityFilter)
], EnumPriorityWithAggregatesFilter.prototype, "_max", void 0);
EnumPriorityWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumPriorityWithAggregatesFilter", {
        isAbstract: true
    })
], EnumPriorityWithAggregatesFilter);
exports.EnumPriorityWithAggregatesFilter = EnumPriorityWithAggregatesFilter;
