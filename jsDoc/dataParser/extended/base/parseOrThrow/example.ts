import { DP, DPE } from "@scripts";

const stringSchema = DPE.string().min(3);

const value = stringSchema.parseOrThrow("DuploJS");
// value: string

try {
	stringSchema.parseOrThrow("ok");
} catch (error) {
	if (error instanceof DP.DataParserThrowError) {
		// DP.DataParserError
	}
}
