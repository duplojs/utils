---
outline: [2, 3]
description: "La fonction createExternalPromise() crée une promesse contrôlable depuis l'extérieur : elle expose resolve, reject et la promesse associée."
prev:
  text: "asyncLoop"
  link: "/fr/v1/api/common/asyncLoop"
next:
  text: "promiseObject"
  link: "/fr/v1/api/common/promiseObject"
---

# externalPromise

La fonction **`createExternalPromise()`** crée une promesse contrôlable depuis l'extérieur : elle expose `resolve`, `reject` et la promesse associée.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/externalPromise/tryout.doc.ts"
  majorVersion="v1"
  height="187px"
/>

## Syntaxe

```typescript
function createExternalPromise<
	GenericPromiseValue extends unknown
>(): {
	resolve: (_value: GenericPromiseValue | Awaited<GenericPromiseValue> | Promise<GenericPromiseValue>) => void;
	reject: (_value: unknown) => void;
	promise: Promise<Awaited<GenericPromiseValue>>;
};
```

## Paramètres

Cette fonction ne prend aucun paramètre.

## Valeur de retour

Un objet avec :
- `resolve` : pour résoudre la promesse avec une valeur ou une promesse.
- `reject` : pour rejeter la promesse.
- `promise` : la promesse contrôlée.

## Voir aussi

- [`promiseObject`](/fr/v1/api/common/promiseObject) - Résout un objet de promesses
