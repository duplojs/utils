import { createNewType } from "./create";

export * from "./create";

export namespace NewType {
	export const create = createNewType;
}

export const NT = NewType;
