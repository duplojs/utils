import { not } from "@duplojs/utils";

type Message =
	| { level: "info"; text: string }
	| { level: "error"; text: string };

const isError = (m: Message): m is Extract<Message, { level: "error" }> => m.level === "error";
const isNotError = not(isError);

const messages: Message[] = [
	{ level: "info", text: "ok" },
	{ level: "error", text: "boom" },
];

const infos = messages.filter(isNotError);
// infos: [{ level: "info", text: "ok" }]
