import { Task } from "../../../models/Task";
import { User } from "../../../models/User";
import { TaskChildrenArgs } from "./args/TaskChildrenArgs";
export declare class TaskRelationsResolver {
    parent(task: Task, ctx: any): Promise<Task | null>;
    children(task: Task, ctx: any, args: TaskChildrenArgs): Promise<Task[]>;
    user(task: Task, ctx: any): Promise<User>;
}
