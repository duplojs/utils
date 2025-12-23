import { DPE, E, unwrap } from "@duplojs/utils";

const schema = DPE.string().optional();

const result = schema.parse("duplo");

if (E.isRight(result)) {
	const value = unwrap(result);
} else {
	const error = unwrap(result);
}
