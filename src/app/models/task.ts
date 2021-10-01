export interface Task {
    id?: number;
    name: string;
    user: string;
    projectId: number;
    company: string;
    startDate: Date;
    endDate: Date;
    created?: Date;

}
