import { type ExpectType, P, pipe, DPattern, forward } from "@duplojs/utils";
import { type ZodArray, type ZodBigInt, type ZodObject, type ZodNumber, type ZodString, type ZodType } from "zod";

function _matchZodObject1(zodType: ZodType) {
	const _result = pipe(
		zodType,
		P.match(
			{
				def: {
					type: "any",
				},
			},
			(value) => {
				type Check = ExpectType<
					typeof value.def.type,
					"any",
					"strict"
				>;
			},
		),
		P.match(
			{
				def: {
					type: "string",
				},
			},
			(value) => {
				type Check = ExpectType<
					typeof value.def.type,
					"string",
					"strict"
				>;
			},
		),
		P.match(
			forward({
				def: {
					type: DPattern.union("array", "bigint"),
				},
			}),
			(value) => {
				type Check = ExpectType<
					typeof value.def.type,
					"array" | "bigint",
					"strict"
				>;
			},
		),
	);
}

function _matchZodObject2(zodType: ZodString | ZodNumber | ZodBigInt | ZodArray | ZodObject) {
	const _result = pipe(
		zodType,
		P.match(
			{
				def: {
					type: "number",
				},
			},
			(value) => {
				type Check = ExpectType<
					typeof value,
					ZodNumber,
					"strict"
				>;
			},
		),
		P.match(
			{
				type: "string",
			},
			(value) => {
				type Check = ExpectType<
					typeof value,
					ZodString,
					"strict"
				>;
			},
		),
		P.match(
			forward({
				def: {
					type: DPattern.union("array", "bigint", "object"),
				},
			}),
			(value) => {
				type Check = ExpectType<
					typeof value,
					ZodBigInt | ZodArray | ZodObject,
					"strict"
				>;
			},
		),
	);
}

