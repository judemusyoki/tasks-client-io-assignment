import { TaskCreateOrConnectWithoutChildrenInput } from "../inputs/TaskCreateOrConnectWithoutChildrenInput";
import { TaskCreateWithoutChildrenInput } from "../inputs/TaskCreateWithoutChildrenInput";
import { TaskUpdateWithoutChildrenInput } from "../inputs/TaskUpdateWithoutChildrenInput";
import { TaskUpsertWithoutChildrenInput } from "../inputs/TaskUpsertWithoutChildrenInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";
export declare class TaskUpdateOneWithoutChildrenNestedInput {
    create?: TaskCreateWithoutChildrenInput | undefined;
    connectOrCreate?: TaskCreateOrConnectWithoutChildrenInput | undefined;
    upsert?: TaskUpsertWithoutChildrenInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: TaskWhereUniqueInput | undefined;
    update?: TaskUpdateWithoutChildrenInput | undefined;
}
