import { unwrapGroup, wrapValue } from "@scripts";

const first = unwrapGroup({
	value: wrapValue(1),
});
// { value: 1 }

const mixed = unwrapGroup({
	count: wrapValue(2),
	label: "ok",
});
// { count: 2, label: "ok" }

const user = unwrapGroup({
	firstName: wrapValue("Ada"),
	lastName: "Lovelace",
});
// { firstName: "Ada", lastName: "Lovelace" }
