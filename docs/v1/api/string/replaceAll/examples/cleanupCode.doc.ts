import { A, DString, innerPipe, pipe } from "@duplojs/utils";

const input = ["console.log('test')", "console.log('debug')", "const x = 1"];
const result = pipe(
	input,
	A.map(
		innerPipe(
			DString.replaceAll("console.log", "logger.info"),
			DString.replaceAll("'", "\""),
		),
	),
);
// result: ['logger.info("test")', 'logger.info("debug")', 'const x = 1']
