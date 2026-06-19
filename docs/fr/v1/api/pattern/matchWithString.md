---
outline: [2, 3]
description: "matchWithString() effectue un pattern matching exhaustif sur une union de chaînes littérales et garantit un traitement pour chaque valeur possible."
prev:
  text: "match"
  link: "/fr/v1/api/pattern/match"
next:
  text: "matchWithStringOtherwise"
  link: "/fr/v1/api/pattern/matchWithStringOtherwise"
---

# matchWithString

`matchWithString()` effectue un pattern matching exhaustif sur une chaîne littérale ou une union de chaînes littérales. Chaque valeur possible doit posséder exactement un handler, ce qui garantit qu’aucun cas ne reste sans traitement. Le callback sélectionné reçoit la valeur littérale correspondant à sa clé, correctement affinée par TypeScript.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/pattern/matchWithString/tryout.doc.ts"
  majorVersion="v1"
  height="565px"
/>

## Syntaxe

### Signature classique

```typescript
function matchWithString<Input extends string, Matcher>(
  input: Input,
  matcher: Matcher
): ReturnType<Matcher[keyof Matcher]>
```

### Signature currifiée

```typescript
function matchWithString<Input extends string, Matcher>(
  matcher: Matcher
): (input: Input) => ReturnType<Matcher[keyof Matcher]>
```

## Paramètres

- `input` : une chaîne littérale ou une union de chaînes littérales. Le type large `string` est refusé.
- `matcher` : un objet exhaustif dont les clés correspondent exactement aux littéraux d’entrée. Chaque handler reçoit son littéral correctement affiné.

## Valeur de retour

Le résultat du handler sélectionné. Son type statique est l’union des retours de tous les handlers.

## Voir aussi

- [`matchWithNumber`](/fr/v1/api/pattern/matchWithNumber) - Équivalent numérique.
- [`match`](/fr/v1/api/pattern/match) - Pattern matching généraliste.
