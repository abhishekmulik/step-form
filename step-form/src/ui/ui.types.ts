interface Tab {
    name: string;
    href: string;
    current: boolean;
}
export interface ISectionHeading {
    tabs: Tab[];
}

export interface Step {
    id: string;
    name: string;
    description: string;
    href: string;
    status: 'complete' | 'current' | 'upcoming';
}

export interface ISteps {
    steps: Step[],
    handleUpdateStep: (id: string, steps: Step[]) => void;
}

export interface Iinput {
    label?: string;
    type: string;
    name: string;
    className?: string;

}

export interface IUploadFile {
    label: string;
}

export interface ITableHeader {
    id: string;
    name: string
}
export interface ITable {
    label: string;
    description: string;
    headers: ITableHeader[]
}