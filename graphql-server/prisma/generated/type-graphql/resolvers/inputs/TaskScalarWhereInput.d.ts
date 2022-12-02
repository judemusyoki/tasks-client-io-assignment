import { BoolFilter } from "../inputs/BoolFilter";
import { EnumPriorityFilter } from "../inputs/EnumPriorityFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class TaskScalarWhereInput {
    AND?: TaskScalarWhereInput[] | undefined;
    OR?: TaskScalarWhereInput[] | undefined;
    NOT?: TaskScalarWhereInput[] | undefined;
    id?: IntFilter | undefined;
    title?: StringFilter | undefined;
    subtitle?: StringNullableFilter | undefined;
    notes?: StringNullableFilter | undefined;
    completed?: BoolFilter | undefined;
    priority?: EnumPriorityFilter | undefined;
    parentId?: IntNullableFilter | undefined;
    userId?: IntFilter | undefined;
}
