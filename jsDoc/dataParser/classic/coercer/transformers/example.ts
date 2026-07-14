import { DP } from "@scripts";

const numberTransformer = DP.DataParserCoercer.transformers.get(
	DP.numberKind,
);

DP.DataParserCoercer.transformers.set(
	DP.stringKind,
	(value) => String(value),
);

const parser = DP.coercer(DP.string());
const result = parser.parse(42);
