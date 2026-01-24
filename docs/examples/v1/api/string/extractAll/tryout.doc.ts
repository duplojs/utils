import { A, S, pipe } from "@duplojs/utils";

const input = "id=1; id=2";
const result = pipe(
	input,
	S.extractAll(/id=(\\d+)/g),
	A.from,
);

/** result: [
 *   {
 *     matchedValue: "id=1",
 *     groups: ["1"],
 *     namedGroups: undefined,
 *     offset: 0,
 *     self: "id=1; id=2"
 *   },
 *   {
 *     matchedValue: "id=2",
 *     groups: ["2"],
 *     namedGroups: undefined,
 *     offset: 6,
 *     self: "id=1; id=2"
 *   }
 * ] */
