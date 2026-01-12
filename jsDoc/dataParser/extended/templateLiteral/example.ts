import { DPE, E, unwrap } from "@scripts";

const parser = DPE.templateLiteral(["user-", DPE.number()]);
const result = parser.parse("user-42");
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: string
}

const orderParser = DPE.templateLiteral(["order-", DPE.literal("vip"), "-", DPE.number()]);
const orderResult = orderParser.parse("order-vip-12");

const withLiteral = DPE.templateLiteral([DPE.literal("id-"), DPE.number()]);
const literalResult = withLiteral.parse("id-1");
