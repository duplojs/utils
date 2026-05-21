import { type SimplifyTopLevel, type AnyFunction, type Kind, createOverride, pipe, type RemoveKind } from "@scripts/common";
import { createCleanKind } from "./kind";

export const portHandlerKind = createCleanKind("port-handler");

export interface PortHandler<
	GenericPort extends object = object,
> extends Kind<typeof portHandlerKind.definition> {

	/**
	 * {@include clean/createPort/createImplementation.md}
	 */
	createImplementation(
		implementation: SimplifyTopLevel<{
			[Prop in keyof GenericPort]: GenericPort[Prop] extends AnyFunction
				? (...args: Parameters<GenericPort[Prop]>) => ReturnType<GenericPort[Prop]>
				: GenericPort[Prop]
		}>
	): GenericPort;
}

/**
 * {@include clean/createPort/index.md}
 */
export function createPort<
	GenericPort extends object,
>(): PortHandler<GenericPort> {
	return pipe(
		{
			createImplementation(implementation: any) {
				return implementation;
			},
		} satisfies Record<keyof RemoveKind<PortHandler>, unknown>,
		portHandlerKind.setTo,
		createPort.overrideHandler.apply as AnyFunction,
	);
}

createPort.overrideHandler = createOverride<PortHandler>("@duplojs/utils/clean/port");
