import { type Kind, type KindHandler } from "./kind";
import { type AnyTuple } from "./types";

/**
 * {@include common/hasSomeKinds/index.md}
 */
export function hasSomeKinds<
	GenericInput extends unknown,
	const GenericKindHandlers extends AnyTuple<KindHandler>,
	GenericKindHandler extends GenericKindHandlers[number],
>(
	kinds: GenericKindHandlers,
): (input: GenericInput) => input is Extract<
	GenericInput,
	GenericKindHandler extends any
		? Kind<GenericKindHandler["definition"]>
		: never
>;

export function hasSomeKinds<
	GenericInput extends unknown,
	const GenericKindHandlers extends AnyTuple<KindHandler>,
	GenericKindHandler extends GenericKindHandlers[number],
>(
	input: GenericInput,
	kinds: GenericKindHandlers
): input is Extract<
	GenericInput,
	GenericKindHandler extends any
		? Kind<GenericKindHandler["definition"]>
		: never
>;

export function hasSomeKinds(
	...args: [AnyTuple<KindHandler>] | [unknown, AnyTuple<KindHandler>]
): any {
	if (args.length === 1) {
		const [kinds] = args;

		return (input: unknown) => hasSomeKinds(input, kinds);
	}

	const [input, kinds] = args;

	for (const kind of kinds) {
		if (kind.has(input)) {
			return true;
		}
	}

	return false;
}
