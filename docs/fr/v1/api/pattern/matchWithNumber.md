---
outline: [2, 3]
description: "matchWithNumber() effectue un pattern matching exhaustif sur une union de nombres littéraux et garantit un traitement pour chaque valeur possible."
prev:
  text: "matchWithStringOtherwise"
  link: "/fr/v1/api/pattern/matchWithStringOtherwise"
next:
  text: "matchWithNumberOtherwise"
  link: "/fr/v1/api/pattern/matchWithNumberOtherwise"
---

# matchWithNumber

`matchWithNumber()` effectue un pattern matching exhaustif sur un nombre littéral ou une union de nombres littéraux. Chaque valeur possible doit posséder exactement un handler, ce qui garantit qu’aucun cas ne reste sans traitement. Le callback sélectionné reçoit la valeur littérale correspondant à sa clé, correctement affinée par TypeScript.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/pattern/matchWithNumber/tryout.doc.ts"
  majorVersion="v1"
  height="565px"
/>

## Syntaxe

### Signature classique

```typescript
function matchWithNumber<Input extends number, Matcher>(
  input: Input,
  matcher: Matcher
): ReturnType<Matcher[keyof Matcher]>
```

### Signature currifiée

```typescript
function matchWithNumber<Input extends number, Matcher>(
  matcher: Matcher
): (input: Input) => ReturnType<Matcher[keyof Matcher]>
```

## Paramètres

- `input` : un nombre littéral ou une union de nombres littéraux. Le type large `number` est refusé.
- `matcher` : un objet exhaustif dont les clés correspondent exactement aux littéraux d’entrée. Chaque handler reçoit son littéral correctement affiné.

## Valeur de retour

Le résultat du handler sélectionné. Son type statique est l’union des retours de tous les handlers.

## Voir aussi

- [`matchWithString`](/fr/v1/api/pattern/matchWithString) - Équivalent pour les chaînes.
- [`match`](/fr/v1/api/pattern/match) - Pattern matching généraliste.
