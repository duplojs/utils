---
outline: [2, 3]
description: "exhaustive() dépaquette un PatternResult et vérifie que tous les cas ont été couverts. On l'utilise aussi bien avec le builder match(...).exhaustive() qu'en appel direct sur n'importe quel PatternResult. Si un motif manque, une InvalidExhaustivePatternError est levée au moment de l'appel."
prev:
  text: "otherwise"
  link: "/fr/v1/api/pattern/otherwise"
next:
  text: "isMatch"
  link: "/fr/v1/api/pattern/isMatch"
---

# exhaustive

`exhaustive()` dépaquette un `PatternResult` et vérifie que tous les cas ont été couverts. On l'utilise aussi bien avec le builder `match(...).exhaustive()` qu'en appel direct sur n'importe quel `PatternResult`. Si un motif manque, une `InvalidExhaustivePatternError` est levée au moment de l'appel.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/pattern/exhaustive/tryoutError.doc.ts"
  majorVersion="v1"
  height="500px"
  :foldLines="[2]"
/>

## Syntaxe

```typescript
function exhaustive<
	const GenericInput extends unknown, 
	GenericResult extends PatternResult<GenericInput>
>(result: GenericResult): Unwrap<GenericResult>;
```

## Paramètres

- `result` : un `PatternResult` retourné par un builder `match` (après `.with()`/`.when()`).

## Valeur de retour

La valeur réellement contenue dans le `PatternResult`, avec le type affiné. Si l'union initiale n'a pas été totalement couverte, l'appel échoue et vous montre la valeur restante.

## Bonnes pratiques

- Sur le builder : `match(...).with(...).exhaustive()` garantit que chaque branche est couverte avant de rendre la valeur finale.
- En appel direct : passez-lui n'importe quel `PatternResult` pour le déballer et forcer la vérification d'exhaustivité.
- Pendant le développement, laissez `exhaustive` vous signaler les cas manquants plutôt que d'ajouter un `otherwise` trop large.

## Voir aussi

- [`match`](/fr/v1/api/pattern/match)
- [`when`](/fr/v1/api/pattern/when)
- [`otherwise`](/fr/v1/api/pattern/otherwise)
