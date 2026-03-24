---
outline: [2, 3]
description: "Quitte le flow en cours quand un prédicat correspond, même depuis des flows imbriqués."
prev:
  text: "breakIf"
  link: "/fr/v1/api/flow/breakIf"
next:
  text: "defer"
  link: "/fr/v1/api/flow/defer"
---

# exitIf

La fonction **`exitIf()`** teste une valeur avec un prédicat et quitte le flow en cours quand le prédicat retourne `true`. Comme les effets d'exit sont propagés à travers `F.exec()`, elle peut arrêter un flow depuis des niveaux profondément imbriqués.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/flow/exitIf/tryout.doc.ts"
  majorVersion="v1"
  height="355px"
/>

## Syntaxe

```typescript
function exitIf<
	GenericValue extends unknown
>(
	value: GenericValue,
	thePredicate: (value: GenericValue) => boolean
): Generator<Exit<GenericValue>, GenericValue>
```

## Paramètres

- `value` : La valeur à tester.
- `thePredicate` : Prédicat utilisé pour décider si le flow en cours doit se terminer.

## Valeur de retour

Un générateur qui émet un effet d'exit quand le prédicat retourne `true`, sinon retourne la valeur d'origine.

## Voir aussi

- [`breakIf`](/fr/v1/api/flow/breakIf) - Arrête seulement la branche locale courante
- [`exec`](/fr/v1/api/flow/exec) - Propage les effets d'exit à travers les flows imbriqués
