import { S, pipe } from "@scripts";

S.extract("id=order-42", /(?<name>\w+)-(\d+)/);
// {
//   matchedValue: "order-42",
//   groups: ["order", "42"],
//   namedGroups: { name: "order" },
//   offset: 3,
//   self: "id=order-42",
// }

S.extract("hello", /\d+/); // undefined

pipe(
	"user-7",
	S.extract(/(\w+)-(\d+)/),
); // ExtractResult | undefined
