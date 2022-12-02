import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { EnumPriorityFieldUpdateOperationsInput } from "../inputs/EnumPriorityFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class TaskUpdateManyMutationInput {
    title?: StringFieldUpdateOperationsInput | undefined;
    subtitle?: NullableStringFieldUpdateOperationsInput | undefined;
    notes?: NullableStringFieldUpdateOperationsInput | undefined;
    completed?: BoolFieldUpdateOperationsInput | undefined;
    priority?: EnumPriorityFieldUpdateOperationsInput | undefined;
}
