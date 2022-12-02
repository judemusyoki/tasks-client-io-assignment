"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyRelationResolversEnhanceMap = exports.applyArgsTypesEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const tslib_1 = require("tslib");
const tslib = tslib_1.__importStar(require("tslib"));
const crudResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-crud.index"));
const argsTypes = tslib_1.__importStar(require("./resolvers/crud/args.index"));
const actionResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-actions.index"));
const relationResolvers = tslib_1.__importStar(require("./resolvers/relations/resolvers.index"));
const models = tslib_1.__importStar(require("./models"));
const outputTypes = tslib_1.__importStar(require("./resolvers/outputs"));
const inputTypes = tslib_1.__importStar(require("./resolvers/inputs"));
const crudResolversMap = {
    User: crudResolvers.UserCrudResolver,
    Task: crudResolvers.TaskCrudResolver
};
const actionResolversMap = {
    User: {
        aggregateUser: actionResolvers.AggregateUserResolver,
        createManyUser: actionResolvers.CreateManyUserResolver,
        createOneUser: actionResolvers.CreateOneUserResolver,
        deleteManyUser: actionResolvers.DeleteManyUserResolver,
        deleteOneUser: actionResolvers.DeleteOneUserResolver,
        findFirstUser: actionResolvers.FindFirstUserResolver,
        findFirstUserOrThrow: actionResolvers.FindFirstUserOrThrowResolver,
        users: actionResolvers.FindManyUserResolver,
        user: actionResolvers.FindUniqueUserResolver,
        getUser: actionResolvers.FindUniqueUserOrThrowResolver,
        groupByUser: actionResolvers.GroupByUserResolver,
        updateManyUser: actionResolvers.UpdateManyUserResolver,
        updateOneUser: actionResolvers.UpdateOneUserResolver,
        upsertOneUser: actionResolvers.UpsertOneUserResolver
    },
    Task: {
        aggregateTask: actionResolvers.AggregateTaskResolver,
        createManyTask: actionResolvers.CreateManyTaskResolver,
        createOneTask: actionResolvers.CreateOneTaskResolver,
        deleteManyTask: actionResolvers.DeleteManyTaskResolver,
        deleteOneTask: actionResolvers.DeleteOneTaskResolver,
        findFirstTask: actionResolvers.FindFirstTaskResolver,
        findFirstTaskOrThrow: actionResolvers.FindFirstTaskOrThrowResolver,
        tasks: actionResolvers.FindManyTaskResolver,
        task: actionResolvers.FindUniqueTaskResolver,
        getTask: actionResolvers.FindUniqueTaskOrThrowResolver,
        groupByTask: actionResolvers.GroupByTaskResolver,
        updateManyTask: actionResolvers.UpdateManyTaskResolver,
        updateOneTask: actionResolvers.UpdateOneTaskResolver,
        upsertOneTask: actionResolvers.UpsertOneTaskResolver
    }
};
const crudResolversInfo = {
    User: ["aggregateUser", "createManyUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "user", "getUser", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
    Task: ["aggregateTask", "createManyTask", "createOneTask", "deleteManyTask", "deleteOneTask", "findFirstTask", "findFirstTaskOrThrow", "tasks", "task", "getTask", "groupByTask", "updateManyTask", "updateOneTask", "upsertOneTask"]
};
const argsInfo = {
    AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyUserArgs: ["data", "skipDuplicates"],
    CreateOneUserArgs: ["data"],
    DeleteManyUserArgs: ["where"],
    DeleteOneUserArgs: ["where"],
    FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstUserOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueUserArgs: ["where"],
    FindUniqueUserOrThrowArgs: ["where"],
    GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyUserArgs: ["data", "where"],
    UpdateOneUserArgs: ["data", "where"],
    UpsertOneUserArgs: ["where", "create", "update"],
    AggregateTaskArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyTaskArgs: ["data", "skipDuplicates"],
    CreateOneTaskArgs: ["data"],
    DeleteManyTaskArgs: ["where"],
    DeleteOneTaskArgs: ["where"],
    FindFirstTaskArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstTaskOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyTaskArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueTaskArgs: ["where"],
    FindUniqueTaskOrThrowArgs: ["where"],
    GroupByTaskArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyTaskArgs: ["data", "where"],
    UpdateOneTaskArgs: ["data", "where"],
    UpsertOneTaskArgs: ["where", "create", "update"]
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        if (resolverActionsConfig._all) {
            const allActionsDecorators = resolverActionsConfig._all;
            const resolverActionNames = crudResolversInfo[modelName];
            for (const resolverActionName of resolverActionNames) {
                const actionTarget = actionResolversConfig[resolverActionName].prototype;
                tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
                tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
            }
        }
        const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(it => it !== "_all");
        for (const resolverActionName of resolverActionsToApply) {
            const decorators = resolverActionsConfig[resolverActionName];
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            tslib.__decorate(decorators, crudTarget, resolverActionName, null);
            tslib.__decorate(decorators, actionTarget, resolverActionName, null);
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
const relationResolversMap = {
    User: relationResolvers.UserRelationsResolver,
    Task: relationResolvers.TaskRelationsResolver
};
const relationResolversInfo = {
    User: ["tasks"],
    Task: ["parent", "children", "user"]
};
function applyRelationResolversEnhanceMap(relationResolversEnhanceMap) {
    for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
        const modelName = relationResolversEnhanceMapKey;
        const relationResolverTarget = relationResolversMap[modelName].prototype;
        const relationResolverActionsConfig = relationResolversEnhanceMap[modelName];
        if (relationResolverActionsConfig._all) {
            const allActionsDecorators = relationResolverActionsConfig._all;
            const relationResolverActionNames = relationResolversInfo[modelName];
            for (const relationResolverActionName of relationResolverActionNames) {
                tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
            }
        }
        const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(it => it !== "_all");
        for (const relationResolverActionName of relationResolverActionsToApply) {
            const decorators = relationResolverActionsConfig[relationResolverActionName];
            tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
        }
    }
}
exports.applyRelationResolversEnhanceMap = applyRelationResolversEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    if (enhanceConfig.class) {
        tslib.__decorate(enhanceConfig.class, typeClass);
    }
    if (enhanceConfig.fields) {
        if (enhanceConfig.fields._all) {
            const allFieldsDecorators = enhanceConfig.fields._all;
            for (const typeFieldName of typeFieldNames) {
                tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
            }
        }
        const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(it => it !== "_all");
        for (const typeFieldName of configFieldsToApply) {
            const fieldDecorators = enhanceConfig.fields[typeFieldName];
            tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
        }
    }
}
const modelsInfo = {
    User: ["id", "userName", "createdAt"],
    Task: ["id", "title", "subtitle", "notes", "completed", "priority", "parentId", "userId"]
};
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
const outputsInfo = {
    AggregateUser: ["_count", "_avg", "_sum", "_min", "_max"],
    UserGroupBy: ["id", "userName", "createdAt", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateTask: ["_count", "_avg", "_sum", "_min", "_max"],
    TaskGroupBy: ["id", "title", "subtitle", "notes", "completed", "priority", "parentId", "userId", "_count", "_avg", "_sum", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    UserCount: ["tasks"],
    UserCountAggregate: ["id", "userName", "createdAt", "_all"],
    UserAvgAggregate: ["id"],
    UserSumAggregate: ["id"],
    UserMinAggregate: ["id", "userName", "createdAt"],
    UserMaxAggregate: ["id", "userName", "createdAt"],
    TaskCount: ["children"],
    TaskCountAggregate: ["id", "title", "subtitle", "notes", "completed", "priority", "parentId", "userId", "_all"],
    TaskAvgAggregate: ["id", "parentId", "userId"],
    TaskSumAggregate: ["id", "parentId", "userId"],
    TaskMinAggregate: ["id", "title", "subtitle", "notes", "completed", "priority", "parentId", "userId"],
    TaskMaxAggregate: ["id", "title", "subtitle", "notes", "completed", "priority", "parentId", "userId"]
};
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
const inputsInfo = {
    UserWhereInput: ["AND", "OR", "NOT", "id", "userName", "createdAt", "tasks"],
    UserOrderByWithRelationInput: ["id", "userName", "createdAt", "tasks"],
    UserWhereUniqueInput: ["id"],
    UserOrderByWithAggregationInput: ["id", "userName", "createdAt", "_count", "_avg", "_max", "_min", "_sum"],
    UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userName", "createdAt"],
    TaskWhereInput: ["AND", "OR", "NOT", "id", "title", "subtitle", "notes", "completed", "priority", "parentId", "parent", "children", "userId", "user"],
    TaskOrderByWithRelationInput: ["id", "title", "subtitle", "notes", "completed", "priority", "parentId", "parent", "children", "userId", "user"],
    TaskWhereUniqueInput: ["id"],
    TaskOrderByWithAggregationInput: ["id", "title", "subtitle", "notes", "completed", "priority", "parentId", "userId", "_count", "_avg", "_max", "_min", "_sum"],
    TaskScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "subtitle", "notes", "completed", "priority", "parentId", "userId"],
    UserCreateInput: ["userName", "createdAt", "tasks"],
    UserUpdateInput: ["userName", "createdAt", "tasks"],
    UserCreateManyInput: ["id", "userName", "createdAt"],
    UserUpdateManyMutationInput: ["userName", "createdAt"],
    TaskCreateInput: ["title", "subtitle", "notes", "completed", "priority", "parent", "children", "user"],
    TaskUpdateInput: ["title", "subtitle", "notes", "completed", "priority", "parent", "children", "user"],
    TaskCreateManyInput: ["id", "title", "subtitle", "notes", "completed", "priority", "parentId", "userId"],
    TaskUpdateManyMutationInput: ["title", "subtitle", "notes", "completed", "priority"],
    IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    TaskListRelationFilter: ["every", "some", "none"],
    TaskOrderByRelationAggregateInput: ["_count"],
    UserCountOrderByAggregateInput: ["id", "userName", "createdAt"],
    UserAvgOrderByAggregateInput: ["id"],
    UserMaxOrderByAggregateInput: ["id", "userName", "createdAt"],
    UserMinOrderByAggregateInput: ["id", "userName", "createdAt"],
    UserSumOrderByAggregateInput: ["id"],
    IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    BoolFilter: ["equals", "not"],
    EnumPriorityFilter: ["equals", "in", "notIn", "not"],
    IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    TaskRelationFilter: ["is", "isNot"],
    UserRelationFilter: ["is", "isNot"],
    TaskCountOrderByAggregateInput: ["id", "title", "subtitle", "notes", "completed", "priority", "parentId", "userId"],
    TaskAvgOrderByAggregateInput: ["id", "parentId", "userId"],
    TaskMaxOrderByAggregateInput: ["id", "title", "subtitle", "notes", "completed", "priority", "parentId", "userId"],
    TaskMinOrderByAggregateInput: ["id", "title", "subtitle", "notes", "completed", "priority", "parentId", "userId"],
    TaskSumOrderByAggregateInput: ["id", "parentId", "userId"],
    StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
    EnumPriorityWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    TaskCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    StringFieldUpdateOperationsInput: ["set"],
    DateTimeFieldUpdateOperationsInput: ["set"],
    TaskUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    TaskCreateNestedOneWithoutChildrenInput: ["create", "connectOrCreate", "connect"],
    TaskCreateNestedManyWithoutParentInput: ["create", "connectOrCreate", "createMany", "connect"],
    UserCreateNestedOneWithoutTasksInput: ["create", "connectOrCreate", "connect"],
    NullableStringFieldUpdateOperationsInput: ["set"],
    BoolFieldUpdateOperationsInput: ["set"],
    EnumPriorityFieldUpdateOperationsInput: ["set"],
    TaskUpdateOneWithoutChildrenNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
    TaskUpdateManyWithoutParentNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    UserUpdateOneRequiredWithoutTasksNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedBoolFilter: ["equals", "not"],
    NestedEnumPriorityFilter: ["equals", "in", "notIn", "not"],
    NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
    NestedEnumPriorityWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    TaskCreateWithoutUserInput: ["title", "subtitle", "notes", "completed", "priority", "parent", "children"],
    TaskCreateOrConnectWithoutUserInput: ["where", "create"],
    TaskCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
    TaskUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    TaskUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    TaskUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    TaskScalarWhereInput: ["AND", "OR", "NOT", "id", "title", "subtitle", "notes", "completed", "priority", "parentId", "userId"],
    TaskCreateWithoutChildrenInput: ["title", "subtitle", "notes", "completed", "priority", "parent", "user"],
    TaskCreateOrConnectWithoutChildrenInput: ["where", "create"],
    TaskCreateWithoutParentInput: ["title", "subtitle", "notes", "completed", "priority", "children", "user"],
    TaskCreateOrConnectWithoutParentInput: ["where", "create"],
    TaskCreateManyParentInputEnvelope: ["data", "skipDuplicates"],
    UserCreateWithoutTasksInput: ["userName", "createdAt"],
    UserCreateOrConnectWithoutTasksInput: ["where", "create"],
    TaskUpsertWithoutChildrenInput: ["update", "create"],
    TaskUpdateWithoutChildrenInput: ["title", "subtitle", "notes", "completed", "priority", "parent", "user"],
    TaskUpsertWithWhereUniqueWithoutParentInput: ["where", "update", "create"],
    TaskUpdateWithWhereUniqueWithoutParentInput: ["where", "data"],
    TaskUpdateManyWithWhereWithoutParentInput: ["where", "data"],
    UserUpsertWithoutTasksInput: ["update", "create"],
    UserUpdateWithoutTasksInput: ["userName", "createdAt"],
    TaskCreateManyUserInput: ["id", "title", "subtitle", "notes", "completed", "priority", "parentId"],
    TaskUpdateWithoutUserInput: ["title", "subtitle", "notes", "completed", "priority", "parent", "children"],
    TaskCreateManyParentInput: ["id", "title", "subtitle", "notes", "completed", "priority", "userId"],
    TaskUpdateWithoutParentInput: ["title", "subtitle", "notes", "completed", "priority", "children", "user"]
};
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
