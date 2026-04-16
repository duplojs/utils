import { DClean, DDataParser } from "@duplojs/utils";

const Label = DClean.createNewType(
	"Label",
	DDataParser.string(),
	[DClean.StringMax(5)],
);

const parser = DClean.toMapDataParser(
	Label,
	{ coerce: true },
);

const mappedLabel = parser.parseOrThrow(42);

