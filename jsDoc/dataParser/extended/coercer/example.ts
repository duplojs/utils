import { DPE, E, unwrap } from "@scripts";

const parser = DPE.number()
	.min(4)
	.max(10)
	.coerce();
const result = parser.parse("7");
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: number
}

const direct = DPE.coercer(DPE.boolean());
const directResult = direct.parse("true");

const complex = DPE.object({
	name: DPE.string().coerce(),
	age: DPE.number()
		.min(0)
		.coerce(),
});
const complexResult = complex.parse({
	name: 123,
	age: "42",
});
