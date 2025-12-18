import { DPE, E, S, unwrap } from "@duplojs/utils";

const schema = DPE.object({
	name: DPE.string(),
	lastname: DPE.string(),
}).transform(
	({ name, lastname }) => S.concat(name, " ", lastname),
);

const result = schema.parse({
	name: "John",
	lastname: "Doe",
});

if (E.isRight(result)) {
	const value = unwrap(result);
} else {
	const error = unwrap(result);
}
