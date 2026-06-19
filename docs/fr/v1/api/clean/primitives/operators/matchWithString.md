---
outline: [2, 3]
description: "matchWithString() effectue un pattern matching exhaustif sur la valeur d’une primitive Clean string et transmet à chaque branche la primitive originale correctement affinée."
prev:
  text: "equal"
  link: "/fr/v1/api/clean/primitives/operators/equal"
next:
  text: "matchWithStringOtherwise"
  link: "/fr/v1/api/clean/primitives/operators/matchWithStringOtherwise"
---

# matchWithString

`matchWithString()` effectue un pattern matching exhaustif sur la valeur d’une primitive Clean string. Chaque valeur possible doit avoir une branche de traitement.

Une primitive Clean étant un objet wrappé, elle ne peut pas servir directement de clé au matcher. Les clés sont donc les valeurs `string` brutes. Lorsqu’une clé correspond, son callback reçoit la primitive Clean originale, affinée sur cette valeur. Ses informations `Primitive`, `ConstrainedType` ou `NewType` sont ainsi conservées.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/clean/primitives/operators/matchWithString/tryout.doc.ts"
  majorVersion="v1"
  height="544px"
/>

## Syntaxe

### Signature classique

```typescript
function matchWithString<Input extends Primitive<string>, Matcher>(
  input: Input,
  matcher: Matcher
): ReturnType<Matcher[keyof Matcher]>
```

### Signature currifiée

```typescript
function matchWithString<Input extends Primitive<string>, Matcher>(
  matcher: Matcher
): (input: Input) => ReturnType<Matcher[keyof Matcher]>
```

## Paramètres

- `input` : une primitive Clean contenant une valeur `string`, y compris une valeur contrainte ou un new type.
- `matcher` : un objet exhaustif indexé par les valeurs `string` brutes possibles. Une `Primitive<string>` large nécessite un `Record<string, handler>` indexé.

Chaque clé doit avoir exactement un handler. Une clé manquante ou étrangère à l’union est refusée par TypeScript. Le handler sélectionné reçoit l’objet Clean original affiné avec `Primitive<ValeurCorrespondante>`.

## Valeur de retour

Le résultat du handler sélectionné, typé comme l’union des retours de tous les handlers.

## Voir aussi

- [`matchWithNumber`](/fr/v1/api/clean/primitives/operators/matchWithNumber) - Équivalent pour les primitives numériques.
- [`equal`](/fr/v1/api/clean/primitives/operators/equal) - Compare les valeurs de primitives wrappées.
