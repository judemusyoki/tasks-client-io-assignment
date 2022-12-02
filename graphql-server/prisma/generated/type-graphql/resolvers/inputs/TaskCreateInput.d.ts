import { TaskCreateNestedManyWithoutParentInput } from "../inputs/TaskCreateNestedManyWithoutParentInput";
import { TaskCreateNestedOneWithoutChildrenInput } from "../inputs/TaskCreateNestedOneWithoutChildrenInput";
import { UserCreateNestedOneWithoutTasksInput } from "../inputs/UserCreateNestedOneWithoutTasksInput";
export declare class TaskCreateInput {
    title: string;
    subtitle?: string | undefined;
    notes?: string | undefined;
    completed?: boolean | undefined;
    priority?: "HIGH" | "MEDIUM" | "LOW" | undefined;
    parent?: TaskCreateNestedOneWithoutChildrenInput | undefined;
    children?: TaskCreateNestedManyWithoutParentInput | undefined;
    user: UserCreateNestedOneWithoutTasksInput;
}
