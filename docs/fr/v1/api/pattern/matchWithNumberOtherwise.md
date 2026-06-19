---
outline: [2, 3]
description: "matchWithNumberOtherwise() traite partiellement une union de nombres littéraux et transmet précisément les valeurs non traitées à un callback otherwise."
prev:
  text: "matchWithNumber"
  link: "/fr/v1/api/pattern/matchWithNumber"
next:
  text: "when"
  link: "/fr/v1/api/pattern/when"
---

# matchWithNumberOtherwise

`matchWithNumberOtherwise()` traite certains membres d’une union de nombres littéraux. Les clés du matcher doivent appartenir à l’union d’entrée, mais certains cas peuvent être omis. Le callback `otherwise` reçoit uniquement les littéraux sans handler.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/pattern/matchWithNumberOtherwise/tryout.doc.ts"
  majorVersion="v1"
  height="481px"
/>

## Syntaxe

### Signature classique

```typescript
function matchWithNumberOtherwise<Input extends number, Matcher, Output>(
  input: Input,
  matcher: Matcher,
  otherwise: (value: UnhandledValues) => Output
): MatcherResult | Output
```

### Signature currifiée

```typescript
function matchWithNumberOtherwise<Input extends number, Matcher, Output>(
  matcher: Matcher,
  otherwise: (value: UnhandledValues) => Output
): (input: Input) => MatcherResult | Output
```

## Paramètres

- `input` : un nombre littéral ou une union de littéraux ; le type large `number` est refusé.
- `matcher` : un objet partiel dont les clés doivent appartenir à `input`. Une propriété peut valoir `undefined` pour rediriger ce cas vers `otherwise`.
- `otherwise` : reçoit l’union exacte des cas sans handler.

## Valeur de retour

Le résultat du handler sélectionné, ou celui d’`otherwise` pour une valeur non traitée.

## Voir aussi

- [`matchWithNumber`](/fr/v1/api/pattern/matchWithNumber) - Matching exhaustif de nombres.
- [`matchWithStringOtherwise`](/fr/v1/api/pattern/matchWithStringOtherwise) - Matching partiel de chaînes.
