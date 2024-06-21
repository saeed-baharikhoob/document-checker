export interface Steps {
    step: number;
    title: string;
    type: string|'titleOnly' | 'text' | 'upload' | 'complete';
    value:string
}
export interface CheckProcessItem{
    id:number,
    title:string,
}

export interface ListItem {
    title: string;
    description: string;
    id: number;
    steps:Steps[];
    checkProcessItems:CheckProcessItem[]
}
