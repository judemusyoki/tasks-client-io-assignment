import { TaskAvgOrderByAggregateInput } from "../inputs/TaskAvgOrderByAggregateInput";
import { TaskCountOrderByAggregateInput } from "../inputs/TaskCountOrderByAggregateInput";
import { TaskMaxOrderByAggregateInput } from "../inputs/TaskMaxOrderByAggregateInput";
import { TaskMinOrderByAggregateInput } from "../inputs/TaskMinOrderByAggregateInput";
import { TaskSumOrderByAggregateInput } from "../inputs/TaskSumOrderByAggregateInput";
export declare class TaskOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    subtitle?: "asc" | "desc" | undefined;
    notes?: "asc" | "desc" | undefined;
    completed?: "asc" | "desc" | undefined;
    priority?: "asc" | "desc" | undefined;
    parentId?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    _count?: TaskCountOrderByAggregateInput | undefined;
    _avg?: TaskAvgOrderByAggregateInput | undefined;
    _max?: TaskMaxOrderByAggregateInput | undefined;
    _min?: TaskMinOrderByAggregateInput | undefined;
    _sum?: TaskSumOrderByAggregateInput | undefined;
}
