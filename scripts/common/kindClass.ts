import { createKind, type Kind, type KindDefinition, type KindHandler } from "./kind";
import { type NeverCoalescing, type AnyConstructor, type UnionToIntersection } from "./types";

export type KindClass<
	GenericKindHandler extends KindHandler,
	GenericParent extends AnyConstructor = AnyConstructor<unknown[], never>,
> = new<
	GenericParentInstance extends InstanceType<GenericParent> = InstanceType<GenericParent>,
>(
	...args: [
		kindValue: GenericKindHandler["definition"]["value"],
		...ConstructorParameters<GenericParent>,
	]
) => UnionToIntersection<
	| NeverCoalescing<GenericParentInstance, {}>
	| Kind<GenericKindHandler["definition"]>
>;

export function kindClass<
	GenericKind extends string,
	GenericParent extends AnyConstructor = AnyConstructor<unknown[], never>,
>(
	kind: GenericKind,
	parent?: GenericParent,
): KindClass<
	KindHandler<KindDefinition<GenericKind>>,
	GenericParent
>;

export function kindClass<
	GenericKindHandler extends KindHandler,
	GenericParent extends AnyConstructor = AnyConstructor<unknown[], never>,
>(
	kindHandler: GenericKindHandler,
	parent?: GenericParent,
): KindClass<
	GenericKindHandler,
	GenericParent
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
