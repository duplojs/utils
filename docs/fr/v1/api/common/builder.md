---
outline: [2, 3]
prev:
  text: "globalStore"
  link: "/fr/v1/api/common/globalStore"
next:
  text: "override"
  link: "/fr/v1/api/common/override"
---

# builder

La fonction **`createBuilder()`** permet de créer un **builder** dont les méthodes peuvent être **définies après la déclaration** (et même redéfinies), tout en gardant un **typage strict**.

L’idée : vous déclarez une interface de builder (les signatures des méthodes), puis vous “branchez” l’implémentation de ces méthodes via `handler.set(...)`. Le builder est alors utilisable via `handler.use(accumulator)` avec un chaînage fluide.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/builder/tryout.doc.ts"
  majorVersion="v1"
  height="820px"
/>

## Pourquoi c’est overridable facilement ?

Les méthodes sont stockées dans un store global **par nom de builder** (`builderName`). Cela permet :

- de définir des méthodes dans différents modules (plugin-like)
- de **redéfinir** une méthode plus tard (le “dernier set gagne”)
- d’avoir un builder instancié (via `use`) qui utilise toujours les méthodes du store

## Extension par override d’interface (méthodes “dynamiques”)

En plus de l’override runtime (`handler.set(...)`), vous pouvez aussi **étendre le typing** du builder via **fusion d’interface** TypeScript, ce qui permet d’ajouter de nouvelles méthodes “dynamiquement” (côté types) depuis un autre module.

Exemple (pattern plugin) :

```typescript
// urlBuilder.ts
export interface UrlBuilder extends Builder<UrlAccumulator> {
	path(segment: string): UrlBuilder;
	build(): string;
}
export const urlBuilderHandler = createBuilder<UrlBuilder>("urlBuilder");
```

```typescript
// plugin-auth.ts (ailleurs)
import { urlBuilderHandler } from "./urlBuilder";

declare module "./urlBuilder" {
	interface UrlBuilder {
		auth(token: string): UrlBuilder;
	}
}

urlBuilderHandler.set("auth", ({ args, accumulator, next }) => {
	const [token] = args;
	return next({
		...accumulator,
		query: { ...accumulator.query, token },
	});
});
```

La méthode devient disponible à la fois :
- au runtime (parce que vous l’avez enregistrée via `set`)
- au compile-time (parce que l’interface `UrlBuilder` a été augmentée)

## Syntaxe

```typescript
interface Builder<
	GenericAccumulator extends object = object
> {}

interface BuilderHandler<
	GenericBuilder extends Builder = Builder
> {
	set(
		method: keyof GenericBuilder,
		theFunction: (params: {
			args: unknown[];
			accumulator: object;
			next(newAccumulator: object): unknown;
		}) => unknown
	): BuilderHandler<GenericBuilder>;

	use(accumulator: object): GenericBuilder;
}

function createBuilder<
	GenericBuilder extends Builder
>(builderName: string): BuilderHandler<GenericBuilder>;
```

## Notes d’usage

- **Accumulator** : c’est l’objet interne que votre builder fait évoluer. Il est typé via `Builder<YourAccumulator>`.
- **Chaînage** : pour une méthode qui retourne le builder, l’implémentation doit retourner `params.next(newAccumulator)` (cela permet au runtime de savoir qu’il faut continuer le chain).
- **Erreurs** : appeler une méthode non définie via `set` lève une `MissingBuilderMethodsError`.

## Voir aussi

- [`globalStore`](/fr/v1/api/common/globalStore) - Stockage global par process
- [`kind`](/fr/v1/api/common/kind) - Tag runtime/type utilisé en interne
