import { type SimplifyTopLevel } from "../../common";
export type PartialKeys<T extends object, K extends keyof T = keyof T> = SimplifyTopLevel<Omit<T, K> & Partial<Pick<T, K>>>;
