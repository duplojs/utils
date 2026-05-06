import { E, unwrap, DP, type ExpectType } from "@duplojs/utils";
import { type DataParserDefinition, dataParserBaseInit } from "@duplojs/utils/dataParser";

declare module "@duplojs/utils/dataParser" {
	interface DataParserBase<
		GenericDefinition extends DataParserDefinition = DataParserDefinition,
		GenericOutput extends unknown = unknown,
		GenericInput extends unknown = GenericOutput,
	> {
		parseOrThrow(
			data: unknown,
		): GenericOutput;
	}
}

dataParserBaseInit.overrideHandler.setMethod("parseOrThrow", (parser, data) => {
	const result = parser.parse(data);

	if (E.isLeft(result)) {
		throw new Error("Parsing Error");
	}

	return unwrap(result);
});

const schema = DP.string();

const result = schema.parseOrThrow(null);

type check = ExpectType<
	typeof result,
	string,
	"strict"
>;
