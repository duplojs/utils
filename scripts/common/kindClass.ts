import { createKind, type Kind, type KindDefinition, type KindHandler } from "./kind";
import { type NeverCoalescing, type AnyConstructor, type RequireConstructor, type IsEqual, type ClearClassKeys, type AnyAbstractConstructor } from "./types";

export type KindClass<
	GenericKindHandler extends KindHandler,
	GenericParent extends AnyAbstractConstructor = AnyAbstractConstructor<unknown[], never>,
> = (
	& (
		new<
			GenericParentInstance extends InstanceType<GenericParent> = InstanceType<GenericParent>,
			GenericKindValue extends GenericKindHandler["definition"]["value"] = GenericKindHandler["definition"]["value"],
		>(
			kindValue: GenericKindValue,
			...args: NeverCoalescing<ConstructorParameters<GenericParent>, []>
		) => (
			& NeverCoalescing<GenericParentInstance, {}>
			& Kind<GenericKindHandler["definition"], GenericKindValue>
		)
	)
	& (
		IsEqual<GenericParent, never> extends true
			? {}
			: {
				[Prop in Exclude<keyof GenericParent, ClearClassKeys>]: GenericParent[Prop]
			}
	)
);

export function kindClass<
	GenericKind extends string,
	GenericParent extends object = never,
>(
	kind: GenericKind,
	parent?: GenericParent & RequireConstructor<GenericParent>,
): KindClass<
	KindHandler<KindDefinition<GenericKind>>,
	Extract<GenericParent, AnyAbstractConstructor>
>;

export function kindClass<
	GenericKindHandler extends KindHandler,
	GenericParent extends object = never,
>(
	kindHandler: GenericKindHandler,
	parent?: GenericParent & RequireConstructor<GenericParent>,
): KindClass<
	GenericKindHandler,
	Extract<GenericParent, AnyAbstractConstructor>
>;

export function kindClass(
	kindHandler: KindHandler | string,
	parent?: AnyConstructor,
): any {
	const formattedKindHandler = typeof kindHandler === "string"
		? createKind(kindHandler as never)
		: kindHandler;

	return class extends (parent ?? class {}) {
		public constructor(
			kindValue: unknown,
			...parentParams: unknown[]
		) {
			super(...parentParams);
			this[formattedKindHandler.runTimeKey] = kindValue;
		}

		public static override [Symbol.hasInstance] = formattedKindHandler.has;
	};
}
