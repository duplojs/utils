import { D, DP } from "@scripts";

const parser = DP.time({
	checkers: [DP.checkerTimeMax(D.createTime(2, "minute"))],
});

const valid = parser.parse("time1500+");
// valid: Error<DP.DataParserError> | Success<D.TheTime>

const invalid = parser.parse("time2500+");
// invalid: Error<DP.DataParserError> | Success<D.TheTime>
