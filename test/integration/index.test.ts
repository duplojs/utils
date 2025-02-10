import * as allExport from "@duplojs/utils";

it("export all", () => {
	expect(Object.keys(allExport))
		.toEqual([
			"InvalidBytesInStringError",
			"UnPartialError",
			"clone",
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
