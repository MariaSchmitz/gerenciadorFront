import { User } from "./user";

export interface Project {
    id?: number;
    name: string;
    user: User,
    userId: number;
    company: string;
    created?: Date;
    startDate: Date;
    endDate: Date;

}
