import { E, unwrap, DPE, DP, DDate } from "@duplojs/utils";

const schema = DPE
	.time()
	.min(
		DDate.createTime(0, "millisecond"),
	);

const result = schema.parse(300000);

if (E.isRight(result)) {
	const value = unwrap(result);
} else {
	const error = unwrap(result);
}
