---
outline: [2, 3]
description: "Pattern matching exhaustif sur l'information d'un Either. Chaque information possible doit être traitée."
prev:
  text: "whenIsSelectedOtherwise"
  link: "/fr/v1/api/either/whenIsSelectedOtherwise"
next:
  text: "matchInformationOtherwise"
  link: "/fr/v1/api/either/matchInformationOtherwise"
---

# matchInformation

Pattern matching exhaustif sur l'information d'un Either. Chaque information possible de l'entrée doit être traitée.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/matchInformation/tryout.doc.ts"
  majorVersion="v1"
  height="733px"
/>

## Syntaxe

### Signature classique

```typescript
function matchInformation<
  GenericInput extends unknown,
  GenericMatcher extends ComputeMatcher<Extract<GenericInput, Right | Left>>
>(
  input: GenericInput,
  matcher: GenericMatcher
): ReturnType<GenericMatcher[keyof GenericMatcher]> | Exclude<GenericInput, Right | Left>;
```

### Signature currifiée

```typescript
function matchInformation<
  GenericInput extends unknown,
  GenericMatcher extends ComputeMatcher<Extract<GenericInput, Right | Left>>
>(
  matcher: GenericMatcher
): (input: GenericInput) => ReturnType<GenericMatcher[keyof GenericMatcher]> | Exclude<GenericInput, Right | Left>;
```

## Paramètres

- `matcher` : Objet contenant un callback par clé d'information.
- `input` : Valeur à traiter immédiatement (optionnelle en style currifié).

## Valeur de retour

- Si l'entrée est un `Either`, renvoie le résultat du callback correspondant à son information.
- Si l'entrée n'est pas un `Either`, renvoie l'entrée telle quelle.

## Voir aussi

- [`matchInformationOtherwise`](/fr/v1/api/either/matchInformationOtherwise) - Variante non exhaustive avec fallback.
- [`whenHasInformation`](/fr/v1/api/either/whenHasInformation) - Cible une information (ou une liste) avec callback.
