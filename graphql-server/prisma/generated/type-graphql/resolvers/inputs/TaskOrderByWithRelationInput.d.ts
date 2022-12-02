import { TaskOrderByRelationAggregateInput } from "../inputs/TaskOrderByRelationAggregateInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class TaskOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    subtitle?: "asc" | "desc" | undefined;
    notes?: "asc" | "desc" | undefined;
    completed?: "asc" | "desc" | undefined;
    priority?: "asc" | "desc" | undefined;
    parentId?: "asc" | "desc" | undefined;
    parent?: TaskOrderByWithRelationInput | undefined;
    children?: TaskOrderByRelationAggregateInput | undefined;
    userId?: "asc" | "desc" | undefined;
    user?: UserOrderByWithRelationInput | undefined;
}
