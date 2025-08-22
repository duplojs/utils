import { type EmbeddedBigint } from "./bigint";
import { type EmbeddedBoolean } from "./boolean";
import { type EmbeddedNumber } from "./number";
import { type EmbeddedObject } from "./object";
import { type EmbeddedString } from "./string";

export type EmbeddedAnyType =
	| EmbeddedBigint
	| EmbeddedBoolean
	| EmbeddedNumber
	| EmbeddedObject
	| EmbeddedString;
