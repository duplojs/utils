import { C, DP, pipe } from "@scripts";

const ShortLabel = C.createNewType(
	"ShortLabel",
	DP.string(),
	[C.StringMax(5)],
);

const labelParser = C.toMapDataParser(ShortLabel);
labelParser.parseOrThrow("hello");

const userIdParser = pipe(
	C.Number,
	C.toMapDataParser,
);
userIdParser.parseOrThrow(42);

const coerceParser = C.toMapDataParser(
	C.String,
	{ coerce: true },
);
coerceParser.parseOrThrow(123);
