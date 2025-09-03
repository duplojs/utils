import { pipe } from "@scripts/common";

export function of(): <GenericElement extends unknown>(
	...elements: GenericElement[]
) => GenericElement[];

export function of<GenericElement extends unknown>(
	...elements: GenericElement[]
): GenericElement[];

export function of(...args: unknown[]) {
	if (args.length === 0) {
		return (...elements: unknown[]) => elements;
	}

	return args;
}
