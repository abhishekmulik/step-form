import { Step } from "./types";

export const updateStep = (state: Step[], id: string) => {
    const updatedSteps = [...state];
    return updatedSteps?.map((step) => {
        if (step.id < id) {
            step.status = 'complete'
        } else if (step.id === id) {
            step.status = 'current'
        } else {
            step.status = 'upcoming'
        }
        return step
    })
}