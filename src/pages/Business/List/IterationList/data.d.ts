export interface TableListItem {
    key: number;
    id: number;
    name: string;
    startAt: string;
    endAt: string;
    status: string;
    progress: number;
    owner: {
        id: number;
        name: string;
        avatar: string;
    };
    teammate: {
        id: number;
        name: string;
        avatar: string;
    },
}