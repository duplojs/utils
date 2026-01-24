import { S } from "@duplojs/utils";

const input = "id=order-42";
const result = S.extract(input, /(?<name>\\w+)-(\\d+)/);

/** result: {
 *   matchedValue: "order-42",
 *   groups: ["order", "42"],
 *   namedGroups: { name: "order" },
 *   offset: 3,
 *   self: "id=order-42",
 * }
 */

const result2 = S.extract("hello", /\\d+/);
// result2: undefined
