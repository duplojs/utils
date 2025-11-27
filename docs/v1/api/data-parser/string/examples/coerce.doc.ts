import { unwrap, E, DPC } from "@duplojs/utils";

const schema = DPC.string();
// or
// const schema = DP.coerce.string();
// or
// const schema = DP.string({ coerce: true });

const result = schema.parse(11111);

if (E.isRight(result)) {
	const value = unwrap(result);
} else {
	const error = unwrap(result);
}
