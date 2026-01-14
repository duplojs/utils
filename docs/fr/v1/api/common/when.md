---
outline: [2, 3]
description: "La fonction when() applique une transformation si un prédicat est vrai (ou si un type guard réussit). Sinon, la valeur d'entrée est renvoyée telle quelle. Existe en version immédiate ou currifiée."
prev:
  text: "Common"
  link: "/fr/v1/api/common/"
next:
  text: "whenNot"
  link: "/fr/v1/api/common/whenNot"
---

# when

La fonction **`when()`** applique une transformation si un prédicat est vrai (ou si un type guard réussit). Sinon, la valeur d'entrée est renvoyée telle quelle. Existe en version immédiate ou currifiée.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/when/tryout.doc.ts"
  majorVersion="v1"
  height="523px"
/>

## Syntaxe

### Signature classiques

```typescript
// Type Guard predicate
function when<
	GenericInput extends AnyValue, 
	GenericPredicatedInput extends GenericInput, 
	GenericOutput extends AnyValue | EscapeVoid
>(
	input: GenericInput, 
	ifFunction: (input: GenericInput) => input is GenericPredicatedInput, 
	theFunction: (predicatedInput: GenericPredicatedInput) => GenericOutput
): GenericOutput | Exclude<GenericInput, GenericPredicatedInput>;

// Boolean predicate
function when<
	GenericInput extends AnyValue, 
	GenericOutput extends AnyValue | EscapeVoid
>(
	input: GenericInput, 
	ifFunction: (input: GenericInput) => boolean, 
	theFunction: (predicatedInput: GenericInput
) => GenericOutput): GenericOutput | GenericInput;
```

### Signature currifiées

```typescript
// Type Guard predicate
function when<
	GenericInput extends AnyValue, 
	GenericPredicatedInput extends GenericInput, 
	GenericOutput extends AnyValue | EscapeVoid
>(
	ifFunction: (input: GenericInput) => input is GenericPredicatedInput, 
	theFunction: (predicatedInput: GenericPredicatedInput) => GenericOutput
): (
	input: GenericInput
) => GenericOutput | Exclude<BreakGenericLink<GenericInput>, GenericPredicatedInput>;

// Boolean predicate
function when<
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
- `ifFunction` : Prédicat ou type guard pour tester la valeur d'entrée.
- `theFunction` : Fonction exécutée uniquement si le prédicat est vrai.

## Valeur de retour

Si le prédicat passe, renvoie le résultat de `theFunction`. Sinon, renvoie la valeur d'entrée inchangée.

## Voir aussi

- [`whenNot`](/fr/v1/api/common/whenNot) - Exécute quand le prédicat échoue
- [`whenElse`](/fr/v1/api/common/whenElse) - Version avec deux branches explicites
