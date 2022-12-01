import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'

export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  DateTime: any
}

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput'
  count: Scalars['Int']
}

export type AggregateTask = {
  __typename?: 'AggregateTask'
  _avg?: Maybe<TaskAvgAggregate>
  _count?: Maybe<TaskCountAggregate>
  _max?: Maybe<TaskMaxAggregate>
  _min?: Maybe<TaskMinAggregate>
  _sum?: Maybe<TaskSumAggregate>
}

export type AggregateUser = {
  __typename?: 'AggregateUser'
  _avg?: Maybe<UserAvgAggregate>
  _count?: Maybe<UserCountAggregate>
  _max?: Maybe<UserMaxAggregate>
  _min?: Maybe<UserMinAggregate>
  _sum?: Maybe<UserSumAggregate>
}

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>
}

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>
  not?: InputMaybe<NestedBoolFilter>
}

export type BoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>
  _max?: InputMaybe<NestedBoolFilter>
  _min?: InputMaybe<NestedBoolFilter>
  equals?: InputMaybe<Scalars['Boolean']>
  not?: InputMaybe<NestedBoolWithAggregatesFilter>
}

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>
}

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>
  gt?: InputMaybe<Scalars['DateTime']>
  gte?: InputMaybe<Scalars['DateTime']>
  in?: InputMaybe<Array<Scalars['DateTime']>>
  lt?: InputMaybe<Scalars['DateTime']>
  lte?: InputMaybe<Scalars['DateTime']>
  not?: InputMaybe<NestedDateTimeFilter>
  notIn?: InputMaybe<Array<Scalars['DateTime']>>
}

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>
  _max?: InputMaybe<NestedDateTimeFilter>
  _min?: InputMaybe<NestedDateTimeFilter>
  equals?: InputMaybe<Scalars['DateTime']>
  gt?: InputMaybe<Scalars['DateTime']>
  gte?: InputMaybe<Scalars['DateTime']>
  in?: InputMaybe<Array<Scalars['DateTime']>>
  lt?: InputMaybe<Scalars['DateTime']>
  lte?: InputMaybe<Scalars['DateTime']>
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>
  notIn?: InputMaybe<Array<Scalars['DateTime']>>
}

export type EnumPriorityFieldUpdateOperationsInput = {
  set?: InputMaybe<Priority>
}

export type EnumPriorityFilter = {
  equals?: InputMaybe<Priority>
  in?: InputMaybe<Array<Priority>>
  not?: InputMaybe<NestedEnumPriorityFilter>
  notIn?: InputMaybe<Array<Priority>>
}

export type EnumPriorityWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>
  _max?: InputMaybe<NestedEnumPriorityFilter>
  _min?: InputMaybe<NestedEnumPriorityFilter>
  equals?: InputMaybe<Priority>
  in?: InputMaybe<Array<Priority>>
  not?: InputMaybe<NestedEnumPriorityWithAggregatesFilter>
  notIn?: InputMaybe<Array<Priority>>
}

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>
  gt?: InputMaybe<Scalars['Int']>
  gte?: InputMaybe<Scalars['Int']>
  in?: InputMaybe<Array<Scalars['Int']>>
  lt?: InputMaybe<Scalars['Int']>
  lte?: InputMaybe<Scalars['Int']>
  not?: InputMaybe<NestedIntFilter>
  notIn?: InputMaybe<Array<Scalars['Int']>>
}

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>
  gt?: InputMaybe<Scalars['Int']>
  gte?: InputMaybe<Scalars['Int']>
  in?: InputMaybe<Array<Scalars['Int']>>
  lt?: InputMaybe<Scalars['Int']>
  lte?: InputMaybe<Scalars['Int']>
  not?: InputMaybe<NestedIntNullableFilter>
  notIn?: InputMaybe<Array<Scalars['Int']>>
}

export type IntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>
  _count?: InputMaybe<NestedIntNullableFilter>
  _max?: InputMaybe<NestedIntNullableFilter>
  _min?: InputMaybe<NestedIntNullableFilter>
  _sum?: InputMaybe<NestedIntNullableFilter>
  equals?: InputMaybe<Scalars['Int']>
  gt?: InputMaybe<Scalars['Int']>
  gte?: InputMaybe<Scalars['Int']>
  in?: InputMaybe<Array<Scalars['Int']>>
  lt?: InputMaybe<Scalars['Int']>
  lte?: InputMaybe<Scalars['Int']>
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>
  notIn?: InputMaybe<Array<Scalars['Int']>>
}

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>
  _count?: InputMaybe<NestedIntFilter>
  _max?: InputMaybe<NestedIntFilter>
  _min?: InputMaybe<NestedIntFilter>
  _sum?: InputMaybe<NestedIntFilter>
  equals?: InputMaybe<Scalars['Int']>
  gt?: InputMaybe<Scalars['Int']>
  gte?: InputMaybe<Scalars['Int']>
  in?: InputMaybe<Array<Scalars['Int']>>
  lt?: InputMaybe<Scalars['Int']>
  lte?: InputMaybe<Scalars['Int']>
  not?: InputMaybe<NestedIntWithAggregatesFilter>
  notIn?: InputMaybe<Array<Scalars['Int']>>
}

export type Mutation = {
  __typename?: 'Mutation'
  createManyTask: AffectedRowsOutput
  createManyUser: AffectedRowsOutput
  createOneTask: Task
  createOneUser: User
  deleteManyTask: AffectedRowsOutput
  deleteManyUser: AffectedRowsOutput
  deleteOneTask?: Maybe<Task>
  deleteOneUser?: Maybe<User>
  updateManyTask: AffectedRowsOutput
  updateManyUser: AffectedRowsOutput
  updateOneTask?: Maybe<Task>
  updateOneUser?: Maybe<User>
  upsertOneTask: Task
  upsertOneUser: User
}

