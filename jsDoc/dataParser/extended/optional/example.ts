import { DPE, E, unwrap } from "@scripts";

const parser = DPE.optional(DPE.string());
const result = parser.parse(undefined);
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: string | undefined
}

const withCoalescing = DPE.number().optional().default(0);
const coalesced = withCoalescing.parse(undefined);
// E.Error<DPE.DataParserError> | E.Success<number>

const optionalBool = DPE.optional(DPE.boolean());
const boolResult = optionalBool.parse(true);
// E.Error<DPE.DataParserError> | E.Success<boolean | undefined>
