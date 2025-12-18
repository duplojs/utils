import { DPE, E, unwrap } from "@duplojs/utils";

const schema = DPE.coerce.date().nullable();

const result = schema.parse("2024-01-01T00:00:00.000Z");

if (E.isRight(result)) {
	const value = unwrap(result);
} else {
	const error = unwrap(result);
}
