export interface IupdateStep {
    id: string;
    steps: Step[]
}

export interface Step {
    id: string;
    name: string;
    href: string;
    status: 'complete' | 'current' | 'upcoming';
}
