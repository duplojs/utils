---
outline: [2, 3]
description: "La fonction asserts() lance une erreur si le predicate echoue et affine le type si il passe."
prev:
  text: "isType"
  link: "/fr/v1/api/common/isType"
next:
  text: "instanceOf"
  link: "/fr/v1/api/common/instanceOf"
---

# asserts

La **`asserts()`** fonction lance une erreur si le predicate echoue et affine le type si il passe.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/asserts/tryout.doc.ts"
  majorVersion="v1"
  height="460px"
/>

## Syntaxe

```typescript
function asserts<
	GenericInput extends unknown,
	GenericPredicate extends GenericInput
>(
	input: GenericInput,
	predicate: (input: GenericInput) => input is GenericPredicate
): asserts input is GenericPredicate
```

## Parametres

- `input` : La valeur a valider.
- `predicate` : Un predicate type guard pour valider et affiner l'entree.

## Valeur de retour

Rien. Elle lance un `AssertsError` quand le predicate echoue.

## Voir aussi

- [`isType`](/fr/v1/api/common/isType) - Cree un type guard base sur des verifications runtime
- [`instanceOf`](/fr/v1/api/common/instanceOf) - Type guard via des constructeurs
