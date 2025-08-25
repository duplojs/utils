import { type WrappedBigint } from "./bigint";
import { type WrappedBoolean } from "./boolean";
import { type WrappedNumber } from "./number";
import { type WrappedObject } from "./object";
import { type WrappedString } from "./string";

export type WrappedAnyValue =
	| WrappedBigint
	| WrappedBoolean
	| WrappedNumber
	| WrappedObject
	| WrappedString;
