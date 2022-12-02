import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { EnumPriorityWithAggregatesFilter } from "../inputs/EnumPriorityWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class TaskScalarWhereWithAggregatesInput {
    AND?: TaskScalarWhereWithAggregatesInput[] | undefined;
    OR?: TaskScalarWhereWithAggregatesInput[] | undefined;
    NOT?: TaskScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    title?: StringWithAggregatesFilter | undefined;
    subtitle?: StringNullableWithAggregatesFilter | undefined;
    notes?: StringNullableWithAggregatesFilter | undefined;
    completed?: BoolWithAggregatesFilter | undefined;
    priority?: EnumPriorityWithAggregatesFilter | undefined;
    parentId?: IntNullableWithAggregatesFilter | undefined;
    userId?: IntWithAggregatesFilter | undefined;
}
