export interface Task {
    id?: number;
    name: string;
    projectId: number;
    startDate: Date;
    endDate: Date;
    created?: Date;

}
