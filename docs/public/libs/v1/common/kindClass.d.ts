import { type Kind, type KindDefinition, type KindHandler } from "./kind";
import { type NeverCoalescing, type AnyConstructor, type UnionToIntersection } from "./types";
export type KindClass<GenericKindHandler extends KindHandler, GenericParent extends AnyConstructor = AnyConstructor<unknown[], never>> = new <GenericParentInstance extends InstanceType<GenericParent> = InstanceType<GenericParent>>(...args: [
    kindValue: GenericKindHandler["definition"]["value"],
    ...ConstructorParameters<GenericParent>
]) => UnionToIntersection<NeverCoalescing<GenericParentInstance, {}> | Kind<GenericKindHandler["definition"]>>;
export declare function kindClass<GenericKind extends string, GenericParent extends AnyConstructor = AnyConstructor<unknown[], never>>(kind: GenericKind, parent?: GenericParent): KindClass<KindHandler<KindDefinition<GenericKind>>, GenericParent>;
export declare function kindClass<GenericKindHandler extends KindHandler, GenericParent extends AnyConstructor = AnyConstructor<unknown[], never>>(kindHandler: GenericKindHandler, parent?: GenericParent): KindClass<GenericKindHandler, GenericParent>;
