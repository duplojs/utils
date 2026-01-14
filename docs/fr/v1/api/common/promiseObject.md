---
outline: [2, 3]
description: "La fonction promiseObject() transforme un objet de promesses (ou valeurs) en promesse d'objet résolu, en conservant les clés et un typage précis."
prev:
  text: "externalPromise"
  link: "/fr/v1/api/common/externalPromise"
next:
  text: "asyncRetry"
  link: "/fr/v1/api/common/asyncRetry"
---

# promiseObject

La fonction **`promiseObject()`** transforme un objet de promesses (ou valeurs) en promesse d'objet résolu, en conservant les clés et un typage précis.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/promiseObject/tryout.doc.ts"
  majorVersion="v1"
  height="523px"
/>

## Syntaxe

```typescript
type AwaitedPromiseObject<
	GenericObject extends Record<string, MaybePromise<unknown>>
> = {
	[Prop in keyof GenericObject]: Awaited<GenericObject[Prop]>;
};

function promiseObject<
	GenericInput extends AnyValue,
	GenericObject extends Record<string, MaybePromise<GenericInput>>
>(
	object: GenericObject
): Promise<SimplifyTopLevel<AwaitedPromiseObject<GenericObject>>>;
```

## Paramètres

- `object` : Objet dont les valeurs sont des promesses ou des valeurs directes.

## Valeur de retour

Une promesse résolue avec un objet typé contenant les valeurs résolues.

## Voir aussi

- [`externalPromise`](/fr/v1/api/common/externalPromise) - Crée une promesse contrôlable
