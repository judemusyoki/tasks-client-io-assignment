"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutTasksInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutTasksInput_1 = require("../inputs/UserCreateWithoutTasksInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutTasksInput = class UserCreateOrConnectWithoutTasksInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutTasksInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutTasksInput_1.UserCreateWithoutTasksInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutTasksInput_1.UserCreateWithoutTasksInput)
], UserCreateOrConnectWithoutTasksInput.prototype, "create", void 0);
UserCreateOrConnectWithoutTasksInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutTasksInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutTasksInput);
exports.UserCreateOrConnectWithoutTasksInput = UserCreateOrConnectWithoutTasksInput;
