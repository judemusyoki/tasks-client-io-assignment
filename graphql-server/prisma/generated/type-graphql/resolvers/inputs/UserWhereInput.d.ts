import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TaskListRelationFilter } from "../inputs/TaskListRelationFilter";
export declare class UserWhereInput {
    AND?: UserWhereInput[] | undefined;
    OR?: UserWhereInput[] | undefined;
    NOT?: UserWhereInput[] | undefined;
    id?: IntFilter | undefined;
    userName?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    tasks?: TaskListRelationFilter | undefined;
}
