import { type WrappedBigint } from "../bigint/create";
import { type WrappedBoolean } from "../boolean/create";
import { type WrappedNumber } from "../number/create";
import { type WrappedObject } from "../object/create";
import { type WrappedString } from "../string/create";

export type WrappedAnyValue =
	| WrappedBigint
	| WrappedBoolean
	| WrappedNumber
	| WrappedObject
	| WrappedString;
