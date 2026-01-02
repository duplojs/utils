import { A, whenElse } from "@scripts";

A.map(
	["alpha", "beta", "omega"],
	(element, { index, self }) => whenElse(
		self,
		A.isLastIndex(index),
		() => `${element}:last`,
		() => element,
	),
);
