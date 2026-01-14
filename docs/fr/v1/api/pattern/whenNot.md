---
outline: [2, 3]
description: "whenNot() ajoute une garde dans le pipeline de pattern matching. Quand predicate retourne false, la fonction associée est exécutée et son résultat est encapsulé dans un PatternResult. Avec un type guard, la branche est automatiquement typée avec la forme exclue."
prev:
  text: "when"
  link: "/fr/v1/api/pattern/when"
next:
  text: "otherwise"
  link: "/fr/v1/api/pattern/otherwise"
---

# whenNot

`whenNot()` ajoute une garde dans le pipeline de pattern matching. Quand `predicate` retourne `false`, la fonction associée est exécutée et son résultat est encapsulé dans un `PatternResult`. Avec un type guard, la branche est automatiquement typée avec la forme exclue.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/pattern/whenNot/tryout.doc.ts"
  majorVersion="v1"
  height="500px"
  :foldLines="[2]"
/>

## Syntaxe

### Signature currifiées

```typescript
// Type Guard
function whenNot<
	GenericInput extends AnyValue, 
	GenericInputValue extends Exclude<GenericInput, PatternResult>, 
	GenericInputPatternResult extends Extract<GenericInput, PatternResult>, 
	GenericPredicatedInput extends GenericInputValue, 
	GenericOutput extends AnyValue
>(
	predicate: (input: GenericInputValue) => input is GenericPredicatedInput, 
	theFunction: (predicatedInput: Exclude<GenericInputValue, GenericPredicatedInput>) => GenericOutput
): (
	input: (GenericInput | GenericInputPatternResult | GenericInputValue)
) => (
	GenericInputPatternResult
	| Exclude<BreakGenericLink<GenericInputValue>, Exclude<GenericInputValue, GenericPredicatedInput>>
	| PatternResult<GenericOutput>
);

// Boolean
export declare function whenNot<
	GenericInput extends AnyValue, 
	GenericInputValue extends Exclude<GenericInput, PatternResult>, 
	GenericInputPatternResult extends Extract<GenericInput, PatternResult>, 
	GenericOutput extends AnyValue
>(
	predicate: (input: GenericInputValue) => boolean, 
	theFunction: (predicatedInput: GenericInputValue) => GenericOutput
): (
	input: (GenericInput | GenericInputPatternResult | GenericInputValue)
) => (GenericInputPatternResult | GenericInputValue | PatternResult<GenericOutput>);
```

### Signatures classiques

```typescript
// Type Guard
function whenNot<
	GenericInput extends AnyValue, 
	GenericInputValue extends Exclude<GenericInput, PatternResult>, 
	GenericInputPatternResult extends Extract<GenericInput, PatternResult>, 
	GenericPredicatedInput extends GenericInputValue, 
	GenericOutput extends AnyValue
>(
	input: (GenericInput | GenericInputPatternResult | GenericInputValue), 
	predicate: (input: GenericInputValue) => input is GenericPredicatedInput, 
	theFunction: (predicatedInput: Exclude<GenericInputValue, GenericPredicatedInput>) => GenericOutput
): (
	GenericInputPatternResult
	| Exclude<GenericInputValue, Exclude<GenericInputValue, GenericPredicatedInput>>
	| PatternResult<GenericOutput>
);

// Boolean
function whenNot<
	GenericInput extends AnyValue, 
	GenericInputValue extends Exclude<GenericInput, PatternResult>, 
	GenericInputPatternResult extends Extract<GenericInput, PatternResult>, 
	GenericOutput extends AnyValue
>(
	input: (GenericInput | GenericInputPatternResult | GenericInputValue), 
	predicate: (input: GenericInputValue) => boolean, 
	theFunction: (predicatedInput: GenericInputValue) => GenericOutput
): (GenericInputPatternResult | GenericInputValue | PatternResult<GenericOutput>);
```

(une seconde surcharge existe avec un `predicate` booléen simple).

## Paramètres

- `input` *(optionnel)* : valeur à tester immédiatement. Sinon, `whenNot` retourne une fonction pour vos `pipe`.
- `predicate` : fonction de garde. Peut être un type guard (`value is ...`) pour réduire statiquement l'union, ou un simple booléen.
- `theFunction` : transformation à exécuter quand la garde n'est pas satisfaite.

## Valeur de retour

Un `PatternResult<Output>` si la condition n'est pas remplie, sinon la valeur d'origine (ou ce qu'il reste après les précédentes gardes). Ce résultat est prêt à être passé à un autre `when`, `whenNot`, `match`, `otherwise` ou `exhaustive`.

## Bonnes pratiques

- Déclarez vos gardes (`type PaidInvoice = Extract<Invoice, { status: "paid" }>;`) puis référencez-les dans `predicate` pour conserver un typage lisible.
- Les `whenNot` sont évalués dans l'ordre : placez les cas les plus spécifiques avant les cas génériques.
- Combinez `whenNot` avec `match` dans un builder pour intercaler des règles basées sur des prédicats plutôt que des motifs structurels.

## Voir aussi

- [`when`](/fr/v1/api/pattern/when)
- [`match`](/fr/v1/api/pattern/match)
- [`otherwise`](/fr/v1/api/pattern/otherwise)
- [`exhaustive`](/fr/v1/api/pattern/exhaustive)
