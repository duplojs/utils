import { createOverride } from "@scripts";

interface Service {
	readonly prefix: string;
	greet(name: string): string;
}

function createService(prefix: string): Service {
	const self: Service = {
		prefix,
		greet: (name) => `${prefix} ${name}`,
	};

	return createService.overrideHandler.apply(self);
}

createService.overrideHandler = createOverride<Service>(
	"@duplojs/utils/docs/service",
);

const base = createService("Hello");
base.greet("Ada");
// "Hello Ada"

// "Plugin": modifie ce qui sera appliqué à la création
createService.overrideHandler.setPropertyDefaultValue("prefix", "Hi");
createService.overrideHandler.setMethod("greet", (self, name) => `${self.prefix} ${name.toUpperCase()}`);

const overridden = createService("Hello");
// prefix override + greet override
overridden.greet("Ada");
// "Hi ADA"
