import { TaskCreateManyParentInputEnvelope } from "../inputs/TaskCreateManyParentInputEnvelope";
import { TaskCreateOrConnectWithoutParentInput } from "../inputs/TaskCreateOrConnectWithoutParentInput";
import { TaskCreateWithoutParentInput } from "../inputs/TaskCreateWithoutParentInput";
import { TaskScalarWhereInput } from "../inputs/TaskScalarWhereInput";
import { TaskUpdateManyWithWhereWithoutParentInput } from "../inputs/TaskUpdateManyWithWhereWithoutParentInput";
import { TaskUpdateWithWhereUniqueWithoutParentInput } from "../inputs/TaskUpdateWithWhereUniqueWithoutParentInput";
import { TaskUpsertWithWhereUniqueWithoutParentInput } from "../inputs/TaskUpsertWithWhereUniqueWithoutParentInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";
export declare class TaskUpdateManyWithoutParentNestedInput {
    create?: TaskCreateWithoutParentInput[] | undefined;
    connectOrCreate?: TaskCreateOrConnectWithoutParentInput[] | undefined;
    upsert?: TaskUpsertWithWhereUniqueWithoutParentInput[] | undefined;
    createMany?: TaskCreateManyParentInputEnvelope | undefined;
    set?: TaskWhereUniqueInput[] | undefined;
    disconnect?: TaskWhereUniqueInput[] | undefined;
    delete?: TaskWhereUniqueInput[] | undefined;
    connect?: TaskWhereUniqueInput[] | undefined;
    update?: TaskUpdateWithWhereUniqueWithoutParentInput[] | undefined;
    updateMany?: TaskUpdateManyWithWhereWithoutParentInput[] | undefined;
    deleteMany?: TaskScalarWhereInput[] | undefined;
}
