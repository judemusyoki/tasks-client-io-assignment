import { BoolFilter } from "../inputs/BoolFilter";
import { EnumPriorityFilter } from "../inputs/EnumPriorityFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TaskListRelationFilter } from "../inputs/TaskListRelationFilter";
import { TaskRelationFilter } from "../inputs/TaskRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class TaskWhereInput {
    AND?: TaskWhereInput[] | undefined;
    OR?: TaskWhereInput[] | undefined;
    NOT?: TaskWhereInput[] | undefined;
    id?: IntFilter | undefined;
    title?: StringFilter | undefined;
    subtitle?: StringNullableFilter | undefined;
    notes?: StringNullableFilter | undefined;
    completed?: BoolFilter | undefined;
    priority?: EnumPriorityFilter | undefined;
    parentId?: IntNullableFilter | undefined;
    parent?: TaskRelationFilter | undefined;
    children?: TaskListRelationFilter | undefined;
    userId?: IntFilter | undefined;
    user?: UserRelationFilter | undefined;
}
