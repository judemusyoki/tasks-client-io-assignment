import { TaskAvgAggregate } from "../outputs/TaskAvgAggregate";
import { TaskCountAggregate } from "../outputs/TaskCountAggregate";
import { TaskMaxAggregate } from "../outputs/TaskMaxAggregate";
import { TaskMinAggregate } from "../outputs/TaskMinAggregate";
import { TaskSumAggregate } from "../outputs/TaskSumAggregate";
export declare class TaskGroupBy {
    id: number;
    title: string;
    subtitle: string | null;
    notes: string | null;
    completed: boolean;
    priority: "HIGH" | "MEDIUM" | "LOW";
    parentId: number | null;
    userId: number;
    _count: TaskCountAggregate | null;
    _avg: TaskAvgAggregate | null;
    _sum: TaskSumAggregate | null;
    _min: TaskMinAggregate | null;
    _max: TaskMaxAggregate | null;
}
