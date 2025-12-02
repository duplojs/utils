---
outline: [2, 3]
prev:
  text: "exhaustive"
  link: "/v1/api/pattern/exhaustive/fr"
next:
  text: "union"
  link: "/v1/api/pattern/union/fr"
---

# isMatch

`isMatch()` teste impérativement si une valeur correspond à un motif et retourne un type guard (`value is ...`). Idéal pour des conditions simples ou pour affiner le type avant d'entrer dans un pipeline.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/pattern/isMatch/examples/tryout.doc.ts"
  majorVersion="v1"
  height="500px"
/>

## Syntaxe

### Signature classique

```ts
function isMatch<
	GenericInput extends AnyValue, 
	const GenericPattern extends Pattern<GenericInput>
>(
	input: GenericInput, 
	pattern: FixDeepFunctionInfer<Pattern<GenericInput>, GenericPattern>
): input is ForcePredicate<GenericInput, ComplexMatchedValue<GenericInput, PatternValue<GenericPattern>>>;
```

### Signature currifiée

```ts
function isMatch<
	GenericInput extends AnyValue, 
	const GenericPattern extends Pattern<GenericInput>
>(
	pattern: FixDeepFunctionInfer<Pattern<GenericInput>, GenericPattern>
): (
	input: GenericInput
) => input is ForcePredicate<GenericInput, ComplexMatchedValue<GenericInput, PatternValue<GenericPattern>>>;
```

`PatternValue` est déduit de la forme du motif (littéral, objet partiel, tuple, prédicat, `ToolPattern`, etc.).

## Paramètres

- `input` *(optionnel)* : valeur à tester immédiatement. Sans cet argument, `isMatch` retourne un type guard réutilisable.
- `pattern` : motif à comparer (mêmes possibilités que `match`).

## Valeur de retour

Un boolean type guard : `true` si la valeur correspond au motif, et le type est affiné en conséquence. `false` sinon, sans effet sur le type.

## Bonnes pratiques

- Utilisez `isMatch` dans des conditions (`if`, `filter`, `find`) pour affiner vos unions avant un `pipe` ou un `match` plus riche.
- Combinez `isMatch(P.union(...))` pour créer rapidement des prédicats réutilisables.
- Préférez `match/when` si vous devez transformer la valeur plutôt que seulement la filtrer.

## Voir aussi

- [`union`](/v1/api/pattern/union/fr)
- [`match`](/v1/api/pattern/match/fr)
- [`when`](/v1/api/pattern/when/fr)
