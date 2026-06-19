import { C, pipe } from "@scripts";

const status = C.String.createOrThrow(
	"success" as "success" | "failure",
);

C.matchWithString(status, {
	success: () => 200,
	failure: () => 500,
}); // 200 | 500

pipe(
	status,
	C.matchWithString({
		success: (value) => value,
		failure: () => status,
	}),
); // C.Primitive<"success" | "failure">

const noBlankStatus = C.NoBlank.createOrThrow(
	"success" as "success" | "failure",
);

C.matchWithString(noBlankStatus, {
	success: (value) => value,
	failure: (value) => value,
}); // C.ConstrainedType<"no-blank", "success" | "failure">
