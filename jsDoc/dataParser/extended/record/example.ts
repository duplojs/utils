import { DPE, E, unwrap } from "@scripts";

const parser = DPE.record(DPE.string(), DPE.number());
const result = parser.parse({
	aKey: 1,
	bKey: 2,
});
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: Partial<Record<string, number>>
}

const keyUnion = DPE.union([DPE.literal("xPos"), DPE.literal("yPos")]);
const strictKeys = DPE.record(keyUnion, DPE.boolean());
const strictResult = strictKeys.parse({
	xPos: true,
	yPos: false,
});

const withTemplate = DPE.record(
	DPE.templateLiteral(["id-", DPE.number()]),
	DPE.string(),
);
const templateResult = withTemplate.parse({ "id-1": "value" });
