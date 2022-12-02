"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutTasksInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let UserCreateWithoutTasksInput = class UserCreateWithoutTasksInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutTasksInput.prototype, "userName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutTasksInput.prototype, "createdAt", void 0);
UserCreateWithoutTasksInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateWithoutTasksInput", {
        isAbstract: true
    })
], UserCreateWithoutTasksInput);
exports.UserCreateWithoutTasksInput = UserCreateWithoutTasksInput;
