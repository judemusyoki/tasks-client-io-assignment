import { NestedEnumPriorityFilter } from "../inputs/NestedEnumPriorityFilter";
import { NestedEnumPriorityWithAggregatesFilter } from "../inputs/NestedEnumPriorityWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class EnumPriorityWithAggregatesFilter {
    equals?: "HIGH" | "MEDIUM" | "LOW" | undefined;
    in?: Array<"HIGH" | "MEDIUM" | "LOW"> | undefined;
    notIn?: Array<"HIGH" | "MEDIUM" | "LOW"> | undefined;
    not?: NestedEnumPriorityWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumPriorityFilter | undefined;
    _max?: NestedEnumPriorityFilter | undefined;
}
