"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutTasksInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutTasksInput_1 = require("../inputs/UserCreateOrConnectWithoutTasksInput");
const UserCreateWithoutTasksInput_1 = require("../inputs/UserCreateWithoutTasksInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutTasksInput = class UserCreateNestedOneWithoutTasksInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutTasksInput_1.UserCreateWithoutTasksInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutTasksInput_1.UserCreateWithoutTasksInput)
], UserCreateNestedOneWithoutTasksInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutTasksInput_1.UserCreateOrConnectWithoutTasksInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutTasksInput_1.UserCreateOrConnectWithoutTasksInput)
], UserCreateNestedOneWithoutTasksInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutTasksInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutTasksInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutTasksInput", {
        isAbstract: true
    })
], UserCreateNestedOneWithoutTasksInput);
exports.UserCreateNestedOneWithoutTasksInput = UserCreateNestedOneWithoutTasksInput;
