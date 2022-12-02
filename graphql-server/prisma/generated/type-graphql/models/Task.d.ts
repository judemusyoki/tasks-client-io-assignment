import { User } from "../models/User";
import { TaskCount } from "../resolvers/outputs/TaskCount";
export declare class Task {
    id: number;
    title: string;
    subtitle?: string | null;
    notes?: string | null;
    completed: boolean;
    priority: "HIGH" | "MEDIUM" | "LOW";
    parentId?: number | null;
    parent?: Task | null;
    children?: Task[];
    userId: number;
    user?: User;
    _count?: TaskCount | null;
}