export type MutationCreateManyTaskArgs = {
  data: Array<TaskCreateManyInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']>
}

export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']>
}

export type MutationCreateOneTaskArgs = {
  data: TaskCreateInput
}

export type MutationCreateOneUserArgs = {
  data: UserCreateInput
}

export type MutationDeleteManyTaskArgs = {
  where?: InputMaybe<TaskWhereInput>
}

export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>
}

export type MutationDeleteOneTaskArgs = {
  where: TaskWhereUniqueInput
}

export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput
}

export type MutationUpdateManyTaskArgs = {
  data: TaskUpdateManyMutationInput
  where?: InputMaybe<TaskWhereInput>
}

export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput
  where?: InputMaybe<UserWhereInput>
}

export type MutationUpdateOneTaskArgs = {
  data: TaskUpdateInput
  where: TaskWhereUniqueInput
}

export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput
  where: UserWhereUniqueInput
}

export type MutationUpsertOneTaskArgs = {
  create: TaskCreateInput
  update: TaskUpdateInput
  where: TaskWhereUniqueInput
}

export type MutationUpsertOneUserArgs = {
  create: UserCreateInput
  update: UserUpdateInput
  where: UserWhereUniqueInput
}

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>
  not?: InputMaybe<NestedBoolFilter>
}

export type NestedBoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>
  _max?: InputMaybe<NestedBoolFilter>
  _min?: InputMaybe<NestedBoolFilter>
  equals?: InputMaybe<Scalars['Boolean']>
  not?: InputMaybe<NestedBoolWithAggregatesFilter>
}

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>
  gt?: InputMaybe<Scalars['DateTime']>
  gte?: InputMaybe<Scalars['DateTime']>
  in?: InputMaybe<Array<Scalars['DateTime']>>
  lt?: InputMaybe<Scalars['DateTime']>
  lte?: InputMaybe<Scalars['DateTime']>
  not?: InputMaybe<NestedDateTimeFilter>
  notIn?: InputMaybe<Array<Scalars['DateTime']>>
}

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>
  _max?: InputMaybe<NestedDateTimeFilter>
  _min?: InputMaybe<NestedDateTimeFilter>
  equals?: InputMaybe<Scalars['DateTime']>
  gt?: InputMaybe<Scalars['DateTime']>
  gte?: InputMaybe<Scalars['DateTime']>
  in?: InputMaybe<Array<Scalars['DateTime']>>
  lt?: InputMaybe<Scalars['DateTime']>
  lte?: InputMaybe<Scalars['DateTime']>
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>
  notIn?: InputMaybe<Array<Scalars['DateTime']>>
}

export type NestedEnumPriorityFilter = {
  equals?: InputMaybe<Priority>
  in?: InputMaybe<Array<Priority>>
  not?: InputMaybe<NestedEnumPriorityFilter>
  notIn?: InputMaybe<Array<Priority>>
}

export type NestedEnumPriorityWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>
  _max?: InputMaybe<NestedEnumPriorityFilter>
  _min?: InputMaybe<NestedEnumPriorityFilter>
  equals?: InputMaybe<Priority>
  in?: InputMaybe<Array<Priority>>
  not?: InputMaybe<NestedEnumPriorityWithAggregatesFilter>
  notIn?: InputMaybe<Array<Priority>>
}

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']>
  gt?: InputMaybe<Scalars['Float']>
  gte?: InputMaybe<Scalars['Float']>
  in?: InputMaybe<Array<Scalars['Float']>>
  lt?: InputMaybe<Scalars['Float']>
  lte?: InputMaybe<Scalars['Float']>
  not?: InputMaybe<NestedFloatFilter>
  notIn?: InputMaybe<Array<Scalars['Float']>>
}

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']>
  gt?: InputMaybe<Scalars['Float']>
  gte?: InputMaybe<Scalars['Float']>
  in?: InputMaybe<Array<Scalars['Float']>>
  lt?: InputMaybe<Scalars['Float']>
  lte?: InputMaybe<Scalars['Float']>
  not?: InputMaybe<NestedFloatNullableFilter>
  notIn?: InputMaybe<Array<Scalars['Float']>>
}

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>
  gt?: InputMaybe<Scalars['Int']>
  gte?: InputMaybe<Scalars['Int']>
  in?: InputMaybe<Array<Scalars['Int']>>
  lt?: InputMaybe<Scalars['Int']>
  lte?: InputMaybe<Scalars['Int']>
  not?: InputMaybe<NestedIntFilter>
  notIn?: InputMaybe<Array<Scalars['Int']>>
}

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>
  gt?: InputMaybe<Scalars['Int']>
  gte?: InputMaybe<Scalars['Int']>
  in?: InputMaybe<Array<Scalars['Int']>>
  lt?: InputMaybe<Scalars['Int']>
  lte?: InputMaybe<Scalars['Int']>
  not?: InputMaybe<NestedIntNullableFilter>
  notIn?: InputMaybe<Array<Scalars['Int']>>
}

