"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Task_1 = require("../../../models/Task");
const User_1 = require("../../../models/User");
const TaskChildrenArgs_1 = require("./args/TaskChildrenArgs");
const helpers_1 = require("../../../helpers");
let TaskRelationsResolver = class TaskRelationsResolver {
    async parent(task, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).task.findUnique({
            where: {
                id: task.id,
            },
        }).parent({});
    }
    async children(task, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).task.findUnique({
            where: {
                id: task.id,
            },
        }).children(args);
    }
    async user(task, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).task.findUnique({
            where: {
                id: task.id,
            },
        }).user({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Task_1.Task, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Task_1.Task, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskRelationsResolver.prototype, "parent", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Task_1.Task], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Task_1.Task, Object, TaskChildrenArgs_1.TaskChildrenArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskRelationsResolver.prototype, "children", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Task_1.Task, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskRelationsResolver.prototype, "user", null);
TaskRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Task_1.Task)
], TaskRelationsResolver);
exports.TaskRelationsResolver = TaskRelationsResolver;
