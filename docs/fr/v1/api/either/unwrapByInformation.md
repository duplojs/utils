---
outline: [2, 3]
description: "Unwrap le payload d'un Either lorsqu'une information littérale, ou l'une de plusieurs informations littérales, correspond; sinon renvoie l'entrée inchangée."
prev:
  text: "keepAsRightSelection"
  link: "/fr/v1/api/either/keepAsRightSelection"
next:
  text: "unwrapByInformationOrThrow"
  link: "/fr/v1/api/either/unwrapByInformationOrThrow"
---

# unwrapByInformation

Unwrap le payload d'un `Either` lorsqu'une information littérale, ou l'une de plusieurs informations littérales, correspond; sinon renvoie l'entrée inchangée.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/unwrapByInformation/tryout.doc.ts"
  majorVersion="v1"
  height="586px"
/>

## Syntaxe

### Signature classique

```typescript
function unwrapByInformation<
  GenericInput extends unknown,
  GenericInformation extends (
    GenericInput extends Either
      ? ReturnType<typeof informationKind.getValue<GenericInput>>
      : never
  ),
>(
  input: GenericInput,
  information: GenericInformation | GenericInformation[],
): GenericInput extends Kind<typeof informationKind.definition, GenericInformation>
  ? Unwrap<GenericInput>
  : GenericInput
```

### Signature currifiée

```typescript
function unwrapByInformation<
  GenericInput extends unknown,
  const GenericInformation extends (
    GenericInput extends Either
      ? ReturnType<typeof informationKind.getValue<GenericInput>>
      : never
  ),
>(
  information: GenericInformation | GenericInformation[],
): (
  input: GenericInput,
) => GenericInput extends Kind<typeof informationKind.definition, GenericInformation>
  ? Unwrap<GenericInput>
  : GenericInput
```

## Paramètres

- `information` : Information littérale attendue, ou tableau d'informations littérales.
- `input` : Valeur `Either` à unwrap immédiatement, ou plus tard via la forme currifiée.

## Valeur de retour

Retourne le payload unwrap lorsqu'une information correspond. Si aucune information ne correspond, renvoie l'entrée originale inchangée.

## Voir aussi

- [`unwrapByInformationOrThrow`](/fr/v1/api/either/unwrapByInformationOrThrow) – Variante qui lève une erreur quand l'information ne correspond pas.
- [`hasInformation`](/fr/v1/api/either/hasInformation) – Contrôle non bloquant sur l'information littérale.
- [`whenHasInformation`](/fr/v1/api/either/whenHasInformation) – Variante à callback.