export type NestedIntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>
  _count?: InputMaybe<NestedIntNullableFilter>
  _max?: InputMaybe<NestedIntNullableFilter>
  _min?: InputMaybe<NestedIntNullableFilter>
  _sum?: InputMaybe<NestedIntNullableFilter>
  equals?: InputMaybe<Scalars['Int']>
  gt?: InputMaybe<Scalars['Int']>
  gte?: InputMaybe<Scalars['Int']>
  in?: InputMaybe<Array<Scalars['Int']>>
  lt?: InputMaybe<Scalars['Int']>
  lte?: InputMaybe<Scalars['Int']>
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>
  notIn?: InputMaybe<Array<Scalars['Int']>>
}

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>
  _count?: InputMaybe<NestedIntFilter>
  _max?: InputMaybe<NestedIntFilter>
  _min?: InputMaybe<NestedIntFilter>
  _sum?: InputMaybe<NestedIntFilter>
  equals?: InputMaybe<Scalars['Int']>
  gt?: InputMaybe<Scalars['Int']>
  gte?: InputMaybe<Scalars['Int']>
  in?: InputMaybe<Array<Scalars['Int']>>
  lt?: InputMaybe<Scalars['Int']>
  lte?: InputMaybe<Scalars['Int']>
  not?: InputMaybe<NestedIntWithAggregatesFilter>
  notIn?: InputMaybe<Array<Scalars['Int']>>
}

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>
  endsWith?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  gt?: InputMaybe<Scalars['String']>
  gte?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<Scalars['String']>>
  lt?: InputMaybe<Scalars['String']>
  lte?: InputMaybe<Scalars['String']>
  not?: InputMaybe<NestedStringFilter>
  notIn?: InputMaybe<Array<Scalars['String']>>
  startsWith?: InputMaybe<Scalars['String']>
}

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>
  endsWith?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  gt?: InputMaybe<Scalars['String']>
  gte?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<Scalars['String']>>
  lt?: InputMaybe<Scalars['String']>
  lte?: InputMaybe<Scalars['String']>
  not?: InputMaybe<NestedStringNullableFilter>
  notIn?: InputMaybe<Array<Scalars['String']>>
  startsWith?: InputMaybe<Scalars['String']>
}

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>
  _max?: InputMaybe<NestedStringNullableFilter>
  _min?: InputMaybe<NestedStringNullableFilter>
  contains?: InputMaybe<Scalars['String']>
  endsWith?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  gt?: InputMaybe<Scalars['String']>
  gte?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<Scalars['String']>>
  lt?: InputMaybe<Scalars['String']>
  lte?: InputMaybe<Scalars['String']>
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>
  notIn?: InputMaybe<Array<Scalars['String']>>
  startsWith?: InputMaybe<Scalars['String']>
}

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>
  _max?: InputMaybe<NestedStringFilter>
  _min?: InputMaybe<NestedStringFilter>
  contains?: InputMaybe<Scalars['String']>
  endsWith?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  gt?: InputMaybe<Scalars['String']>
  gte?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<Scalars['String']>>
  lt?: InputMaybe<Scalars['String']>
  lte?: InputMaybe<Scalars['String']>
  not?: InputMaybe<NestedStringWithAggregatesFilter>
  notIn?: InputMaybe<Array<Scalars['String']>>
  startsWith?: InputMaybe<Scalars['String']>
}

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>
}

export enum Priority {
  High = 'HIGH',
  Low = 'LOW',
  Medium = 'MEDIUM',
}

export type Query = {
  __typename?: 'Query'
  aggregateTask: AggregateTask
  aggregateUser: AggregateUser
  findFirstTask?: Maybe<Task>
  findFirstTaskOrThrow?: Maybe<Task>
  findFirstUser?: Maybe<User>
  findFirstUserOrThrow?: Maybe<User>
  getTask?: Maybe<Task>
  getUser?: Maybe<User>
  groupByTask: Array<TaskGroupBy>
  groupByUser: Array<UserGroupBy>
  task?: Maybe<Task>
  tasks: Array<Task>
  user?: Maybe<User>
  users: Array<User>
}

export type QueryAggregateTaskArgs = {
  cursor?: InputMaybe<TaskWhereUniqueInput>
  orderBy?: InputMaybe<Array<TaskOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<TaskWhereInput>
}

export type QueryAggregateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<UserWhereInput>
}

export type QueryFindFirstTaskArgs = {
  cursor?: InputMaybe<TaskWhereUniqueInput>
  distinct?: InputMaybe<Array<TaskScalarFieldEnum>>
  orderBy?: InputMaybe<Array<TaskOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<TaskWhereInput>
}

export type QueryFindFirstTaskOrThrowArgs = {
  cursor?: InputMaybe<TaskWhereUniqueInput>
  distinct?: InputMaybe<Array<TaskScalarFieldEnum>>
  orderBy?: InputMaybe<Array<TaskOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<TaskWhereInput>
}

export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<UserWhereInput>
}

export type QueryFindFirstUserOrThrowArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<UserWhereInput>
}

export type QueryGetTaskArgs = {
  where: TaskWhereUniqueInput
}

export type QueryGetUserArgs = {
  where: UserWhereUniqueInput
}

export type QueryGroupByTaskArgs = {
  by: Array<TaskScalarFieldEnum>
  having?: InputMaybe<TaskScalarWhereWithAggregatesInput>
  orderBy?: InputMaybe<Array<TaskOrderByWithAggregationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<TaskWhereInput>
}

export type QueryGroupByUserArgs = {
  by: Array<UserScalarFieldEnum>
  having?: InputMaybe<UserScalarWhereWithAggregatesInput>
  orderBy?: InputMaybe<Array<UserOrderByWithAggregationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<UserWhereInput>
}

export type QueryTaskArgs = {
  where: TaskWhereUniqueInput
}

export type QueryTasksArgs = {
  cursor?: InputMaybe<TaskWhereUniqueInput>
  distinct?: InputMaybe<Array<TaskScalarFieldEnum>>
  orderBy?: InputMaybe<Array<TaskOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<TaskWhereInput>
}

