import { F } from "@scripts";

const database = F.createDependence("database")<string>;

F.run(
	function *() {
		const connection = yield *F.inject(database);
		return connection;
	},
	{ dependencies: { database: database("main-db") } },
); // "main-db"

const apiClient = F.createDependence("apiClient")<{ baseUrl: string }>;

F.run(
	function *() {
		const client = yield *F.inject(apiClient);
		return client.baseUrl;
	},
	{ dependencies: { apiClient: apiClient({ baseUrl: "/api" }) } },
); // "/api"

database("replica-db"); // "replica-db"
