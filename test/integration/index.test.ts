import * as allExport from "@duplojs/utils";

it("export all", () => {
	expect(Object.keys(allExport))
		.toEqual([
			"InvalidBytesInStringError",
			"UnPartialError",
			"clone",
			"createInterpolation",
			"entryUseMapper",
			"escapeRegExp",
			"getTypedEntries",
			"getTypedKeys",
			"hasKey",
			"simpleClone",
			"sleep",
			"stringToBytes",
			"unPartial",
		]);
});
