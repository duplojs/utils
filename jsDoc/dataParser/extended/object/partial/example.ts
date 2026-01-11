import { DPE, E, unwrap } from "@scripts";

const parser = DPE.object({
	id: DPE.number(),
	name: DPE.string(),
});

const partialUser = parser.partial();
const result = partialUser.parse({ name: "Alex" });
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: { id?: number; name?: string }
}

const emptyUser = partialUser.parse({});

const nested = DPE.object({ profile: parser }).partial();
const nestedResult = nested.parse({});
