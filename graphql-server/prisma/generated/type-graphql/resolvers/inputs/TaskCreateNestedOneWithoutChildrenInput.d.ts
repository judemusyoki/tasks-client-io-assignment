import { TaskCreateOrConnectWithoutChildrenInput } from "../inputs/TaskCreateOrConnectWithoutChildrenInput";
import { TaskCreateWithoutChildrenInput } from "../inputs/TaskCreateWithoutChildrenInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";
export declare class TaskCreateNestedOneWithoutChildrenInput {
    create?: TaskCreateWithoutChildrenInput | undefined;
    connectOrCreate?: TaskCreateOrConnectWithoutChildrenInput | undefined;
    connect?: TaskWhereUniqueInput | undefined;
}
