import { type Kind } from "../../common";
export declare const dependenceHandlerKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsFlow/dependence-handler", string>>;
export interface DependenceHandlerKind<GenericName extends string = string> extends Kind<typeof dependenceHandlerKind.definition, GenericName> {
}
export type DependenceHandler<GenericName extends string = string, GenericType extends any = any> = (DependenceHandlerKind<GenericName> & ((implementation: GenericType) => GenericType));
export type DependenceHandlerDefinition<GenericName extends string = string> = (DependenceHandlerKind<GenericName> & (<GenericType extends unknown>(implementation: GenericType) => GenericType));
/**
 * Creates a typed dependency handler for the flow system.
 * 
 * **Supported call styles:**
 * - Classic: `createDependence(name)` -> returns a typed dependence handler definition
 * 
 * `createDependence` creates a dependency descriptor identified by a string name.
 * The returned handler is used with `inject(...)` and lets `run(...)` or `exec(...)` map a dependency bag to strongly typed values.
 * At runtime, the handler also behaves like an identity function for the injected implementation.
 * 
 * ```ts
 * const database = F.createDependence("database")<string>;
 * 
 * F.run(
 * 	function *() {
 * 		const connection = yield *F.inject(database);
 * 		return connection;
 * 	},
 * 	{ dependencies: { database: database("main-db") } },
 * ); // "main-db"
 * 
 * const apiClient = F.createDependence("apiClient")<{ baseUrl: string }>;
 * 
 * F.run(
 * 	function *() {
 * 		const client = yield *F.inject(apiClient);
 * 		return client.baseUrl;
 * 	},
 * 	{ dependencies: { apiClient: apiClient({ baseUrl: "/api" }) } },
 * ); // "/api"
 * 
 * database("replica-db"); // "replica-db"
 * ```
 * 
 * @remarks
 * - Use the returned dependence handler together with `inject(...)`
 * 
 * @see [`F.inject`](https://utils.duplojs.dev/en/v1/api/flow/inject) To request the dependency inside a flow
 * @see https://utils.duplojs.dev/en/v1/api/flow/createDependence
 * 
 * @namespace F
 * 
 */
export declare function createDependence<GenericName extends string>(name: GenericName): DependenceHandlerDefinition<GenericName>;
