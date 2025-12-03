---
outline: [2, 3]
prev:
  text: "whenNot"
  link: "/v1/api/common/whenNot/fr"
next:
  text: "and"
  link: "/v1/api/common/and/fr"
---

# whenElse

La fonction **`whenElse()`** offre deux branches explicites : si le prédicat est vrai, on exécute `theFunction`, sinon `elseFunction`. Les types de retour restent disjoints et préservés.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/common/whenElse/examples/tryout.doc.ts"
  majorVersion="v1"
  height="520px"
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

- [`when`](/v1/api/common/when/fr) - Transformation conditionnelle simple
- [`whenNot`](/v1/api/common/whenNot/fr) - Transformation quand le prédicat échoue
