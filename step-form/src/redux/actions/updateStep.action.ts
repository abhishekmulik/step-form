import { UPDATE_STEP } from "../constants/constants";
import { IupdateStep } from "../types";

export const updateStep = ({ steps, id }: IupdateStep) => ({
    type: UPDATE_STEP,
    id,
    steps
})