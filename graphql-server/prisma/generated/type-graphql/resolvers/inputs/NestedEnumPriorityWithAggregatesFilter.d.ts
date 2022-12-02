import { NestedEnumPriorityFilter } from "../inputs/NestedEnumPriorityFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedEnumPriorityWithAggregatesFilter {
    equals?: "HIGH" | "MEDIUM" | "LOW" | undefined;
    in?: Array<"HIGH" | "MEDIUM" | "LOW"> | undefined;
    notIn?: Array<"HIGH" | "MEDIUM" | "LOW"> | undefined;
    not?: NestedEnumPriorityWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumPriorityFilter | undefined;
    _max?: NestedEnumPriorityFilter | undefined;
}
