import { DPE, E, unwrap } from "@scripts";

const parser = DPE.object({
	id: DPE.number(),
	name: DPE.string(),
	email: DPE.string(),
});

const picked = parser.pick({
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

const pickEmail = parser.pick({ email: true });
const emailResult = pickEmail.parse({ email: "a@b.com" });

const pickId = parser.pick({ id: true });
const idResult = pickId.parse({ id: 1 });
