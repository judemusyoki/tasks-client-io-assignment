export declare class NestedEnumPriorityFilter {
    equals?: "HIGH" | "MEDIUM" | "LOW" | undefined;
    in?: Array<"HIGH" | "MEDIUM" | "LOW"> | undefined;
    notIn?: Array<"HIGH" | "MEDIUM" | "LOW"> | undefined;
    not?: NestedEnumPriorityFilter | undefined;
}
