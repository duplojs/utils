import { E, pipe, type ExpectType } from "@duplojs/utils";

const leftResult = E.expect(E.fail());

type leftCheck = ExpectType<
	typeof leftResult,
	E.Fail,
	"strict"
>;

const pipedResult = pipe(
	true
		? E.ok()
		: E.fail(),
	E.expect,
);

type pipedCheck = ExpectType<
	typeof pipedResult,
	E.Ok | E.Fail,
	"strict"
>;
