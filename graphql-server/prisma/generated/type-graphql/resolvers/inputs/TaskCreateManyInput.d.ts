export declare class TaskCreateManyInput {
    id?: number | undefined;
    title: string;
    subtitle?: string | undefined;
    notes?: string | undefined;
    completed?: boolean | undefined;
    priority?: "HIGH" | "MEDIUM" | "LOW" | undefined;
    parentId?: number | undefined;
    userId: number;
}
