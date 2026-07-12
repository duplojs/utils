import { DPE, DP } from "@scripts";

const numberTransformer = DPE.DataParserCoercerExtended.transformers.get(
	DP.numberKind,
);

DPE.DataParserCoercerExtended.transformers.set(
	DP.stringKind,
	(value) => String(value),
);

const parser = DPE.string().coerce();
const result = parser.parse(42);

if (numberTransformer) {
	DPE.DataParserCoercerExtended.transformers.set(DP.numberKind, numberTransformer);
}
