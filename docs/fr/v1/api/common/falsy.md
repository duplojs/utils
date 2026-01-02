---
outline: [2, 3]
prev:
  text: "truthy"
  link: "/fr/v1/api/common/truthy"
next:
  text: "loop"
  link: "/fr/v1/api/common/loop"
---

# falsy

La fonction **`falsy()`** est un type guard qui conserve uniquement les valeurs falsy (`false`, `0`, `""`, `null`, `undefined`).

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/falsy/tryout.doc.ts"
  majorVersion="v1"
  height="420px"
/>

## Syntaxe

```typescript
function falsy<
	GenericInput extends unknown,
>(
	input: GenericInput
): input is Extract<GenericInput, FalsyValue>;
```

## Paramètres

- `input` : Valeur à tester.

## Valeur de retour

Un type guard qui est vrai quand `input` est falsy.

## Voir aussi

- [`truthy`](/fr/v1/api/common/truthy) - Conserve uniquement les valeurs truthy
- [`isType`](/fr/v1/api/common/isType) - Type guard basé sur le type runtime
