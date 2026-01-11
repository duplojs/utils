---
outline: [2, 3]
description: "La fonction whenNot() applique une transformation uniquement quand le prédicat échoue (ou que le type guard ne correspond pas). Sinon, l'entrée est retournée telle quelle. Existe en version immédiate et currifiée."
prev:
  text: "when"
  link: "/fr/v1/api/common/when"
next:
  text: "whenElse"
  link: "/fr/v1/api/common/whenElse"
---

# whenNot

La fonction **`whenNot()`** applique une transformation uniquement quand le prédicat échoue (ou que le type guard ne correspond pas). Sinon, l'entrée est retournée telle quelle. Existe en version immédiate et currifiée.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/whenNot/tryout.doc.ts"
  majorVersion="v1"
  height="500px"
/>

## Syntaxe

### Signatures classiques

```typescript
// Type Guard predicate
function whenNot<
	GenericInput extends AnyValue,
	GenericPredicatedInput extends GenericInput,
	GenericOutput extends AnyValue | EscapeVoid
>(
	input: GenericInput,
	ifFunction: (input: GenericInput) => input is GenericPredicatedInput,
	theFunction: (predicatedInput: Exclude<GenericInput, GenericPredicatedInput>) => GenericOutput
): GenericOutput | GenericPredicatedInput;

// Boolean predicate
function whenNot<
	GenericInput extends AnyValue,
	GenericOutput extends AnyValue | EscapeVoid
>(
	input: GenericInput,
	ifFunction: (input: GenericInput) => boolean,
	theFunction: (predicatedInput: GenericInput) => GenericOutput
): GenericOutput | GenericInput;
```

### Signatures currifiées

```typescript
// Type Guard predicate
function whenNot<
	GenericInput extends AnyValue,
	GenericPredicatedInput extends GenericInput,
	GenericOutput extends AnyValue | EscapeVoid
>(
	ifFunction: (input: GenericInput) => input is GenericPredicatedInput,
	theFunction: (predicatedInput: Exclude<GenericInput, GenericPredicatedInput>) => GenericOutput
): (
	input: GenericInput
) => GenericOutput | BreakGenericLink<GenericPredicatedInput>;

// Boolean predicate
function whenNot<
	GenericInput extends AnyValue,
	GenericOutput extends AnyValue | EscapeVoid
>(
	ifFunction: (input: GenericInput) => boolean,
	theFunction: (predicatedInput: GenericInput) => GenericOutput
): (
	input: GenericInput
) => GenericOutput | GenericInput;
```

## Paramètres

- `input` : La valeur à tester (optionnel en mode currifié).
- `ifFunction` : Fonction qui décide si on saute ou non la transformation (peut être un type guard).
- `theFunction` : Fonction exécutée uniquement si le prédicat échoue.

## Valeur de retour

Si le prédicat échoue, renvoie le résultat de `theFunction`. Sinon, renvoie l'entrée inchangée.
## Voir aussi

- [`when`](/fr/v1/api/common/when) - Version inverse
- [`whenElse`](/fr/v1/api/common/whenElse) - Deux branches explicites
