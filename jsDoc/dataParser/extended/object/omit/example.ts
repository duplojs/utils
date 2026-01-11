import { DPE, E, unwrap } from "@scripts";

const parser = DPE.object({
	id: DPE.number(),
	name: DPE.string(),
	email: DPE.string(),
});

const omitted = parser.omit({ email: true });
const result = omitted.parse({
	id: 1,
	name: "Alex",
});
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: { id: number; name: string }
}

const omitId = parser.omit({ id: true });
const omitIdResult = omitId.parse({
	name: "Alex",
	email: "a@b.com",
});

const omitName = parser.omit({ name: true });
const omitNameResult = omitName.parse({
	id: 1,
	email: "a@b.com",
});
