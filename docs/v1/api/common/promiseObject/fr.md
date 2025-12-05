---
outline: [2, 3]
prev:
  text: "externalPromise"
  link: "/v1/api/common/externalPromise/fr"
next:
  text: "asyncRetry"
  link: "/v1/api/common/asyncRetry/fr"
---

# promiseObject

La fonction **`promiseObject()`** transforme un objet de promesses (ou valeurs) en promesse d'objet résolu, en conservant les clés et un typage précis.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/common/promiseObject/examples/tryout.doc.ts"
  majorVersion="v1"
  height="500px"
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

- [`externalPromise`](/v1/api/common/externalPromise/fr) - Crée une promesse contrôlable
