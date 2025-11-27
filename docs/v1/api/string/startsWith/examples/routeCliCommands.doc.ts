import { DString, P, pipe } from "@duplojs/utils";

const command = "user:create --name John --email john@example.com";

const result = pipe(
	command,
	P.when(
		DString.startsWith("user:"),
		(cmd) => ({
			resource: "user",
			action: pipe(
				cmd,
				P.when(
					DString.includes("create"),
					() => "create" as const,
				),
				P.when(
					DString.includes("update"),
					() => "update" as const,
				),
				P.when(
					DString.includes("delete"),
					() => "delete" as const,
				),
				P.otherwise(() => "unknown" as const),
			),
			args: DString.replace(cmd, /^user:\w+\s*/, ""),
		}),
	),
	P.when(
		DString.startsWith("db:"),
		(cmd) => ({
			resource: "database",
			action: pipe(
				cmd,
				P.when(
					DString.includes("migrate"),
					() => "migrate" as const,
				),
				P.when(
					DString.includes("seed"),
					() => "seed" as const,
				),
				P.otherwise(() => "unknown" as const),
			),
			args: DString.replace(cmd, /^db:\w+\s*/, ""),
		}),
	),
	P.otherwise(() => ({
		resource: "unknown",
		action: "unknown" as const,
		args: "",
	})),
);

/**
 * result: {
 *   resource: "user",
 *   action: "create",
 *   args: "--name John --email john@example.com"
 * }
 */
