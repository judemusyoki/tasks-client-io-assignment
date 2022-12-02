"use strict";
var NestedEnumPriorityFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumPriorityFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Priority_1 = require("../../enums/Priority");
let NestedEnumPriorityFilter = NestedEnumPriorityFilter_1 = class NestedEnumPriorityFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Priority_1.Priority, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumPriorityFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Priority_1.Priority], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumPriorityFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Priority_1.Priority], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumPriorityFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPriorityFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPriorityFilter)
], NestedEnumPriorityFilter.prototype, "not", void 0);
NestedEnumPriorityFilter = NestedEnumPriorityFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumPriorityFilter", {
        isAbstract: true
    })
], NestedEnumPriorityFilter);
exports.NestedEnumPriorityFilter = NestedEnumPriorityFilter;
