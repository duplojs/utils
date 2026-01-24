import { DP } from "@scripts";

const stringSchema = DP.string({
	checkers: [DP.checkerStringMin(3)],
});

const value = stringSchema.parseOrThrow("DuploJS");
// value: string

try {
	stringSchema.parseOrThrow("ok");
} catch (error) {
	if (error instanceof DP.DataParserThrowError) {
		// parseError: DP.DataParserError
	}
}
