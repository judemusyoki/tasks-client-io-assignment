"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCreateManyParentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Priority_1 = require("../../enums/Priority");
let TaskCreateManyParentInput = class TaskCreateManyParentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TaskCreateManyParentInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateManyParentInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateManyParentInput.prototype, "subtitle", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateManyParentInput.prototype, "notes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], TaskCreateManyParentInput.prototype, "completed", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Priority_1.Priority, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskCreateManyParentInput.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TaskCreateManyParentInput.prototype, "userId", void 0);
TaskCreateManyParentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskCreateManyParentInput", {
        isAbstract: true
    })
], TaskCreateManyParentInput);
exports.TaskCreateManyParentInput = TaskCreateManyParentInput;
