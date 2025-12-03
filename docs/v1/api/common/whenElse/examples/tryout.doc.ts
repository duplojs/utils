import { whenElse } from "@duplojs/utils";

type Shape =
	| { kind: "circle"; radius: number }
	| { kind: "square"; size: number };

const describe = whenElse<Shape, string, string>(
	shape => shape.kind === "circle",
	shape => `Circle area ≈ ${Math.PI * shape.radius * shape.radius}`,
	shape => `Square area = ${shape.size * shape.size}`
);

const circle = describe({ kind: "circle", radius: 2 });
// "Circle area ≈ 12.566370614359172"

const square = describe({ kind: "square", size: 3 });
// "Square area = 9"
