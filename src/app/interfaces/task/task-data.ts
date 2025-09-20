import { taskTypes } from "../../enums/taskenums/task-type";

export interface TaskData{
    id : number;
    task : string;
    state : boolean;
    type : taskTypes
    startDate : Date | null;
    GoalDate : Date | null;
}