import { type DependenceHandler, type Injection } from "./theFlow";
/**
 * Requests a dependency from the flow runner.
 * 
 * **Supported call styles:**
 * - Classic: `inject(dependenceHandler)` -> yields an injection effect and returns the injected value
 * 
 * `inject` lets a flow declare that it needs a dependency by using a dependence handler created with `F.createDependence(...)`.
 * When `F.run(...)` or `F.exec(...)` receives matching dependencies, the requested value is injected back into the flow.
 * If the dependency is missing, the runner throws a missing dependence error.
 * 
 * ```ts
 * const database = F.createDependence("database")<string>;
 * 
 * F.run(
 * 	function *() {
 * 		const connection = yield *F.inject(database);
 * 		return connection;
 * 	},
 * 	{ dependencies: { database: "main-db" } },
 * ); // "main-db"
 * 
 * F.run(
 * 	function *() {
 * 		return yield *F.exec(
 * 			function *() {
 * 				const connection = yield *F.inject(database);
 * 				return connection;
 * 			},
 * 			{ dependencies: { database: "replica-db" } },
 * 		);
 * 	},
 * 	{ dependencies: { database: "main-db" } },
 * ); // "replica-db"
 * ```
 * 
 * @remarks
 * - `inject` keeps dependencies explicit in flow definitions
 * 
 * @see [`F.run`](https://utils.duplojs.dev/en/v1/api/flow/run) For providing dependencies
 * @see https://utils.duplojs.dev/en/v1/api/flow/inject
 * 
 * @namespace F
 * 
 */
export declare function inject<GenericDependenceHandler extends DependenceHandler>(dependenceHandler: GenericDependenceHandler): Generator<Injection<GenericDependenceHandler>, ReturnType<GenericDependenceHandler>>;
