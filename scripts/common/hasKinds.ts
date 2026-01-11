import { type Kind, type KindHandler } from "./kind";
import { type AnyTuple, type UnionToIntersection } from "./types";

/**
 * {@include common/hasKinds/index.md}
 */
export function hasKinds<
	GenericInput extends unknown,
	const GenericKindHandlers extends AnyTuple<KindHandler>,
	GenericKindHandler extends GenericKindHandlers[number],
>(
	kinds: GenericKindHandlers,
): (input: GenericInput) => input is Extract<
	GenericInput,
	UnionToIntersection<
		GenericKindHandler extends any
			? Kind<GenericKindHandler["definition"]>
			: never
	>
>;

export function hasKinds<
	GenericInput extends unknown,
	const GenericKindHandlers extends AnyTuple<KindHandler>,
	GenericKindHandler extends GenericKindHandlers[number],
>(
	input: GenericInput,
	kinds: GenericKindHandlers
): input is Extract<
	GenericInput,
	UnionToIntersection<
		GenericKindHandler extends any
			? Kind<GenericKindHandler["definition"]>
			: never
	>
>;

export function hasKinds(
	...args: [AnyTuple<KindHandler>] | [unknown, AnyTuple<KindHandler>]
): any {
	if (args.length === 1) {
		const [kinds] = args;

		return (input: unknown) => hasKinds(input, kinds);
	}

	const [input, kinds] = args;

	for (const kind of kinds) {
		if (!kind.has(input)) {
			return false;
		}
	}

	return true;
}
