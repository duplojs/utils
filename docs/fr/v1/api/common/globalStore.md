---
outline: [2, 3]
description: "La fonction createGlobalStore() permet de créer un store global (singleton) partagé dans tout le process. C’est utile pour stocker une valeur mutable accessible depuis n’importe quel module, sans avoir à la passer en paramètre."
prev:
  text: "createEnum"
  link: "/fr/v1/api/common/createEnum"
next:
  text: "builder"
  link: "/fr/v1/api/common/builder"
---

# globalStore

La fonction **`createGlobalStore()`** permet de créer un **store global** (singleton) partagé dans **tout le process**. C’est utile pour stocker une valeur mutable accessible depuis n’importe quel module, sans avoir à la passer en paramètre.

::: warning
Le store est global et mutable : évitez d’en faire un “state manager”. Ne partagez pas des valeurs entre requêtes si votre runtime est long-lived (serveur HTTP), sauf si c’est explicitement voulu.
:::

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/globalStore/tryout.doc.ts"
  majorVersion="v1"
  height="628px"
/>

## Typage : déclarer vos stores

Le nom du store (`storeName`) est typé via l’interface `GlobalStore`. Pour ajouter vos clés et leurs types, utilisez la fusion de déclaration :

```typescript
declare module "@duplojs/utils" {
	interface GlobalStore {
		myStore: number;
	}
}
```

## Syntaxe

```typescript
interface GlobalStoreHandler<
	GenericValue extends unknown
> {
	readonly value: GenericValue;
	set(value: GenericValue): void;
}

function createGlobalStore<
	GenericStoreName extends keyof GlobalStore
>(
	storeName: GenericStoreName,
	defaultValue: GlobalStore[GenericStoreName]
): GlobalStoreHandler<GlobalStore[GenericStoreName]>;
```

## Paramètres

- `storeName` : Nom typé du store (clé de `GlobalStore`).
- `defaultValue` : Valeur utilisée uniquement si le store n’existe pas encore.

## Valeur de retour

Un handler avec :
- `value` : la valeur courante.
- `set(value)` : met à jour la valeur globale.
