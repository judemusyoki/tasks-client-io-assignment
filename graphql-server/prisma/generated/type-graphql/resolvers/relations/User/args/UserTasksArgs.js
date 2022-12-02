"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTasksArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskOrderByWithRelationInput_1 = require("../../../inputs/TaskOrderByWithRelationInput");
const TaskWhereInput_1 = require("../../../inputs/TaskWhereInput");
const TaskWhereUniqueInput_1 = require("../../../inputs/TaskWhereUniqueInput");
const TaskScalarFieldEnum_1 = require("../../../../enums/TaskScalarFieldEnum");
let UserTasksArgs = class UserTasksArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskWhereInput_1.TaskWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskWhereInput_1.TaskWhereInput)
], UserTasksArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskOrderByWithRelationInput_1.TaskOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserTasksArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskWhereUniqueInput_1.TaskWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskWhereUniqueInput_1.TaskWhereUniqueInput)
], UserTasksArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserTasksArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserTasksArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskScalarFieldEnum_1.TaskScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserTasksArgs.prototype, "distinct", void 0);
UserTasksArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UserTasksArgs);
exports.UserTasksArgs = UserTasksArgs;
