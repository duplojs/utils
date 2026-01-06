```ts
import { C, DP } from "@duplojs/utils";

/* Domain Layer */
// Fold the namespace block in Monaco with foldLines.
export namespace User {
	export const Id = C.createNewType("UserId", DP.number());
	export type Id = C.GetNewType<typeof Id>;

	export const Entity = C.createEntity("User", () => ({
		id: Id,
	}));
	export type Entity = C.GetEntity<typeof Entity>;
}

/* Application Layer */
interface UserRepository {
	findById(id: User.Id): Promise<User.Entity>;
}

const UserRepository = C.createRepository<UserRepository>();
```
