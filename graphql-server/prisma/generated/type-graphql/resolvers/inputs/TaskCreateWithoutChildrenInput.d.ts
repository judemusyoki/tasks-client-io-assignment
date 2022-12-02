import { TaskCreateNestedOneWithoutChildrenInput } from "../inputs/TaskCreateNestedOneWithoutChildrenInput";
import { UserCreateNestedOneWithoutTasksInput } from "../inputs/UserCreateNestedOneWithoutTasksInput";
export declare class TaskCreateWithoutChildrenInput {
    title: string;
    subtitle?: string | undefined;
    notes?: string | undefined;
    completed?: boolean | undefined;
    priority?: "HIGH" | "MEDIUM" | "LOW" | undefined;
    parent?: TaskCreateNestedOneWithoutChildrenInput | undefined;
    user: UserCreateNestedOneWithoutTasksInput;
}
