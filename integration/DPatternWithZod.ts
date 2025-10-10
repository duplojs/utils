import { type ExpectType, P, pipe, DPattern } from "@duplojs/utils";
import { forward } from "@scripts/common";
import { type ZodType } from "zod";

function _matchZodObject(zodType: ZodType) {
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