export type QueryUserArgs = {
  where: UserWhereUniqueInput
}

export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<UserWhereInput>
}

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive',
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>
  endsWith?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  gt?: InputMaybe<Scalars['String']>
  gte?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<Scalars['String']>>
  lt?: InputMaybe<Scalars['String']>
  lte?: InputMaybe<Scalars['String']>
  mode?: InputMaybe<QueryMode>
  not?: InputMaybe<NestedStringFilter>
  notIn?: InputMaybe<Array<Scalars['String']>>
  startsWith?: InputMaybe<Scalars['String']>
}

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>
  endsWith?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  gt?: InputMaybe<Scalars['String']>
  gte?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<Scalars['String']>>
  lt?: InputMaybe<Scalars['String']>
  lte?: InputMaybe<Scalars['String']>
  mode?: InputMaybe<QueryMode>
  not?: InputMaybe<NestedStringNullableFilter>
  notIn?: InputMaybe<Array<Scalars['String']>>
  startsWith?: InputMaybe<Scalars['String']>
}

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>
  _max?: InputMaybe<NestedStringNullableFilter>
  _min?: InputMaybe<NestedStringNullableFilter>
  contains?: InputMaybe<Scalars['String']>
  endsWith?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  gt?: InputMaybe<Scalars['String']>
  gte?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<Scalars['String']>>
  lt?: InputMaybe<Scalars['String']>
  lte?: InputMaybe<Scalars['String']>
  mode?: InputMaybe<QueryMode>
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>
  notIn?: InputMaybe<Array<Scalars['String']>>
  startsWith?: InputMaybe<Scalars['String']>
}

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>
  _max?: InputMaybe<NestedStringFilter>
  _min?: InputMaybe<NestedStringFilter>
  contains?: InputMaybe<Scalars['String']>
  endsWith?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  gt?: InputMaybe<Scalars['String']>
  gte?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<Scalars['String']>>
  lt?: InputMaybe<Scalars['String']>
  lte?: InputMaybe<Scalars['String']>
  mode?: InputMaybe<QueryMode>
  not?: InputMaybe<NestedStringWithAggregatesFilter>
  notIn?: InputMaybe<Array<Scalars['String']>>
  startsWith?: InputMaybe<Scalars['String']>
}

export type Task = {
  __typename?: 'Task'
  _count?: Maybe<TaskCount>
  children: Array<Task>
  completed: Scalars['Boolean']
  id: Scalars['Int']
  notes?: Maybe<Scalars['String']>
  parent?: Maybe<Task>
  parentId?: Maybe<Scalars['Int']>
  priority: Priority
  subtitle?: Maybe<Scalars['String']>
  title: Scalars['String']
  user: User
  userId: Scalars['Int']
}

export type TaskChildrenArgs = {
  cursor?: InputMaybe<TaskWhereUniqueInput>
  distinct?: InputMaybe<Array<TaskScalarFieldEnum>>
  orderBy?: InputMaybe<Array<TaskOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<TaskWhereInput>
}

export type TaskAvgAggregate = {
  __typename?: 'TaskAvgAggregate'
  id?: Maybe<Scalars['Float']>
  parentId?: Maybe<Scalars['Float']>
  userId?: Maybe<Scalars['Float']>
}

export type TaskAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>
  parentId?: InputMaybe<SortOrder>
  userId?: InputMaybe<SortOrder>
}

export type TaskCount = {
  __typename?: 'TaskCount'
  children: Scalars['Int']
}

export type TaskCountAggregate = {
  __typename?: 'TaskCountAggregate'
  _all: Scalars['Int']
  completed: Scalars['Int']
  id: Scalars['Int']
  notes: Scalars['Int']
  parentId: Scalars['Int']
  priority: Scalars['Int']
  subtitle: Scalars['Int']
  title: Scalars['Int']
  userId: Scalars['Int']
}

export type TaskCountOrderByAggregateInput = {
  completed?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  notes?: InputMaybe<SortOrder>
  parentId?: InputMaybe<SortOrder>
  priority?: InputMaybe<SortOrder>
  subtitle?: InputMaybe<SortOrder>
  title?: InputMaybe<SortOrder>
  userId?: InputMaybe<SortOrder>
}

export type TaskCreateInput = {
  children?: InputMaybe<TaskCreateNestedManyWithoutParentInput>
  completed?: InputMaybe<Scalars['Boolean']>
  notes?: InputMaybe<Scalars['String']>
  parent?: InputMaybe<TaskCreateNestedOneWithoutChildrenInput>
  priority?: InputMaybe<Priority>
  subtitle?: InputMaybe<Scalars['String']>
  title: Scalars['String']
  user: UserCreateNestedOneWithoutTasksInput
}

export type TaskCreateManyInput = {
  completed?: InputMaybe<Scalars['Boolean']>
  id?: InputMaybe<Scalars['Int']>
  notes?: InputMaybe<Scalars['String']>
  parentId?: InputMaybe<Scalars['Int']>
  priority?: InputMaybe<Priority>
  subtitle?: InputMaybe<Scalars['String']>
  title: Scalars['String']
  userId: Scalars['Int']
}

export type TaskCreateManyParentInput = {
  completed?: InputMaybe<Scalars['Boolean']>
  id?: InputMaybe<Scalars['Int']>
  notes?: InputMaybe<Scalars['String']>
  priority?: InputMaybe<Priority>
  subtitle?: InputMaybe<Scalars['String']>
  title: Scalars['String']
  userId: Scalars['Int']
}

