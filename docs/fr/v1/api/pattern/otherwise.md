---
outline: [2, 3]
description: "otherwise() termine un pipeline de pattern matching en fournissant une valeur de repli pour tous les cas restants. Il dépile automatiquement les PatternResult retournés par match/when et vous redonne la valeur finale."
prev:
  text: "whenNot"
  link: "/fr/v1/api/pattern/whenNot"
next:
  text: "exhaustive"
  link: "/fr/v1/api/pattern/exhaustive"
---

# otherwise

`otherwise()` termine un pipeline de pattern matching en fournissant une valeur de repli pour tous les cas restants. Il dépile automatiquement les `PatternResult` retournés par `match`/`when` et vous redonne la valeur finale.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/pattern/otherwise/tryout.doc.ts"
  majorVersion="v1"
  height="565px"
  :foldLines="[2]"
/>

## Syntaxe

### Signature classique

```typescript
function otherwise<
	GenericInput extends AnyValue, 
	GenericInputValue extends Exclude<GenericInput, PatternResult>, 
	GenericInputPatternResult extends Extract<GenericInput, PatternResult>, 
	GenericOutput extends AnyValue
>(
	input: GenericInput | GenericInputPatternResult | GenericInputValue, 
	theFunction: (rest: GenericInputValue) => GenericOutput
): (GenericOutput | Unwrap<GenericInputPatternResult>);
```

### Signature currifiée

```typescript
function otherwise<
	GenericInput extends AnyValue, 
	GenericInputValue extends Exclude<GenericInput, PatternResult>, 
	GenericInputPatternResult extends Extract<GenericInput, PatternResult>, 
	GenericOutput extends AnyValue
>(
	theFunction: (rest: GenericInputValue) => GenericOutput
): (
	input: GenericInput | GenericInputPatternResult | GenericInputValue
) => (GenericOutput | Unwrap<GenericInputPatternResult>);
```

Le type reçu dans `rest` correspond aux cas qui n'ont pas encore été couverts par vos `match`/`when` précédents.

## Paramètres

- `input` *(optionnel)* : valeur à fermer immédiatement (souvent le résultat d'un `when` ou d'un `match`).
- `theFunction` : fallback exécuté pour les cas restants. Peut retourner n'importe quel type (sync ou async).

## Valeur de retour

La valeur retournée par `theFunction` si aucun motif n'a matché, sinon celle du `PatternResult` déjà présent. Après `otherwise`, vous n'obtenez plus de `PatternResult` mais une valeur « normale ».

## Bonnes pratiques

- Utilisez `otherwise` pour terminer un pipeline lorsqu'un fallback suffit. Si vous devez garantir l'exhaustivité stricte, préférez `exhaustive`.
- Le paramètre `rest` est déjà typé avec les cas restants. Profitez-en pour manipuler ses champs sans cast.
- Vous pouvez n'importe quand réinjecter la valeur dans un nouveau `pipe`, `Either`, etc. puisqu'elle est déballée.

## Voir aussi

- [`match`](/fr/v1/api/pattern/match)
- [`when`](/fr/v1/api/pattern/when)
- [`exhaustive`](/fr/v1/api/pattern/exhaustive)
