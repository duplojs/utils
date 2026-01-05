---
outline: [2, 3]
description: "when() ajoute une garde dans le pipeline de pattern matching. Dès que predicate retourne true, la fonction associée est exécutée et son résultat est encapsulé dans un PatternResult. Avec un type guard, la branche est automatiquement typée avec la forme prédicatée."
prev:
  text: "match"
  link: "/fr/v1/api/pattern/match"
next:
  text: "otherwise"
  link: "/fr/v1/api/pattern/otherwise"
---

# when

`when()` ajoute une garde dans le pipeline de pattern matching. Dès que `predicate` retourne `true`, la fonction associée est exécutée et son résultat est encapsulé dans un `PatternResult`. Avec un type guard, la branche est automatiquement typée avec la forme prédicatée.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/pattern/when/tryout.doc.ts"
  majorVersion="v1"
  height="500px"
  :foldLines="[2]"
/>

## Syntaxe

### Signature currifiées

```typescript
// Type Guard
function when<
	GenericInput extends AnyValue, 
	GenericInputValue extends Exclude<GenericInput, PatternResult>, 
	GenericInputPatternResult extends Extract<GenericInput, PatternResult>, 
	GenericPredicatedInput extends GenericInputValue, 
	GenericOutput extends AnyValue
>(
	predicate: (input: GenericInputValue) => input is GenericPredicatedInput, 
	theFunction: (predicatedInput: GenericPredicatedInput) => GenericOutput
): (
	input: (GenericInput | GenericInputPatternResult | GenericInputValue)
) => (GenericInputPatternResult | Exclude<BreakGenericLink<GenericInputValue>, GenericPredicatedInput> | PatternResult<GenericOutput>);

// Boolean
export declare function when<
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
function when<
	GenericInput extends AnyValue, 
	GenericInputValue extends Exclude<GenericInput, PatternResult>, 
	GenericInputPatternResult extends Extract<GenericInput, PatternResult>, 
	GenericPredicatedInput extends GenericInputValue, 
	GenericOutput extends AnyValue
>(
	input: (GenericInput | GenericInputPatternResult | GenericInputValue), 
	predicate: (input: GenericInputValue) => input is GenericPredicatedInput, 
	theFunction: (predicatedInput: GenericPredicatedInput) => GenericOutput
): (GenericInputPatternResult | Exclude<GenericInputValue, GenericPredicatedInput> | PatternResult<GenericOutput>);

// Boolean
function when<
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

- `input` *(optionnel)* : valeur à tester immédiatement. Sinon, `when` retourne une fonction pour vos `pipe`.
- `predicate` : fonction de garde. Peut être un type guard (`value is ...`) pour réduire statiquement l'union, ou un simple booléen.
- `theFunction` : transformation à exécuter quand la garde est satisfaite.

## Valeur de retour

Un `PatternResult<Output>` si la condition est remplie, sinon la valeur d'origine (ou ce qu'il reste après les précédentes gardes). Ce résultat est prêt à être passé à un autre `when`, un `match`, `otherwise` ou `exhaustive`.

## Bonnes pratiques

- Déclarez vos gardes (`type PaidInvoice = Extract<Invoice, { status: "paid" }>;`) puis référencez-les dans `predicate` pour conserver un typage lisible.
- Les `when` sont évalués dans l'ordre : placez les cas les plus spécifiques avant les cas génériques.
- Combinez `when` avec `match` dans un builder pour intercaler des règles basées sur des prédicats plutôt que des motifs structurels.

## Voir aussi

- [`match`](/fr/v1/api/pattern/match)
- [`otherwise`](/fr/v1/api/pattern/otherwise)
- [`exhaustive`](/fr/v1/api/pattern/exhaustive)
