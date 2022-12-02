import { TaskOrderByWithRelationInput } from "../../../inputs/TaskOrderByWithRelationInput";
import { TaskWhereInput } from "../../../inputs/TaskWhereInput";
import { TaskWhereUniqueInput } from "../../../inputs/TaskWhereUniqueInput";
export declare class UserTasksArgs {
    where?: TaskWhereInput | undefined;
    orderBy?: TaskOrderByWithRelationInput[] | undefined;
    cursor?: TaskWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "title" | "subtitle" | "notes" | "completed" | "priority" | "parentId" | "userId"> | undefined;
}
