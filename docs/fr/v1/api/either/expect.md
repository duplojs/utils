---
outline: [2, 3]
description: "Helper orienté typage qui renvoie le même Either en conservant strictement les types Left/Right."
prev:
  text: "unwrapSelectionOrThrow"
  link: "/fr/v1/api/either/unwrapSelectionOrThrow"
next:
  text: "safeCallback"
  link: "/fr/v1/api/either/safeCallback"
---

# expect

Helper orienté typage qui renvoie le même `Either` en conservant strictement les types `Left`/`Right`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/expect/tryout.doc.ts"
  majorVersion="v1"
  height="502px"
/>

## Syntaxe

```typescript
function expect<
  GenericEither extends Right | Left
>(
  input: GenericEither
): GenericEither;
```

## Paramètres

- `input` : Valeur Either à préserver.

## Valeur de retour

Renvoie exactement la même valeur runtime que l'entrée. La fonction sert surtout à préserver un typage Either strict dans des flux composés.

## Voir aussi

- [`matchInformation`](/fr/v1/api/either/matchInformation) - Matching exhaustif par information.
- [`matchInformationOtherwise`](/fr/v1/api/either/matchInformationOtherwise) - Matching non exhaustif avec fallback.
