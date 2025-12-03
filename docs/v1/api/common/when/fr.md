---
outline: [2, 3]
prev:
  text: "Common"
  link: "/v1/api/common/fr"
next:
  text: "whenNot"
  link: "/v1/api/common/whenNot/fr"
---

# when

La fonction **`when()`** applique une transformation si un prédicat est vrai (ou si un type guard réussit). Sinon, la valeur d'entrée est renvoyée telle quelle. Existe en version immédiate ou currifiée.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/common/when/examples/tryout.doc.ts"
  majorVersion="v1"
  height="500px"
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

- [`whenNot`](/v1/api/common/whenNot/fr) - Exécute quand le prédicat échoue
- [`whenElse`](/v1/api/common/whenElse/fr) - Version avec deux branches explicites
