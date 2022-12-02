export declare class TaskCreateManyParentInput {
    id?: number | undefined;
    title: string;
    subtitle?: string | undefined;
    notes?: string | undefined;
    completed?: boolean | undefined;
    priority?: "HIGH" | "MEDIUM" | "LOW" | undefined;
    userId: number;
}
