import { type AnyAbstractConstructor } from "./anyConstructor";
import { type ClearClassKeys } from "./clearClassKeys";
export type RemoveAbstractFromConstructor<GenericConstructor extends AnyAbstractConstructor> = ((new (...args: ConstructorParameters<GenericConstructor>) => InstanceType<GenericConstructor>) & {
    [Prop in Exclude<keyof GenericConstructor, ClearClassKeys>]: GenericConstructor[Prop];
});
