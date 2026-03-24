import { F } from "@duplojs/utils";

const database = F.createDependence("database")<string>;

const result = F.run(
	function *() {
		const connection = yield *F.inject(database);
		return connection;
	},
	{ dependencies: { database: "main-db" } },
);
// result: "main-db"