export type TaskCreateManyParentInputEnvelope = {
  data: Array<TaskCreateManyParentInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']>
}

export type TaskCreateManyUserInput = {
  completed?: InputMaybe<Scalars['Boolean']>
  id?: InputMaybe<Scalars['Int']>
  notes?: InputMaybe<Scalars['String']>
  parentId?: InputMaybe<Scalars['Int']>
  priority?: InputMaybe<Priority>
  subtitle?: InputMaybe<Scalars['String']>
  title: Scalars['String']
}

export type TaskCreateManyUserInputEnvelope = {
  data: Array<TaskCreateManyUserInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']>
}

export type TaskCreateNestedManyWithoutParentInput = {
  connect?: InputMaybe<Array<TaskWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<TaskCreateOrConnectWithoutParentInput>>
  create?: InputMaybe<Array<TaskCreateWithoutParentInput>>
  createMany?: InputMaybe<TaskCreateManyParentInputEnvelope>
}

export type TaskCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<TaskWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<TaskCreateOrConnectWithoutUserInput>>
  create?: InputMaybe<Array<TaskCreateWithoutUserInput>>
  createMany?: InputMaybe<TaskCreateManyUserInputEnvelope>
}

export type TaskCreateNestedOneWithoutChildrenInput = {
  connect?: InputMaybe<TaskWhereUniqueInput>
  connectOrCreate?: InputMaybe<TaskCreateOrConnectWithoutChildrenInput>
  create?: InputMaybe<TaskCreateWithoutChildrenInput>
}

export type TaskCreateOrConnectWithoutChildrenInput = {
  create: TaskCreateWithoutChildrenInput
  where: TaskWhereUniqueInput
}

export type TaskCreateOrConnectWithoutParentInput = {
  create: TaskCreateWithoutParentInput
  where: TaskWhereUniqueInput
}

export type TaskCreateOrConnectWithoutUserInput = {
  create: TaskCreateWithoutUserInput
  where: TaskWhereUniqueInput
}

export type TaskCreateWithoutChildrenInput = {
  completed?: InputMaybe<Scalars['Boolean']>
  notes?: InputMaybe<Scalars['String']>
  parent?: InputMaybe<TaskCreateNestedOneWithoutChildrenInput>
  priority?: InputMaybe<Priority>
  subtitle?: InputMaybe<Scalars['String']>
  title: Scalars['String']
  user: UserCreateNestedOneWithoutTasksInput
}

export type TaskCreateWithoutParentInput = {
  children?: InputMaybe<TaskCreateNestedManyWithoutParentInput>
  completed?: InputMaybe<Scalars['Boolean']>
  notes?: InputMaybe<Scalars['String']>
  priority?: InputMaybe<Priority>
  subtitle?: InputMaybe<Scalars['String']>
  title: Scalars['String']
  user: UserCreateNestedOneWithoutTasksInput
}

export type TaskCreateWithoutUserInput = {
  children?: InputMaybe<TaskCreateNestedManyWithoutParentInput>
  completed?: InputMaybe<Scalars['Boolean']>
  notes?: InputMaybe<Scalars['String']>
  parent?: InputMaybe<TaskCreateNestedOneWithoutChildrenInput>
  priority?: InputMaybe<Priority>
  subtitle?: InputMaybe<Scalars['String']>
  title: Scalars['String']
}

export type TaskGroupBy = {
  __typename?: 'TaskGroupBy'
  _avg?: Maybe<TaskAvgAggregate>
  _count?: Maybe<TaskCountAggregate>
  _max?: Maybe<TaskMaxAggregate>
  _min?: Maybe<TaskMinAggregate>
  _sum?: Maybe<TaskSumAggregate>
  completed: Scalars['Boolean']
  id: Scalars['Int']
  notes?: Maybe<Scalars['String']>
  parentId?: Maybe<Scalars['Int']>
  priority: Priority
  subtitle?: Maybe<Scalars['String']>
  title: Scalars['String']
  userId: Scalars['Int']
}

export type TaskListRelationFilter = {
  every?: InputMaybe<TaskWhereInput>
  none?: InputMaybe<TaskWhereInput>
  some?: InputMaybe<TaskWhereInput>
}

export type TaskMaxAggregate = {
  __typename?: 'TaskMaxAggregate'
  completed?: Maybe<Scalars['Boolean']>
  id?: Maybe<Scalars['Int']>
  notes?: Maybe<Scalars['String']>
  parentId?: Maybe<Scalars['Int']>
  priority?: Maybe<Priority>
  subtitle?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  userId?: Maybe<Scalars['Int']>
}

export type TaskMaxOrderByAggregateInput = {
  completed?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  notes?: InputMaybe<SortOrder>
  parentId?: InputMaybe<SortOrder>
  priority?: InputMaybe<SortOrder>
  subtitle?: InputMaybe<SortOrder>
  title?: InputMaybe<SortOrder>
  userId?: InputMaybe<SortOrder>
}

export type TaskMinAggregate = {
  __typename?: 'TaskMinAggregate'
  completed?: Maybe<Scalars['Boolean']>
  id?: Maybe<Scalars['Int']>
  notes?: Maybe<Scalars['String']>
  parentId?: Maybe<Scalars['Int']>
  priority?: Maybe<Priority>
  subtitle?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  userId?: Maybe<Scalars['Int']>
}

export type TaskMinOrderByAggregateInput = {
  completed?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  notes?: InputMaybe<SortOrder>
  parentId?: InputMaybe<SortOrder>
  priority?: InputMaybe<SortOrder>
  subtitle?: InputMaybe<SortOrder>
  title?: InputMaybe<SortOrder>
  userId?: InputMaybe<SortOrder>
}

