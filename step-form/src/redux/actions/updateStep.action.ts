import { UPDATE_ACTIVE_STEP_ID, UPDATE_STEP } from "../constants/constants";
import { IupdateStep } from "../types";

export const updateStep = ({ steps, id }: IupdateStep) => ({
    type: UPDATE_STEP,
    id,
    steps
});

export const updateActiveStepId = (id: string) => ({
    type: UPDATE_ACTIVE_STEP_ID,
    id
});