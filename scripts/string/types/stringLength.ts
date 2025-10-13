import { type Split } from "./split";

export type StringLength<
	GenericString extends string,
> = Split<GenericString, "">["length"];
