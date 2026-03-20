import { type DependenceHandler, createInjection } from "./theFlow";

export function *inject<
	GenericDependenceHandler extends DependenceHandler,
>(
	dependenceHandler: GenericDependenceHandler,
) {
	let dependence = undefined as ReturnType<GenericDependenceHandler> | undefined;

	yield createInjection({
		dependenceHandler,
		inject: (value) => {
			dependence = value;
		},
	});

	if (!dependence) {
		throw new Error("");
	}

	return dependence;
}
