---
outline: [2, 3]
description: "Pattern matching non exhaustif sur l'information d'un Either avec callback de fallback explicite."
prev:
  text: "matchInformation"
  link: "/fr/v1/api/either/matchInformation"
next:
  text: "unwrapByInformationOrThrow"
  link: "/fr/v1/api/either/unwrapByInformationOrThrow"
---

# matchInformationOtherwise

Pattern matching non exhaustif sur l'information d'un Either avec callback de fallback explicite.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/matchInformationOtherwise/tryout.doc.ts"
  majorVersion="v1"
  height="691px"
/>

## Syntaxe

### Signature classique

```typescript
function matchInformationOtherwise<
  GenericInput extends unknown,
  GenericMatcher extends ComputeMatcher<Extract<GenericInput, Right | Left>>,
  GenericOutput extends unknown
>(
  input: GenericInput,
  matcher: GenericMatcher,
  otherwise: (value: Exclude<GenericInput, Right | Left>) => GenericOutput
): ReturnType<GenericMatcher[keyof GenericMatcher]> | Exclude<GenericInput, Right | Left>;
```

### Signature currifiée

```typescript
function matchInformationOtherwise<
  GenericInput extends unknown,
  GenericMatcher extends ComputeMatcher<Extract<GenericInput, Right | Left>>,
  GenericOutput extends unknown
>(
  matcher: GenericMatcher,
  otherwise: (value: Exclude<GenericInput, Right | Left>) => GenericOutput
): (input: GenericInput) => ReturnType<GenericMatcher[keyof GenericMatcher]> | GenericOutput;
```

## Paramètres

- `matcher` : Objet partiel de callbacks d'information.
- `otherwise` : Callback utilisé quand aucun callback du matcher ne correspond, ou quand l'entrée n'est pas un `Either`.
- `input` : Valeur à traiter immédiatement (optionnelle en style currifié).

## Valeur de retour

Renvoie soit le résultat du callback matché, soit le résultat du callback `otherwise`.

## Voir aussi

- [`matchInformation`](/fr/v1/api/either/matchInformation) - Variante exhaustive.
- [`expect`](/fr/v1/api/either/expect) - Conserve un typage Either strict dans les flux.
