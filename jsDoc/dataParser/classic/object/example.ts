import { DP, E, unwrap } from "@scripts";

const parser = DP.object({
	name: DP.string(),
	age: DP.number(),
});
const result = parser.parse({
	name: "Alex",
	age: 32,
});
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: { name: string; age: number }
}

const partialUser = DP.partial(parser);
const partialResult = partialUser.parse({ name: "Alex" });
// value: { name?: string | undefined }

const requiredUser = DP.required(partialUser);
const requiredResult = requiredUser.parse({
	name: "Alex",
	age: 32,
});
