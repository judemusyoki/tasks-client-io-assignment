import { Task } from "../../../models/Task";
import { User } from "../../../models/User";
import { UserTasksArgs } from "./args/UserTasksArgs";
export declare class UserRelationsResolver {
    tasks(user: User, ctx: any, args: UserTasksArgs): Promise<Task[]>;
}
