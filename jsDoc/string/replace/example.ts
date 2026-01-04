import { S, pipe } from "@scripts";

S.replace("DuploJS is the best.", "best", "most complete"); // "DuploJS is the most complete."

S.replace("Order 1234 is ready.", /\d/, "*"); // "Order *234 is ready."

pipe(
	"Hello world",
	S.replace("world", "team"),
); // "Hello team"
