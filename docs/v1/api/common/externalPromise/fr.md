---
outline: [2, 3]
prev:
  text: "sleep"
  link: "/v1/api/common/sleep/fr"
next:
  text: "promiseObject"
  link: "/v1/api/common/promiseObject/fr"
---

# externalPromise

La fonction **`createExternalPromise()`** crée une promesse contrôlable depuis l'extérieur : elle expose `resolve`, `reject` et la promesse associée.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/common/externalPromise/examples/tryout.doc.ts"
  majorVersion="v1"
  height="220px"
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

- [`promiseObject`](/v1/api/common/promiseObject/fr) - Résout un objet de promesses
