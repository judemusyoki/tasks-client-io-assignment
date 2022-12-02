import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TaskUpdateManyWithoutUserNestedInput } from "../inputs/TaskUpdateManyWithoutUserNestedInput";
export declare class UserUpdateInput {
    userName?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    tasks?: TaskUpdateManyWithoutUserNestedInput | undefined;
}
