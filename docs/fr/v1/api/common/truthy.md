---
outline: [2, 3]
prev:
  text: "hasKinds"
  link: "/fr/v1/api/common/hasKinds"
next:
  text: "falsy"
  link: "/fr/v1/api/common/falsy"
---

# truthy

La fonction **`truthy()`** est un type guard qui conserve uniquement les valeurs truthy (`false`, `0`, `""`, `null`, `undefined` sont exclus).

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/truthy/tryout.doc.ts"
  majorVersion="v1"
  height="420px"
/>

## Syntaxe

```typescript
function truthy<
	GenericInput extends unknown,
>(
	input: GenericInput
): input is TruthyValue<GenericInput>;
```

## Paramètres

- `input` : Valeur à tester.

## Valeur de retour

Un type guard qui est vrai quand `input` est truthy.

## Voir aussi

- [`falsy`](/fr/v1/api/common/falsy) - Conserve uniquement les valeurs falsy
- [`isType`](/fr/v1/api/common/isType) - Type guard basé sur le type runtime
