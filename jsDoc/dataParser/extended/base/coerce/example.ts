import { DPE, E, unwrap } from "@scripts";

const numberParser = DPE.number()
	.min(1)
	.coerce();
const numberResult = numberParser.parse("42");
if (E.isRight(numberResult)) {
	const value = unwrap(numberResult);
	// value: number
}

const booleanParser = DPE.boolean().coerce();
const booleanResult = booleanParser.parse("true");

const userParser = DPE.object({
	name: DPE.string()
		.min(1)
		.coerce(),
	active: DPE.boolean().coerce(),
	createdAt: DPE.date().coerce(),
});
const userResult = userParser.parse({
	name: 123,
	active: 1,
	createdAt: "2024-01-01T00:00:00.000Z",
});

const passThrough = DPE.object({ id: DPE.number() }).coerce();
const passThroughResult = passThrough.parse({ id: 1 });
