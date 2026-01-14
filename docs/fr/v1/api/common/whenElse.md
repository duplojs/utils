---
outline: [2, 3]
description: "La fonction whenElse() offre deux branches explicites : si le prédicat est vrai, on exécute theFunction, sinon elseFunction. Les types de retour restent disjoints et préservés."
prev:
  text: "whenNot"
  link: "/fr/v1/api/common/whenNot"
next:
  text: "and"
  link: "/fr/v1/api/common/and"
---

# whenElse

La fonction **`whenElse()`** offre deux branches explicites : si le prédicat est vrai, on exécute `theFunction`, sinon `elseFunction`. Les types de retour restent disjoints et préservés.

::: warning
Typage très instable - Typescript n'est pas très gentil avec nous
:::

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/whenElse/tryout.doc.ts"
  majorVersion="v1"
  height="544px"
/>

## Syntaxe

### Signatures classiques

```typescript
// Type Guard predicate
function whenElse<
	GenericInput extends AnyValue,
	GenericPredicatedInput extends GenericInput,
	GenericOutput1 extends AnyValue | EscapeVoid,
	GenericOutput2 extends AnyValue | EscapeVoid
>(
	input: GenericInput,
	predicate: (input: GenericInput) => input is GenericPredicatedInput,
	theFunction: (predicatedInput: GenericPredicatedInput) => GenericOutput1,
	elseFunction: (predicatedInput: Exclude<GenericInput, GenericPredicatedInput>) => GenericOutput2
): GenericOutput1 | GenericOutput2;

// Boolean predicate
function whenElse<
	GenericInput extends AnyValue,
	GenericOutput1 extends AnyValue | EscapeVoid,
	GenericOutput2 extends AnyValue | EscapeVoid
>(
	input: GenericInput,
	predicate: (input: GenericInput) => boolean,
	theFunction: (predicatedInput: GenericInput) => GenericOutput1,
	elseFunction: (predicatedInput: GenericInput) => GenericOutput2
): BreakGenericLink<GenericOutput1> | BreakGenericLink<GenericOutput2>;
```

### Signatures currifiées

```typescript
// Type Guard predicate
function whenElse<
	GenericInput extends AnyValue,
	GenericPredicatedInput extends GenericInput,
	GenericOutput1 extends AnyValue | EscapeVoid,
	GenericOutput2 extends AnyValue | EscapeVoid
>(
	predicate: (input: GenericInput) => input is GenericPredicatedInput,
	theFunction: (predicatedInput: GenericPredicatedInput) => GenericOutput1,
	elseFunction: (predicatedInput: Exclude<GenericInput, GenericPredicatedInput>) => GenericOutput2
): (
	input: GenericInput
) => BreakGenericLink<GenericOutput1> | BreakGenericLink<GenericOutput2>;

// Boolean predicate
function whenElse<
	GenericInput extends AnyValue,
	GenericOutput1 extends AnyValue | EscapeVoid,
	GenericOutput2 extends AnyValue | EscapeVoid
>(
	predicate: (input: GenericInput) => boolean,
	theFunction: (predicatedInput: GenericInput) => GenericOutput1,
	elseFunction: (predicatedInput: GenericInput) => GenericOutput2
): (
	input: GenericInput
) => GenericOutput1 | GenericOutput2;
```

## Paramètres

- `input` : La valeur testée (optionnel en mode currifié).
- `predicate` : Fonction de décision (peut être un type guard).
- `theFunction` : Fonction exécutée si le prédicat est vrai.
- `elseFunction` : Fonction exécutée sinon.

## Valeur de retour

Le résultat de `theFunction` ou `elseFunction` selon le résultat du prédicat, avec un typage distinct.

## Voir aussi

- [`when`](/fr/v1/api/common/when) - Transformation conditionnelle simple
- [`whenNot`](/fr/v1/api/common/whenNot) - Transformation quand le prédicat échoue
