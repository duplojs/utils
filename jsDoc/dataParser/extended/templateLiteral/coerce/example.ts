import { DPE, E, unwrap } from "@scripts";

const parser = DPE.templateLiteral([DPE.number()]).coerce();
const result = parser.parse(42);
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: `${number}`
}

const withPrefix = DPE.templateLiteral([
	"item-",
	DPE.number(),
]).coerce();
const prefixResult = withPrefix.parse("item-42");

const nullableTemplate = DPE.templateLiteral([DPE.number()])
	.coerce()
	.nullable();
const nullableResult = nullableTemplate.parse(null);
