import * as DDate from "@scripts/date";
import * as DEither from "@scripts/either";

export function timeTransformer(data: unknown) {
	if (
		typeof data === "string"
		&& DDate.isoTimeRegex.test(data)
	) {
		const result = DDate.createTime({ value: data });

		if (DEither.isRight(result)) {
			return DEither.unwrapRight(result);
		}
	}

	return data;
}
