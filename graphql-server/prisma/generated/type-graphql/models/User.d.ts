import { Task } from "../models/Task";
import { UserCount } from "../resolvers/outputs/UserCount";
export declare class User {
    id: number;
    userName: string;
    createdAt: Date;
    tasks?: Task[];
    _count?: UserCount | null;
}
