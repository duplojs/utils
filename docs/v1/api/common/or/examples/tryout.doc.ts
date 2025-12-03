import { or } from "@duplojs/utils";

type Event =
	| { type: "click"; x: number; y: number }
	| { type: "keydown"; key: string }
	| { type: "hover"; target: string };

const isClick = (e: Event): e is Extract<Event, { type: "click" }> => e.type === "click";
const isHover = (e: Event): e is Extract<Event, { type: "hover" }> => e.type === "hover";

const isPointerEvent = or<Event>([isClick, isHover]);

const evt: Event = { type: "hover", target: "#btn" };
const result = isPointerEvent(evt);
// result: true (type guard -> evt est click ou hover)