export type TaskOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type TaskOrderByWithAggregationInput = {
  _avg?: InputMaybe<TaskAvgOrderByAggregateInput>
  _count?: InputMaybe<TaskCountOrderByAggregateInput>
  _max?: InputMaybe<TaskMaxOrderByAggregateInput>
  _min?: InputMaybe<TaskMinOrderByAggregateInput>
  _sum?: InputMaybe<TaskSumOrderByAggregateInput>
  completed?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  notes?: InputMaybe<SortOrder>
  parentId?: InputMaybe<SortOrder>
  priority?: InputMaybe<SortOrder>
  subtitle?: InputMaybe<SortOrder>
  title?: InputMaybe<SortOrder>
  userId?: InputMaybe<SortOrder>
}

export type TaskOrderByWithRelationInput = {
  children?: InputMaybe<TaskOrderByRelationAggregateInput>
  completed?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  notes?: InputMaybe<SortOrder>
  parent?: InputMaybe<TaskOrderByWithRelationInput>
  parentId?: InputMaybe<SortOrder>
  priority?: InputMaybe<SortOrder>
  subtitle?: InputMaybe<SortOrder>
  title?: InputMaybe<SortOrder>
  user?: InputMaybe<UserOrderByWithRelationInput>
  userId?: InputMaybe<SortOrder>
}

export type TaskRelationFilter = {
  is?: InputMaybe<TaskWhereInput>
  isNot?: InputMaybe<TaskWhereInput>
}

export enum TaskScalarFieldEnum {
  Completed = 'completed',
  Id = 'id',
  Notes = 'notes',
  ParentId = 'parentId',
  Priority = 'priority',
  Subtitle = 'subtitle',
  Title = 'title',
  UserId = 'userId',
}

export type TaskScalarWhereInput = {
  AND?: InputMaybe<Array<TaskScalarWhereInput>>
  NOT?: InputMaybe<Array<TaskScalarWhereInput>>
  OR?: InputMaybe<Array<TaskScalarWhereInput>>
  completed?: InputMaybe<BoolFilter>
  id?: InputMaybe<IntFilter>
  notes?: InputMaybe<StringNullableFilter>
  parentId?: InputMaybe<IntNullableFilter>
  priority?: InputMaybe<EnumPriorityFilter>
  subtitle?: InputMaybe<StringNullableFilter>
  title?: InputMaybe<StringFilter>
  userId?: InputMaybe<IntFilter>
}

export type TaskScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<TaskScalarWhereWithAggregatesInput>>
  NOT?: InputMaybe<Array<TaskScalarWhereWithAggregatesInput>>
  OR?: InputMaybe<Array<TaskScalarWhereWithAggregatesInput>>
  completed?: InputMaybe<BoolWithAggregatesFilter>
  id?: InputMaybe<IntWithAggregatesFilter>
  notes?: InputMaybe<StringNullableWithAggregatesFilter>
  parentId?: InputMaybe<IntNullableWithAggregatesFilter>
  priority?: InputMaybe<EnumPriorityWithAggregatesFilter>
  subtitle?: InputMaybe<StringNullableWithAggregatesFilter>
  title?: InputMaybe<StringWithAggregatesFilter>
  userId?: InputMaybe<IntWithAggregatesFilter>
}

export type TaskSumAggregate = {
  __typename?: 'TaskSumAggregate'
  id?: Maybe<Scalars['Int']>
  parentId?: Maybe<Scalars['Int']>
  userId?: Maybe<Scalars['Int']>
}

export type TaskSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>
  parentId?: InputMaybe<SortOrder>
  userId?: InputMaybe<SortOrder>
}

export type TaskUpdateInput = {
  children?: InputMaybe<TaskUpdateManyWithoutParentNestedInput>
  completed?: InputMaybe<BoolFieldUpdateOperationsInput>
  notes?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  parent?: InputMaybe<TaskUpdateOneWithoutChildrenNestedInput>
  priority?: InputMaybe<EnumPriorityFieldUpdateOperationsInput>
  subtitle?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  title?: InputMaybe<StringFieldUpdateOperationsInput>
  user?: InputMaybe<UserUpdateOneRequiredWithoutTasksNestedInput>
}

export type TaskUpdateManyMutationInput = {
  completed?: InputMaybe<BoolFieldUpdateOperationsInput>
  notes?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  priority?: InputMaybe<EnumPriorityFieldUpdateOperationsInput>
  subtitle?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  title?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type TaskUpdateManyWithWhereWithoutParentInput = {
  data: TaskUpdateManyMutationInput
  where: TaskScalarWhereInput
}

export type TaskUpdateManyWithWhereWithoutUserInput = {
  data: TaskUpdateManyMutationInput
  where: TaskScalarWhereInput
}

export type TaskUpdateManyWithoutParentNestedInput = {
  connect?: InputMaybe<Array<TaskWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<TaskCreateOrConnectWithoutParentInput>>
  create?: InputMaybe<Array<TaskCreateWithoutParentInput>>
  createMany?: InputMaybe<TaskCreateManyParentInputEnvelope>
  delete?: InputMaybe<Array<TaskWhereUniqueInput>>
  deleteMany?: InputMaybe<Array<TaskScalarWhereInput>>
  disconnect?: InputMaybe<Array<TaskWhereUniqueInput>>
  set?: InputMaybe<Array<TaskWhereUniqueInput>>
  update?: InputMaybe<Array<TaskUpdateWithWhereUniqueWithoutParentInput>>
  updateMany?: InputMaybe<Array<TaskUpdateManyWithWhereWithoutParentInput>>
  upsert?: InputMaybe<Array<TaskUpsertWithWhereUniqueWithoutParentInput>>
}

export type TaskUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<TaskWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<TaskCreateOrConnectWithoutUserInput>>
  create?: InputMaybe<Array<TaskCreateWithoutUserInput>>
  createMany?: InputMaybe<TaskCreateManyUserInputEnvelope>
  delete?: InputMaybe<Array<TaskWhereUniqueInput>>
  deleteMany?: InputMaybe<Array<TaskScalarWhereInput>>
  disconnect?: InputMaybe<Array<TaskWhereUniqueInput>>
  set?: InputMaybe<Array<TaskWhereUniqueInput>>
  update?: InputMaybe<Array<TaskUpdateWithWhereUniqueWithoutUserInput>>
  updateMany?: InputMaybe<Array<TaskUpdateManyWithWhereWithoutUserInput>>
  upsert?: InputMaybe<Array<TaskUpsertWithWhereUniqueWithoutUserInput>>
}

