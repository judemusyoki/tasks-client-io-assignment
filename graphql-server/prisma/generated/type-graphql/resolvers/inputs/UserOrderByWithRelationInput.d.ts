import { TaskOrderByRelationAggregateInput } from "../inputs/TaskOrderByRelationAggregateInput";
export declare class UserOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    userName?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    tasks?: TaskOrderByRelationAggregateInput | undefined;
}
