import { TaskCreateManyParentInputEnvelope } from "../inputs/TaskCreateManyParentInputEnvelope";
import { TaskCreateOrConnectWithoutParentInput } from "../inputs/TaskCreateOrConnectWithoutParentInput";
import { TaskCreateWithoutParentInput } from "../inputs/TaskCreateWithoutParentInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";
export declare class TaskCreateNestedManyWithoutParentInput {
    create?: TaskCreateWithoutParentInput[] | undefined;
    connectOrCreate?: TaskCreateOrConnectWithoutParentInput[] | undefined;
    createMany?: TaskCreateManyParentInputEnvelope | undefined;
    connect?: TaskWhereUniqueInput[] | undefined;
}