export type TaskUpdateOneWithoutChildrenNestedInput = {
  connect?: InputMaybe<TaskWhereUniqueInput>
  connectOrCreate?: InputMaybe<TaskCreateOrConnectWithoutChildrenInput>
  create?: InputMaybe<TaskCreateWithoutChildrenInput>
  delete?: InputMaybe<Scalars['Boolean']>
  disconnect?: InputMaybe<Scalars['Boolean']>
  update?: InputMaybe<TaskUpdateWithoutChildrenInput>
  upsert?: InputMaybe<TaskUpsertWithoutChildrenInput>
}

export type TaskUpdateWithWhereUniqueWithoutParentInput = {
  data: TaskUpdateWithoutParentInput
  where: TaskWhereUniqueInput
}

export type TaskUpdateWithWhereUniqueWithoutUserInput = {
  data: TaskUpdateWithoutUserInput
  where: TaskWhereUniqueInput
}

export type TaskUpdateWithoutChildrenInput = {
  completed?: InputMaybe<BoolFieldUpdateOperationsInput>
  notes?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  parent?: InputMaybe<TaskUpdateOneWithoutChildrenNestedInput>
  priority?: InputMaybe<EnumPriorityFieldUpdateOperationsInput>
  subtitle?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  title?: InputMaybe<StringFieldUpdateOperationsInput>
  user?: InputMaybe<UserUpdateOneRequiredWithoutTasksNestedInput>
}

export type TaskUpdateWithoutParentInput = {
  children?: InputMaybe<TaskUpdateManyWithoutParentNestedInput>
  completed?: InputMaybe<BoolFieldUpdateOperationsInput>
  notes?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  priority?: InputMaybe<EnumPriorityFieldUpdateOperationsInput>
  subtitle?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  title?: InputMaybe<StringFieldUpdateOperationsInput>
  user?: InputMaybe<UserUpdateOneRequiredWithoutTasksNestedInput>
}

export type TaskUpdateWithoutUserInput = {
  children?: InputMaybe<TaskUpdateManyWithoutParentNestedInput>
  completed?: InputMaybe<BoolFieldUpdateOperationsInput>
  notes?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  parent?: InputMaybe<TaskUpdateOneWithoutChildrenNestedInput>
  priority?: InputMaybe<EnumPriorityFieldUpdateOperationsInput>
  subtitle?: InputMaybe<NullableStringFieldUpdateOperationsInput>
  title?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type TaskUpsertWithWhereUniqueWithoutParentInput = {
  create: TaskCreateWithoutParentInput
  update: TaskUpdateWithoutParentInput
  where: TaskWhereUniqueInput
}

export type TaskUpsertWithWhereUniqueWithoutUserInput = {
  create: TaskCreateWithoutUserInput
  update: TaskUpdateWithoutUserInput
  where: TaskWhereUniqueInput
}

export type TaskUpsertWithoutChildrenInput = {
  create: TaskCreateWithoutChildrenInput
  update: TaskUpdateWithoutChildrenInput
}

export type TaskWhereInput = {
  AND?: InputMaybe<Array<TaskWhereInput>>
  NOT?: InputMaybe<Array<TaskWhereInput>>
  OR?: InputMaybe<Array<TaskWhereInput>>
  children?: InputMaybe<TaskListRelationFilter>
  completed?: InputMaybe<BoolFilter>
  id?: InputMaybe<IntFilter>
  notes?: InputMaybe<StringNullableFilter>
  parent?: InputMaybe<TaskRelationFilter>
  parentId?: InputMaybe<IntNullableFilter>
  priority?: InputMaybe<EnumPriorityFilter>
  subtitle?: InputMaybe<StringNullableFilter>
  title?: InputMaybe<StringFilter>
  user?: InputMaybe<UserRelationFilter>
  userId?: InputMaybe<IntFilter>
}

export type TaskWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>
}

export type User = {
  __typename?: 'User'
  _count?: Maybe<UserCount>
  createdAt: Scalars['DateTime']
  id: Scalars['Int']
  tasks: Array<Task>
  userName: Scalars['String']
}

export type UserTasksArgs = {
  cursor?: InputMaybe<TaskWhereUniqueInput>
  distinct?: InputMaybe<Array<TaskScalarFieldEnum>>
  orderBy?: InputMaybe<Array<TaskOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<TaskWhereInput>
}

export type UserAvgAggregate = {
  __typename?: 'UserAvgAggregate'
  id?: Maybe<Scalars['Float']>
}

export type UserAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>
}

