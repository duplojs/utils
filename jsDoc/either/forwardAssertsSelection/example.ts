import { E, pipe, type ExpectType } from "@scripts";

const operation = true
	? E.right("operation.success", 42)
	: E.left("operation.failure", "error");

const selectedOperation = E.forwardAssertsSelection(operation, {
	"operation.success": true,
	"operation.failure": false,
});

type selectedOperationCheck = ExpectType<
	typeof selectedOperation,
	E.Right<"operation.success", 42>,
	"strict"
>;

const rawValue = E.forwardAssertsSelection("unchanged", {});

type rawValueCheck = ExpectType<
	typeof rawValue,
	"unchanged",
	"strict"
>;

const pipedOperation = pipe(
	operation,
	E.forwardAssertsSelection({
		"operation.success": true,
		"operation.failure": true,
	}),
);

type pipedOperationCheck = ExpectType<
	typeof pipedOperation,
	| E.Right<"operation.success", 42>
	| E.Left<"operation.failure", "error">,
	"strict"
>;
