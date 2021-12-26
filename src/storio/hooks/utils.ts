export const isDepsEqual = (old: any, current: any) =>
  old.every((dependency: any, index: any) => dependency === current[index]);
