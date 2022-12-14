import { TaskCreateManyUserInputEnvelope } from "../inputs/TaskCreateManyUserInputEnvelope";
import { TaskCreateOrConnectWithoutUserInput } from "../inputs/TaskCreateOrConnectWithoutUserInput";
import { TaskCreateWithoutUserInput } from "../inputs/TaskCreateWithoutUserInput";
import { TaskScalarWhereInput } from "../inputs/TaskScalarWhereInput";
import { TaskUpdateManyWithWhereWithoutUserInput } from "../inputs/TaskUpdateManyWithWhereWithoutUserInput";
import { TaskUpdateWithWhereUniqueWithoutUserInput } from "../inputs/TaskUpdateWithWhereUniqueWithoutUserInput";
import { TaskUpsertWithWhereUniqueWithoutUserInput } from "../inputs/TaskUpsertWithWhereUniqueWithoutUserInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";
export declare class TaskUpdateManyWithoutUserNestedInput {
    create?: TaskCreateWithoutUserInput[] | undefined;
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput[] | undefined;
    upsert?: TaskUpsertWithWhereUniqueWithoutUserInput[] | undefined;
    createMany?: TaskCreateManyUserInputEnvelope | undefined;
    set?: TaskWhereUniqueInput[] | undefined;
    disconnect?: TaskWhereUniqueInput[] | undefined;
    delete?: TaskWhereUniqueInput[] | undefined;
    connect?: TaskWhereUniqueInput[] | undefined;
    update?: TaskUpdateWithWhereUniqueWithoutUserInput[] | undefined;
    updateMany?: TaskUpdateManyWithWhereWithoutUserInput[] | undefined;
    deleteMany?: TaskScalarWhereInput[] | undefined;
}
