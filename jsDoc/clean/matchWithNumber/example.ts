import { C, pipe } from "@scripts";

const status = C.Number.createOrThrow(
	200 as 200 | 404,
);

C.matchWithNumber(status, {
	200: () => "success",
	404: () => "missing",
}); // "success" | "missing"

pipe(
	status,
	C.matchWithNumber({
		200: (value) => value,
		404: () => status,
	}),
); // C.Primitive<200 | 404>

const positiveStatus = C.Positive.createOrThrow(
	200 as 200 | 404,
);

C.matchWithNumber(positiveStatus, {
	200: (value) => value,
	404: (value) => value,
}); // C.ConstrainedType<"positive", 200 | 404>
