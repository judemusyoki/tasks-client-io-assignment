import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { EnumPriorityFieldUpdateOperationsInput } from "../inputs/EnumPriorityFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TaskUpdateManyWithoutParentNestedInput } from "../inputs/TaskUpdateManyWithoutParentNestedInput";
import { UserUpdateOneRequiredWithoutTasksNestedInput } from "../inputs/UserUpdateOneRequiredWithoutTasksNestedInput";
export declare class TaskUpdateWithoutParentInput {
    title?: StringFieldUpdateOperationsInput | undefined;
    subtitle?: NullableStringFieldUpdateOperationsInput | undefined;
    notes?: NullableStringFieldUpdateOperationsInput | undefined;
    completed?: BoolFieldUpdateOperationsInput | undefined;
    priority?: EnumPriorityFieldUpdateOperationsInput | undefined;
    children?: TaskUpdateManyWithoutParentNestedInput | undefined;
    user?: UserUpdateOneRequiredWithoutTasksNestedInput | undefined;
}
