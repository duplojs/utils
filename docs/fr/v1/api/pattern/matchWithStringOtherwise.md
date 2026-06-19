---
outline: [2, 3]
description: "matchWithStringOtherwise() traite partiellement une union de chaînes littérales et transmet précisément les valeurs non traitées à un callback otherwise."
prev:
  text: "matchWithString"
  link: "/fr/v1/api/pattern/matchWithString"
next:
  text: "matchWithNumber"
  link: "/fr/v1/api/pattern/matchWithNumber"
---

# matchWithStringOtherwise

`matchWithStringOtherwise()` traite certains membres d’une union de chaînes littérales. Les clés du matcher doivent appartenir à l’union d’entrée, mais certains cas peuvent être omis. Le callback `otherwise` reçoit uniquement les littéraux sans handler.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/pattern/matchWithStringOtherwise/tryout.doc.ts"
  majorVersion="v1"
  height="481px"
/>

## Syntaxe

### Signature classique

```typescript
function matchWithStringOtherwise<Input extends string, Matcher, Output>(
  input: Input,
  matcher: Matcher,
  otherwise: (value: UnhandledValues) => Output
): MatcherResult | Output
```

### Signature currifiée

```typescript
function matchWithStringOtherwise<Input extends string, Matcher, Output>(
  matcher: Matcher,
  otherwise: (value: UnhandledValues) => Output
): (input: Input) => MatcherResult | Output
```

## Paramètres

- `input` : une chaîne littérale ou une union de littéraux ; le type large `string` est refusé.
- `matcher` : un objet partiel dont les clés doivent appartenir à `input`. Une propriété peut valoir `undefined` pour rediriger ce cas vers `otherwise`.
- `otherwise` : reçoit l’union exacte des cas sans handler.

## Valeur de retour

Le résultat du handler sélectionné, ou celui d’`otherwise` pour une valeur non traitée.

## Voir aussi

- [`matchWithString`](/fr/v1/api/pattern/matchWithString) - Matching exhaustif de chaînes.
- [`matchWithNumberOtherwise`](/fr/v1/api/pattern/matchWithNumberOtherwise) - Matching partiel numérique.