export type UserCount = {
  __typename?: 'UserCount'
  tasks: Scalars['Int']
}

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate'
  _all: Scalars['Int']
  createdAt: Scalars['Int']
  id: Scalars['Int']
  userName: Scalars['Int']
}

export type UserCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  userName?: InputMaybe<SortOrder>
}

export type UserCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>
  tasks?: InputMaybe<TaskCreateNestedManyWithoutUserInput>
  userName: Scalars['String']
}

export type UserCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>
  id?: InputMaybe<Scalars['Int']>
  userName: Scalars['String']
}

export type UserCreateNestedOneWithoutTasksInput = {
  connect?: InputMaybe<UserWhereUniqueInput>
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutTasksInput>
  create?: InputMaybe<UserCreateWithoutTasksInput>
}

export type UserCreateOrConnectWithoutTasksInput = {
  create: UserCreateWithoutTasksInput
  where: UserWhereUniqueInput
}

export type UserCreateWithoutTasksInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>
  userName: Scalars['String']
}

export type UserGroupBy = {
  __typename?: 'UserGroupBy'
  _avg?: Maybe<UserAvgAggregate>
  _count?: Maybe<UserCountAggregate>
  _max?: Maybe<UserMaxAggregate>
  _min?: Maybe<UserMinAggregate>
  _sum?: Maybe<UserSumAggregate>
  createdAt: Scalars['DateTime']
  id: Scalars['Int']
  userName: Scalars['String']
}

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate'
  createdAt?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['Int']>
  userName?: Maybe<Scalars['String']>
}

export type UserMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  userName?: InputMaybe<SortOrder>
}

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate'
  createdAt?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['Int']>
  userName?: Maybe<Scalars['String']>
}

export type UserMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  userName?: InputMaybe<SortOrder>
}

export type UserOrderByWithAggregationInput = {
  _avg?: InputMaybe<UserAvgOrderByAggregateInput>
  _count?: InputMaybe<UserCountOrderByAggregateInput>
  _max?: InputMaybe<UserMaxOrderByAggregateInput>
  _min?: InputMaybe<UserMinOrderByAggregateInput>
  _sum?: InputMaybe<UserSumOrderByAggregateInput>
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  userName?: InputMaybe<SortOrder>
}

export type UserOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  tasks?: InputMaybe<TaskOrderByRelationAggregateInput>
  userName?: InputMaybe<SortOrder>
}

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>
  isNot?: InputMaybe<UserWhereInput>
}

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  UserName = 'userName',
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>
  id?: InputMaybe<IntWithAggregatesFilter>
  userName?: InputMaybe<StringWithAggregatesFilter>
}

export type UserSumAggregate = {
  __typename?: 'UserSumAggregate'
  id?: Maybe<Scalars['Int']>
}

export type UserSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>
}

export type UserUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  tasks?: InputMaybe<TaskUpdateManyWithoutUserNestedInput>
  userName?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type UserUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  userName?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type UserUpdateOneRequiredWithoutTasksNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutTasksInput>
  create?: InputMaybe<UserCreateWithoutTasksInput>
  update?: InputMaybe<UserUpdateWithoutTasksInput>
  upsert?: InputMaybe<UserUpsertWithoutTasksInput>
}

export type UserUpdateWithoutTasksInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>
  userName?: InputMaybe<StringFieldUpdateOperationsInput>
}

export type UserUpsertWithoutTasksInput = {
  create: UserCreateWithoutTasksInput
  update: UserUpdateWithoutTasksInput
}

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>
  NOT?: InputMaybe<Array<UserWhereInput>>
  OR?: InputMaybe<Array<UserWhereInput>>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<IntFilter>
  tasks?: InputMaybe<TaskListRelationFilter>
  userName?: InputMaybe<StringFilter>
}

export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>
}

export type GetTasksQueryVariables = Exact<{ [key: string]: never }>

export type GetTasksQuery = {
  __typename?: 'Query'
  tasks: Array<{
    __typename?: 'Task'
    id: number
    title: string
    subtitle?: string | null
    notes?: string | null
    completed: boolean
    priority: Priority
    userId: number
    parentId?: number | null
    children: Array<{
      __typename?: 'Task'
      id: number
      title: string
      subtitle?: string | null
      notes?: string | null
      completed: boolean
      priority: Priority
      userId: number
    }>
  }>
}

export type UpdateOneTaskMutationVariables = Exact<{
  data: TaskUpdateInput
  taskId: Scalars['Int']
}>

export type UpdateOneTaskMutation = {
  __typename?: 'Mutation'
  updateOneTask?: {
    __typename?: 'Task'
    id: number
    title: string
    subtitle?: string | null
    notes?: string | null
    completed: boolean
    priority: Priority
    userId: number
  } | null
}

export const GetTasksDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetTasks' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'tasks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'subtitle' } },
                { kind: 'Field', name: { kind: 'Name', value: 'notes' } },
                { kind: 'Field', name: { kind: 'Name', value: 'completed' } },
                { kind: 'Field', name: { kind: 'Name', value: 'priority' } },
                { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'parentId' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'children' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'subtitle' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'notes' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'completed' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'priority' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'userId' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetTasksQuery, GetTasksQueryVariables>
export const UpdateOneTaskDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateOneTask' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'data' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'TaskUpdateInput' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'taskId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateOneTask' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'data' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'data' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'taskId' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'subtitle' } },
                { kind: 'Field', name: { kind: 'Name', value: 'notes' } },
                { kind: 'Field', name: { kind: 'Name', value: 'completed' } },
                { kind: 'Field', name: { kind: 'Name', value: 'priority' } },
                { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateOneTaskMutation,
  UpdateOneTaskMutationVariables
>
