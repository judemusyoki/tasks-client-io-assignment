"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutTasksInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutTasksInput_1 = require("../inputs/UserCreateWithoutTasksInput");
const UserUpdateWithoutTasksInput_1 = require("../inputs/UserUpdateWithoutTasksInput");
let UserUpsertWithoutTasksInput = class UserUpsertWithoutTasksInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutTasksInput_1.UserUpdateWithoutTasksInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutTasksInput_1.UserUpdateWithoutTasksInput)
], UserUpsertWithoutTasksInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutTasksInput_1.UserCreateWithoutTasksInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutTasksInput_1.UserCreateWithoutTasksInput)
], UserUpsertWithoutTasksInput.prototype, "create", void 0);
UserUpsertWithoutTasksInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutTasksInput", {
        isAbstract: true
    })
], UserUpsertWithoutTasksInput);
exports.UserUpsertWithoutTasksInput = UserUpsertWithoutTasksInput;
