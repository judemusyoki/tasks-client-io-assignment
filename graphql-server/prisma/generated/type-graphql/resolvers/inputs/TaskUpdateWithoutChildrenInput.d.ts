import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { EnumPriorityFieldUpdateOperationsInput } from "../inputs/EnumPriorityFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TaskUpdateOneWithoutChildrenNestedInput } from "../inputs/TaskUpdateOneWithoutChildrenNestedInput";
import { UserUpdateOneRequiredWithoutTasksNestedInput } from "../inputs/UserUpdateOneRequiredWithoutTasksNestedInput";
export declare class TaskUpdateWithoutChildrenInput {
    title?: StringFieldUpdateOperationsInput | undefined;
    subtitle?: NullableStringFieldUpdateOperationsInput | undefined;
    notes?: NullableStringFieldUpdateOperationsInput | undefined;
    completed?: BoolFieldUpdateOperationsInput | undefined;
    priority?: EnumPriorityFieldUpdateOperationsInput | undefined;
    parent?: TaskUpdateOneWithoutChildrenNestedInput | undefined;
    user?: UserUpdateOneRequiredWithoutTasksNestedInput | undefined;
}
