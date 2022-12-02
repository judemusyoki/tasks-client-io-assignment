"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutTasksNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutTasksInput_1 = require("../inputs/UserCreateOrConnectWithoutTasksInput");
const UserCreateWithoutTasksInput_1 = require("../inputs/UserCreateWithoutTasksInput");
const UserUpdateWithoutTasksInput_1 = require("../inputs/UserUpdateWithoutTasksInput");
const UserUpsertWithoutTasksInput_1 = require("../inputs/UserUpsertWithoutTasksInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutTasksNestedInput = class UserUpdateOneRequiredWithoutTasksNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutTasksInput_1.UserCreateWithoutTasksInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutTasksInput_1.UserCreateWithoutTasksInput)
], UserUpdateOneRequiredWithoutTasksNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutTasksInput_1.UserCreateOrConnectWithoutTasksInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutTasksInput_1.UserCreateOrConnectWithoutTasksInput)
], UserUpdateOneRequiredWithoutTasksNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutTasksInput_1.UserUpsertWithoutTasksInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutTasksInput_1.UserUpsertWithoutTasksInput)
], UserUpdateOneRequiredWithoutTasksNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutTasksNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutTasksInput_1.UserUpdateWithoutTasksInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutTasksInput_1.UserUpdateWithoutTasksInput)
], UserUpdateOneRequiredWithoutTasksNestedInput.prototype, "update", void 0);
UserUpdateOneRequiredWithoutTasksNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutTasksNestedInput", {
        isAbstract: true
    })
], UserUpdateOneRequiredWithoutTasksNestedInput);
exports.UserUpdateOneRequiredWithoutTasksNestedInput = UserUpdateOneRequiredWithoutTasksNestedInput;
