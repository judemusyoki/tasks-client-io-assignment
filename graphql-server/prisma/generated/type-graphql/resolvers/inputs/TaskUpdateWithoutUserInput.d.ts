import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { EnumPriorityFieldUpdateOperationsInput } from "../inputs/EnumPriorityFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TaskUpdateManyWithoutParentNestedInput } from "../inputs/TaskUpdateManyWithoutParentNestedInput";
import { TaskUpdateOneWithoutChildrenNestedInput } from "../inputs/TaskUpdateOneWithoutChildrenNestedInput";
export declare class TaskUpdateWithoutUserInput {
    title?: StringFieldUpdateOperationsInput | undefined;
    subtitle?: NullableStringFieldUpdateOperationsInput | undefined;
    notes?: NullableStringFieldUpdateOperationsInput | undefined;
    completed?: BoolFieldUpdateOperationsInput | undefined;
    priority?: EnumPriorityFieldUpdateOperationsInput | undefined;
    parent?: TaskUpdateOneWithoutChildrenNestedInput | undefined;
    children?: TaskUpdateManyWithoutParentNestedInput | undefined;
}
