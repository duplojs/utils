import { type GetKindHandler, type Kind, type KindDefinition, type KindHandler } from "./kind";
import { type UnionContain, type UnionToIntersection } from "./types";
import * as DArray from "@scripts/array";
import * as DEither from "@scripts/either";

export function createKindIdentifier<
	GenericParent extends Kind<KindDefinition>,
	GenericChildren extends GenericParent,
>() {
	type KindHandlers = GenericChildren extends infer InferredChildren
		? InferredChildren extends GenericParent
			? GetKindHandler<InferredChildren>
			: never
		: never;

	function identifier<
		GenericKindHandler extends KindHandlers,
		GenericInput extends GenericParent,
		GenericGroupedKind extends UnionToIntersection<
			GenericKindHandler extends KindHandler
				? Kind<GenericKindHandler["definition"]>
				: never
		>,
	>(
		kind: GenericKindHandler | GenericKindHandler[]
	): (
		input: GenericInput
	) =>
		// @ts-expect-error force predicate
		input is (
			| (
				UnionContain<GenericInput, GenericParent> extends true
					? Extract<
						GenericChildren,
						GenericGroupedKind
					>
					: never
			)
			| Extract<
				GenericInput,
				GenericGroupedKind
			>
		);

	function identifier<
		GenericKindHandler extends KindHandlers,
		GenericInput extends GenericParent,
		GenericGroupedKind extends UnionToIntersection<
			GenericKindHandler extends KindHandler
				? Kind<GenericKindHandler["definition"]>
				: never
		>,
	>(
		input: GenericInput,
		kind: GenericKindHandler | GenericKindHandler[]
	):
		// @ts-expect-error force predicate
		input is (
			| (
				UnionContain<GenericInput, GenericParent> extends true
					? Extract<
						GenericChildren,
						GenericGroupedKind
					>
					: never
			)
			| Extract<
				GenericInput,
				GenericGroupedKind
			>
		);

	function identifier(
		...args: | [unknown, KindHandler | KindHandler[]]
		| [KindHandler | KindHandler[]]
	): any {
		if (args.length === 1) {
			const [kind] = args;

			return (input: unknown) => identifier(input as never, kind as never);
		}

		const [input, kind] = args;

		const formattedKind = DArray.coalescing(kind);

		for (const kind of formattedKind) {
			if (!kind.has(input)) {
				return false;
			}
		}

		return true;
	}

	return identifier;
}
