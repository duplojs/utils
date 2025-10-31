import { DString, DPattern, pipe } from "@duplojs/utils";

const command = "user:create --name John --email john@example.com";

const result = pipe(
	command,
	DPattern.when(
		DString.startsWith("user:"),
		(cmd) => ({
			resource: "user",
			action: pipe(
				cmd,
				DPattern.when(
					DString.includes("create"),
					() => "create" as const,
				),
				DPattern.when(
					DString.includes("update"),
					() => "update" as const,
				),
				DPattern.when(
					DString.includes("delete"),
					() => "delete" as const,
				),
				DPattern.otherwise(() => "unknown" as const),
			),
			args: DString.replace(cmd, /^user:\w+\s*/, ""),
		}),
	),
	DPattern.when(
		DString.startsWith("db:"),
		(cmd) => ({
			resource: "database",
			action: pipe(
				cmd,
				DPattern.when(
					DString.includes("migrate"),
					() => "migrate" as const,
				),
				DPattern.when(
					DString.includes("seed"),
					() => "seed" as const,
				),
				DPattern.otherwise(() => "unknown" as const),
			),
			args: DString.replace(cmd, /^db:\w+\s*/, ""),
		}),
	),
	DPattern.otherwise(() => ({
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
