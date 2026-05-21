import { type SimplifyTopLevel, type AnyFunction, type Kind } from "../common";
export declare const portHandlerKind: import("../common").KindHandler<import("../common").KindDefinition<"@DuplojsUtilsClean/port-handler", unknown>>;
export interface PortHandler<GenericPort extends object = object> extends Kind<typeof portHandlerKind.definition> {
    /**
     * Returns the implementation after verifying it matches the port contract.
     * 
     * ```ts
     * // Infrastructure Layer
     * const userNotifierPort = UserNotifierPort.createImplementation({
     * 	notifyFoundUser(user) {
     * 		// external integration
     * 		console.log("Notify user", unwrap(user.nickname));
     * 		return Promise.resolve(E.success(true));
     * 	},
     * });
     * 
     * ```
     * 
     */
    createImplementation(implementation: SimplifyTopLevel<{
        [Prop in keyof GenericPort]: GenericPort[Prop] extends AnyFunction ? (...args: Parameters<GenericPort[Prop]>) => ReturnType<GenericPort[Prop]> : GenericPort[Prop];
    }>): GenericPort;
}
/**
 * Creates a port handler for a contract interface.
 * 
 * **Supported call styles:**
 * - Classic: `createPort<Port>()` -> returns a handler
 * 
 * The handler enforces the port contract at compile time and stays runtime-free. It is meant to be composed with use cases.
 * 
 * ```ts
 * // Domain Layer
 * export namespace User {
 * 	export const Id = C.createNewType("UserId", DP.number(), C.Positive);
 * 	export type Id = C.GetNewType<typeof Id>;
 * 
 * 	export const Nickname = C.createNewType("UserNickname", DP.string());
 * 	export type Nickname = C.GetNewType<typeof Nickname>;
 * 
 * 	export const Role = C.createNewType("UserRole", DP.literal(["admin", "client", "manager"]));
 * 	export type Role = C.GetNewType<typeof Role>;
 * 
 * 	export const Entity = C.createEntity("User", ({ array }) => ({
 * 		id: Id,
 * 		nickname: Nickname,
 * 		roles: array(Role, { min: 1 }),
 * 	}));
 * 	export type Entity = C.GetEntity<typeof Entity>;
 * }
 * 
 * // Application Layer
 * interface UserNotifierPort {
 * 	notifyFoundUser(user: User.Entity): Promise<E.Success<true> | E.Fail>;
 * }
 * 
 * const UserNotifierPort = C.createPort<UserNotifierPort>();
 * 
 * const NotifyFoundUserUseCase = C.createUseCase(
 * 	{ UserNotifierPort },
 * 	(
 * 		{ userNotifierPort },
 * 	) => (user: User.Entity) => userNotifierPort.notifyFoundUser(user),
 * );
 * 
 * // Infrastructure Layer
 * const userNotifierPort = UserNotifierPort.createImplementation({
 * 	notifyFoundUser(user) {
 * 		// external integration
 * 		console.log("Notify user", unwrap(user.nickname));
 * 		return Promise.resolve(E.success(true));
 * 	},
 * });
 * 
 * ```
 * 
 * @remarks
 * - This helper adds no runtime logic; it only validates the contract at compile time.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/port
 * 
 * @namespace C
 * 
 */
export declare function createPort<GenericPort extends object>(): PortHandler<GenericPort>;
export declare namespace createPort {
    var overrideHandler: import("../common").OverrideHandler<PortHandler<object>>;
}
