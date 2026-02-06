import { E, unwrap, DPE, DDate } from "@duplojs/utils";

const schema = DPE
	.time()
	.min(
		DDate.createTime(0, "millisecond"),
	);

const result = schema.parse("00:05:00");

if (E.isRight(result)) {
	const value = unwrap(result);
} else {
	const error = unwrap(result);
}
