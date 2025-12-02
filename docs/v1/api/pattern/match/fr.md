---
outline: [2, 3]
prev:
  text: "Pattern"
  link: "/v1/api/pattern/fr"
next:
  text: "when"
  link: "/v1/api/pattern/when/fr"
---

# match

`match()` associe un motif à une fonction et retourne un `PatternResult` quand la valeur respecte ce motif. Utilisez-le :

- en *builder* (`P.match(input)`), pour chaîner plusieurs `.with()`/`.when()` avant de conclure par `.otherwise()` ou `.exhaustive()` ;
- en version fonctionnelle pour plugger directement une étape dans un `pipe` (`P.match(pattern, fn)` ou `P.match(input, pattern, fn)`).

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/pattern/match/examples/tryout.doc.ts"
  majorVersion="v1"
  height="750px"
/>

<details>
<summary>Version builder</summary>

<MonacoTSEditor
  src="/v1/api/pattern/match/examples/builder.doc.ts"
  majorVersion="v1"
  height="770px"
/>

</details>

## Syntaxe

### Signature classique

```ts
function match<
	GenericInput extends AnyValue,
	GenericInputValue extends Exclude<GenericInput, PatternResult>, 
	GenericInputPatternResult extends Extract<GenericInput, PatternResult>, 
	const GenericPattern extends Pattern<GenericInputValue>, 
	GenericPatternValue extends PatternValue<GenericPattern>, 
	GenericOutput extends AnyValue | EscapeVoid, 
	GenericMatchedValue extends Extract<ComplexMatchedValue<GenericInputValue, GenericPatternValue>, any>
>(
	input: GenericInput | PatternResult<unknown>,
	pattern: FixDeepFunctionInfer<Pattern<GenericInputValue>, GenericPattern>,
	theFunction: (value: ComplexMatchedValue<...>) => GenericOutput
): BreakGenericLink<
	PatternResult<GenericOutput> | GenericInputPatternResult | ComplexUnMatchedValue<...>
>;
```

### Signature currifiée

```ts
function match<
	GenericInput extends AnyValue,
	...
>(
	pattern: FixDeepFunctionInfer<Pattern<GenericInputValue>, GenericPattern>,
	theFunction: (value: ComplexMatchedValue<...>) => GenericOutput
): (
	input: GenericInput | PatternResult<unknown>
) => BreakGenericLink<
	PatternResult<GenericOutput> | GenericInputPatternResult | ComplexUnMatchedValue<...>
>;
```

### Signature version builder

```ts
function match<
	GenericInput extends AnyValue
>(input: GenericInput): MatchBuilder<GenericInput>
```

`Matched` correspond automatiquement à la portion d'union réellement couverte par le motif (parties d'objet, tuple, littéraux, prédicats ou `ToolPattern`).

## Paramètres

- `input` *(version builder ou invocation directe)* : valeur à analyser. Peut déjà être un `PatternResult` (chaînage).
- `pattern` : motif à comparer (`literal`, tuple, objet partiel, fonction prédicat, motif créé via `P.union`, etc.).
- `theFunction` : transformation exécutée si le motif correspond. Le paramètre est typé avec la forme exacte du motif.

## Valeur de retour

- Builder : un `MatchBuilder` disposant de `.with()`, `.when()`, `.otherwise()` et `.exhaustive()`.
- Version fonctionnelle : soit un `PatternResult<Output>` si le motif correspond, soit la valeur d'origine (ou ce qu'il reste de l'union) si le motif ne matche pas. Ce résultat peut être enchaîné avec `when`, `otherwise` ou `exhaustive`.

## Bonnes pratiques

- Décomposez vos unions par motifs d'objet `{ type: "..." }` plutôt que par `if/else`, pour bénéficier de l'inférence structurelle (accès direct au payload).
- Combinez `match(pattern, fn)` dans un `pipe` pour déclencher un traitement uniquement quand un motif précis apparaît au fil du pipeline.
- Ajoutez toujours un `otherwise` ou un `exhaustive()` sur la version builder pour ne rien laisser sans traitement.

## Voir aussi

- [`when`](/v1/api/pattern/when/fr) – Ajoute une garde personnalisée.
- [`otherwise`](/v1/api/pattern/otherwise/fr) – Termine le pipeline avec un fallback.
- [`exhaustive`](/v1/api/pattern/exhaustive/fr) – Force la couverture totale des cas.
