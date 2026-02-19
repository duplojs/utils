import { justExec } from "@scripts";

const numberResult = justExec(
	() => 42 as const,
);
// type: 42

const objectResult = justExec(
	() => ({
		id: 1,
		name: "ZeRiix",
	}),
);
// type: { id: number; name: string; }
