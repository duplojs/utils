import { E, pipe } from "@scripts";

const left = E.expect(E.fail());
// type: E.Fail

const right = E.expect(E.ok());
// type: E.Ok

const union = E.expect(
	true
		? E.right("success", 1)
		: E.left("failure", "error"),
);
// type: E.Right<"success", 1> | E.Left<"failure", "error">

pipe(
	E.ok(),
	E.expect,
);
