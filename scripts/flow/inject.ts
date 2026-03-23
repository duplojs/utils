import { type DependenceHandler, type Injection, createInjection } from "./theFlow";

export function *inject<
	GenericDependenceHandler extends DependenceHandler,
>(
	dependenceHandler: GenericDependenceHandler,
): Generator<
		Injection<GenericDependenceHandler>,
		ReturnType<GenericDependenceHandler>
	> {
	let dependence = undefined as ReturnType<GenericDependenceHandler> | undefined;

	yield createInjection({
		dependenceHandler,
		inject: (value) => {
			dependence = value;
		},
	});

	return dependence as never;
}
