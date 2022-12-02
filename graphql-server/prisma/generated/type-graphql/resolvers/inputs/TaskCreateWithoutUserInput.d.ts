import { TaskCreateNestedManyWithoutParentInput } from "../inputs/TaskCreateNestedManyWithoutParentInput";
import { TaskCreateNestedOneWithoutChildrenInput } from "../inputs/TaskCreateNestedOneWithoutChildrenInput";
export declare class TaskCreateWithoutUserInput {
    title: string;
    subtitle?: string | undefined;
    notes?: string | undefined;
    completed?: boolean | undefined;
    priority?: "HIGH" | "MEDIUM" | "LOW" | undefined;
    parent?: TaskCreateNestedOneWithoutChildrenInput | undefined;
    children?: TaskCreateNestedManyWithoutParentInput | undefined;
}
