import { DPE, E, unwrap } from "@scripts";

const userParser = DPE.object({
	id: DPE.number(),
	name: DPE.string(),
	email: DPE.string(),
});

const picked = userParser.pick({
	id: true,
	name: true,
});
const result = picked.parse({
	id: 1,
	name: "Alex",
});
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: { id: number; name: string }
}

const omitted = userParser.omit({ email: true });
const omitResult = omitted.parse({
	id: 1,
	name: "Alex",
});

const partialUser = userParser.partial();
const partialResult = partialUser.parse({ name: "Alex" });
