---
outline: [2, 3]
description: "matchWithStringOtherwise() traite partiellement une primitive Clean string tout en préservant la primitive originale affinée dans les handlers et otherwise."
prev:
  text: "matchWithString"
  link: "/fr/v1/api/clean/primitives/operators/matchWithString"
next:
  text: "matchWithNumber"
  link: "/fr/v1/api/clean/primitives/operators/matchWithNumber"
---

# matchWithStringOtherwise

`matchWithStringOtherwise()` traite certaines valeurs d’une primitive Clean string. Les valeurs string brutes forment les clés du matcher. Les cas manquants sont transmis à `otherwise`, qui reçoit la primitive originale affinée sur les valeurs restantes.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/clean/primitives/operators/matchWithStringOtherwise/tryout.doc.ts"
  majorVersion="v1"
  height="565px"
/>

## Syntaxe

### Signature classique

```typescript
function matchWithStringOtherwise<Input extends Primitive<string>, Matcher, Output>(
  input: Input,
  matcher: Matcher,
  otherwise: (value: UnhandledPrimitive) => Output
): MatcherResult | Output
```

### Signature currifiée

```typescript
function matchWithStringOtherwise<Input extends Primitive<string>, Matcher, Output>(
  matcher: Matcher,
  otherwise: (value: UnhandledPrimitive) => Output
): (input: Input) => MatcherResult | Output
```

## Paramètres

- `input` : une primitive Clean string contenant des valeurs littérales.
- `matcher` : un objet partiel indexé par les valeurs brutes de la primitive. Les clés inconnues sont refusées.
- `otherwise` : reçoit la primitive `Primitive`, `ConstrainedType` ou `NewType` originale, affinée sur les valeurs sans handler.

## Valeur de retour

Le résultat du handler sélectionné, ou celui d’`otherwise` pour une valeur wrappée non traitée.

## Voir aussi

- [`matchWithString`](/fr/v1/api/clean/primitives/operators/matchWithString) - Matching exhaustif de primitive.
- [`matchWithNumberOtherwise`](/fr/v1/api/clean/primitives/operators/matchWithNumberOtherwise) - Équivalent pour une primitive number.
