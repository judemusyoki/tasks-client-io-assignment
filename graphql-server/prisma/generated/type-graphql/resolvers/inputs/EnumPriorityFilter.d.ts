import { NestedEnumPriorityFilter } from "../inputs/NestedEnumPriorityFilter";
export declare class EnumPriorityFilter {
    equals?: "HIGH" | "MEDIUM" | "LOW" | undefined;
    in?: Array<"HIGH" | "MEDIUM" | "LOW"> | undefined;
    notIn?: Array<"HIGH" | "MEDIUM" | "LOW"> | undefined;
    not?: NestedEnumPriorityFilter | undefined;
}
