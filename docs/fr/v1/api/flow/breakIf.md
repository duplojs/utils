---
outline: [2, 3]
description: "Arrête la branche courante du flow quand un prédicat correspond."
prev:
  text: "exec"
  link: "/fr/v1/api/flow/exec"
next:
  text: "exitIf"
  link: "/fr/v1/api/flow/exitIf"
---

# breakIf

La fonction **`breakIf()`** teste une valeur avec un prédicat et arrête la branche courante du flow quand le prédicat retourne `true`. Si le prédicat échoue, la valeur est retournée et le flow continue.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/flow/breakIf/tryout.doc.ts"
  majorVersion="v1"
  height="229px"
/>

## Syntaxe

```typescript
function breakIf<
	GenericValue extends unknown
>(
	value: GenericValue,
	thePredicate: (value: GenericValue) => boolean
): Generator<Break<GenericValue>, GenericValue>
```

## Paramètres

- `value` : La valeur à tester.
- `thePredicate` : Prédicat utilisé pour décider si la branche courante doit s'arrêter.

## Valeur de retour

Un générateur qui émet un effet de break quand le prédicat retourne `true`, sinon retourne la valeur d'origine.

## Voir aussi

- [`exitIf`](/fr/v1/api/flow/exitIf) - Quitte tout le flow en cours au lieu de seulement break localement
- [`run`](/fr/v1/api/flow/run) - Exécute un flow et gère les effets de break
