import { type GetKindValue, type Kind } from "@scripts/common";
import { createFlowKind } from "../kind";
import { type Step } from "./step";
import { type Exit } from "./exit";
import { type Injection } from "./injection";
import { type Break } from "./break";
import { type Defer } from "./defer";
import { type Finalizer } from "./finalizer";
import { type DependenceHandler, type dependenceHandlerKind } from "./dependence";
import { type Throttling } from "./throttling";
import { type CalledByNext } from "./calledByNext";
import { type Queue } from "./queue";
import { type Debounce } from "./debounce";

export * from "./step";
export * from "./exit";
export * from "./break";
export * from "./injection";
export * from "./defer";
export * from "./finalizer";
export * from "./dependence";
export * from "./throttling";
export * from "./calledByNext";
export * from "./queue";
export * from "./debounce";

// <3
export type Effect = (
	| Injection
	| Step
	| Exit
	| Break
	| Defer
	| Finalizer
	| Throttling
	| CalledByNext
	| Queue
	| Debounce
);

export type TheFlowGenerator<
	GenericOutput extends unknown = unknown,
	GenericEffect extends Effect = Effect,
> = (
	| Generator<
		Exclude<
			GenericEffect,
			(
				| Queue
				| CalledByNext
				| Debounce
			)
		>,
		GenericOutput
	>
	| AsyncGenerator<
		GenericEffect,
		GenericOutput
	>
);

export type TheFlowFunction<
	GenericInput extends any = any,
	GenericGenerator extends TheFlowGenerator = TheFlowGenerator,
> = (input: GenericInput) => GenericGenerator;

export interface TheFlowProperties<
	GenericFunction extends TheFlowFunction = TheFlowFunction,
> {
	run: GenericFunction;
}

export const theFlowKind = createFlowKind<
	"the-flow",
	TheFlowProperties
>("the-flow");

export interface TheFlow<
	GenericFunction extends TheFlowFunction = TheFlowFunction,
> extends Kind<
		typeof theFlowKind.definition,
		TheFlowProperties<
			GenericFunction
		>
	> {

}

/**
 * {@include flow/create/index.md}
 */
export function create<
	GenericTheFlowFunction extends TheFlowFunction,
>(
	theFunction: GenericTheFlowFunction,
): TheFlow<GenericTheFlowFunction> {
	return theFlowKind.setTo(
		{},
		{ run: theFunction },
	);
}

export type FlowInput<
	GenericFlow extends TheFlow,
> = GenericFlow extends TheFlow<infer InferredFunction>
	? InferredFunction extends TheFlowFunction<infer InferredInput>
		? InferredInput
		: never
	: never;

export type WrapFlow<
	GenericFlow extends (
		| TheFlow
		| TheFlowFunction
		| TheFlowGenerator
	),
> = GenericFlow extends TheFlowGenerator
	? TheFlow<TheFlowFunction<unknown, GenericFlow>>
	: GenericFlow extends TheFlowFunction
		? TheFlow<GenericFlow>
		: Extract<GenericFlow, TheFlow>;

export type FlowDependencies<
	GenericFlow extends TheFlow,
> = (
	ExtractFlowGenerator<GenericFlow> extends TheFlowGenerator<
		any,
		infer InferredEffect
	>
		? InferredEffect extends Injection<infer InferredDependenceHandler>
			? InferredDependenceHandler
			: never
		: never
) extends infer InferredDependenceHandler extends DependenceHandler
	? {
		[
		Dependence in InferredDependenceHandler
		as Extract<GetKindValue<typeof dependenceHandlerKind, Dependence>, string>
		]: ReturnType<InferredDependenceHandler>
	}
	: never;

export type ExtractFlowGenerator<
	GenericFlow extends TheFlow,
> = GenericFlow extends TheFlow<infer InferredFunction>
	? InferredFunction extends TheFlowFunction<
		any,
		infer InferredGenerator
	>
		? InferredGenerator
		: never
	: never;
