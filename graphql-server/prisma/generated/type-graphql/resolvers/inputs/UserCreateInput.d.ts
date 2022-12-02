import { TaskCreateNestedManyWithoutUserInput } from "../inputs/TaskCreateNestedManyWithoutUserInput";
export declare class UserCreateInput {
    userName: string;
    createdAt?: Date | undefined;
    tasks?: TaskCreateNestedManyWithoutUserInput | undefined;
}
