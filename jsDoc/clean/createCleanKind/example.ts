import { C } from "@scripts";

const customKind = C.createCleanKind("my-kind");

const holder = customKind.setTo({
	value: 123,
});

customKind.has(holder); // true

const tagged = customKind.addTo(
	{ name: "Ada" },
	"my-kind",
);
customKind.has(tagged); // true

const secondKind = C.createCleanKind("other-kind");
secondKind.has(holder); // false
