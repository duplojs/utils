import { type KindHandler, type UnionToIntersection, type GetKindHandler, type Kind, type UnionContain } from "@scripts/common";
import { type DataParser } from "./base";
import { type DataParsers, type DataParsersExtended } from "./types";
import * as DEither from "@scripts/either";
import * as DArray from "@scripts/array";

type AllDataParsers = (
	| DataParsers
	| DataParsersExtended
);

type KindHandlers = AllDataParsers extends infer InferredDataParser
	? InferredDataParser extends DataParser
		? GetKindHandler<InferredDataParser>
		: never
	: never;

export function identifier<
	GenericKindHandler extends KindHandlers,
	GenericInput extends DataParser,
	GenericDataParserResult extends Extract<
		AllDataParsers,
		UnionToIntersection<
			GenericKindHandler extends KindHandler
				? Kind<GenericKindHandler["definition"]>
				: never
		>
	>,
>(
	kind: GenericKindHandler | GenericKindHandler[]
): (
	input: GenericInput
) => (
	| (
		GenericInput extends any
			? UnionContain<
				GetKindHandler<GenericInput>,
				GenericKindHandler
			> extends true
				? DEither.EitherSuccess<GenericInput>
				: DEither.EitherError<GenericInput>
			: never
	)
	| DEither.EitherSuccess<GenericDataParserResult>
);

export function identifier<
	GenericKindHandler extends KindHandlers,
	GenericInput extends DataParser,
	GenericDataParserResult extends Extract<
		AllDataParsers,
		UnionToIntersection<
			GenericKindHandler extends KindHandler
				? Kind<GenericKindHandler["definition"]>
				: never
		>
	>,
>(
	input: GenericInput,
	kind: GenericKindHandler | GenericKindHandler[],
): (
	| (
		GenericInput extends any
			? UnionContain<
				GetKindHandler<GenericInput>,
				GenericKindHandler
			> extends true
				? DEither.EitherSuccess<GenericInput>
				: DEither.EitherError<GenericInput>
			: never
	)
	| DEither.EitherSuccess<GenericDataParserResult>
);

/**
 * Due to the recursive typing of `DataParsers`, it can’t be used without
 * causing an infinity error. You therefore have to go through the parent
 * type `DataParser`, which makes type discrimination impossible. That’s
 * why the `identifier` function was created. The function ensures that,
 * starting from the parent type and the kinds associated with the data
 * parsers, the correct type can be retrieved.
 */
export function identifier(
	...args: | [DataParser, KindHandler | KindHandler[]]
			| [KindHandler | KindHandler[]]
): any {
	if (args.length === 1) {
		const [kind] = args;

		return (input: DataParser) => identifier(input, kind as never);
	}

	const [input, kind] = args;

	const formattedKind = DArray.coalescing(kind);

	for (const kind of formattedKind) {
		if (!kind.has(input)) {
			return DEither.error(input);
		}
	}

	return DEither.success(input);
}
