---
outline: [2, 3]
description: "La fonction createExternalAsyncGenerator() crée un générateur asynchrone piloté de l'extérieur, capable d'émettre une valeur ou de s'arrêter explicitement."
prev:
  text: "asyncReduce"
  link: "/fr/v1/api/generator/asyncReduce"
next:
  text: "Generator"
  link: "/fr/v1/api/generator/"
---

# createExternalAsyncGenerator

La fonction **`createExternalAsyncGenerator()`** crée un générateur asynchrone piloté de l'extérieur, capable d'émettre une valeur ou de s'arrêter explicitement.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/generator/createExternalAsyncGenerator/tryout.doc.ts"
  majorVersion="v1"
  height="229px"
/>

## Syntaxe

```typescript
function createExternalAsyncGenerator<
	GenericValue extends unknown
>(): {
	asyncGenerator: AsyncGenerator<GenericValue, void, unknown>;
	next: (value: GenericValue) => void;
	exit: () => void;
}
```

## Paramètres

Cette fonction ne prend aucun paramètre.

## Valeur de retour

Un objet contenant :
- `asyncGenerator` : Le générateur asynchrone en attente d'une valeur externe.
- `next(value)` : Envoie une valeur au générateur.
- `exit()` : Arrête le générateur sans émettre de valeur.

## Voir aussi

- [`execute`](/fr/v1/api/generator/execute) - Consomme un générateur
- [`asyncMap`](/fr/v1/api/generator/asyncMap) - Applique des transformations asynchrones sur des itérables
