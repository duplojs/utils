import { F } from "@scripts";

const database = F.createDependence("database")<string>;

F.run(
	function *() {
		const connection = yield *F.inject(database);
		return connection;
	},
	{ dependencies: { database: "main-db" } },
); // "main-db"

F.run(
	function *() {
		return yield *F.exec(
			function *() {
				const connection = yield *F.inject(database);
				return connection;
			},
			{ dependencies: { database: "replica-db" } },
		);
	},
	{ dependencies: { database: "main-db" } },
); // "replica-db"
