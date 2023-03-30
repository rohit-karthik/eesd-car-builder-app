import { writable } from "svelte/store";

export const selectedDriveTrain = writable("Gasoline");
export const driveTrainCost = writable(15000);

export const bodyStyle = writable("Sedan");
export const bodyStyleCost = writable(5000);

export const otherFeatures = writable([]);
export const otherFeaturesCost = writable(0);