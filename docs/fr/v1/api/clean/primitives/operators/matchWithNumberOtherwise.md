---
outline: [2, 3]
description: "matchWithNumberOtherwise() traite partiellement une primitive Clean number tout en préservant la primitive originale affinée dans les handlers et otherwise."
prev:
  text: "matchWithNumber"
  link: "/fr/v1/api/clean/primitives/operators/matchWithNumber"
next:
  text: "add"
  link: "/fr/v1/api/clean/primitives/operators/add"
---

# matchWithNumberOtherwise

`matchWithNumberOtherwise()` traite certaines valeurs d’une primitive Clean number. Les valeurs number brutes forment les clés du matcher. Les cas manquants sont transmis à `otherwise`, qui reçoit la primitive originale affinée sur les valeurs restantes.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/clean/primitives/operators/matchWithNumberOtherwise/tryout.doc.ts"
  majorVersion="v1"
  height="565px"
/>

## Syntaxe

### Signature classique

```typescript
function matchWithNumberOtherwise<Input extends Primitive<number>, Matcher, Output>(
  input: Input,
  matcher: Matcher,
  otherwise: (value: UnhandledPrimitive) => Output
): MatcherResult | Output
```

### Signature currifiée

```typescript
function matchWithNumberOtherwise<Input extends Primitive<number>, Matcher, Output>(
  matcher: Matcher,
  otherwise: (value: UnhandledPrimitive) => Output
): (input: Input) => MatcherResult | Output
```

## Paramètres

- `input` : une primitive Clean number contenant des valeurs littérales.
- `matcher` : un objet partiel indexé par les valeurs brutes de la primitive. Les clés inconnues sont refusées.
- `otherwise` : reçoit la primitive `Primitive`, `ConstrainedType` ou `NewType` originale, affinée sur les valeurs sans handler.

## Valeur de retour

Le résultat du handler sélectionné, ou celui d’`otherwise` pour une valeur wrappée non traitée.

## Voir aussi

- [`matchWithNumber`](/fr/v1/api/clean/primitives/operators/matchWithNumber) - Matching exhaustif de primitive.
- [`matchWithStringOtherwise`](/fr/v1/api/clean/primitives/operators/matchWithStringOtherwise) - Équivalent pour une primitive string.
