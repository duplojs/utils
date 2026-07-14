import * as DDate from "@scripts/date";

export function dateTransformer(data: unknown) {
	if (
		typeof data === "number"
		&& DDate.isSafeTimestamp(data)
	) {
		return DDate.TheDate.new(data);
	}

	if (typeof data === "string") {
		const date = new Date(data);
		const timestamp = date.getTime();
		if (DDate.isSafeTimestamp(timestamp)) {
			return DDate.TheDate.new(timestamp);
		}
	}

	return data;
}
