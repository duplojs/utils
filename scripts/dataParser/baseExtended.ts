import { type GetKindHandler, type Kind, type KindHandler, type UnionToIntersection, type NeverCoalescing, createKind, type AnyFunction } from "@scripts/common";
import { type MergeDefinition } from "./types";
import { type DataParser } from "./base";
import type * as dataParsers from "./parsers";
import * as dataParsersExtended from "./extended";

export const dataParserExtendedKind = createKind("data-parser-extended");

export type _DataParserExtended = (
	& DataParser
	& Kind<typeof dataParserExtendedKind.definition>
);

export interface DataParserExtended extends _DataParserExtended {
	array<
		GenericThis extends this = this,
		const GenericDefinition extends Partial<
			Omit<dataParsers.DataParserDefinitionArray, "element">
		> = never,
	>(definition?: GenericDefinition): dataParsersExtended.DataParserArrayExtended<
		MergeDefinition<
			dataParsers.DataParserDefinitionArray,
			NeverCoalescing<GenericDefinition, {}> & { element: GenericThis }
		>
	>;
}

export function dataParserExtendedInit<
	GenericDataParser extends DataParser,
	GenericDataParserExtended extends GenericDataParser & DataParserExtended,
>(
	dataParsers: NoInfer<
		UnionToIntersection<
			Exclude<
				GetKindHandler<GenericDataParserExtended> extends infer InferredKind extends KindHandler
					? Kind<InferredKind["definition"]>
					: never,
				Kind<typeof dataParserExtendedKind.definition>
			>
		>
	>,
	rest: NoInfer<
		{
			[
			Prop in Exclude<
				keyof GenericDataParserExtended,
				keyof (GenericDataParser & DataParserExtended)
			>
			]: GenericDataParserExtended[Prop] extends AnyFunction
				? (
					self: GenericDataParserExtended,
					...args: Parameters<GenericDataParserExtended[Prop]>
				) => ReturnType<GenericDataParserExtended[Prop]>
				: GenericDataParserExtended[Prop]
		}
	>,
): GenericDataParserExtended {
	const dataParser = dataParserExtendedKind.setTo({
		...dataParsers as any,
		array(definition) {
			return dataParsersExtended.array(
				dataParser,
				definition,
			) as never;
		},
		...rest,
	} satisfies DataParserExtended);

	return dataParser as never;
}
