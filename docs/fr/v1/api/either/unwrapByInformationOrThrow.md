---
outline: [2, 3]
description: "Unwrap le payload d'un Either lorsqu'une information littérale, ou l'une de plusieurs informations littérales, correspond; sinon lève une HasNotInformationError."
prev:
  text: "unwrapByInformation"
  link: "/fr/v1/api/either/unwrapByInformation"
next:
  text: "unwrapSelection"
  link: "/fr/v1/api/either/unwrapSelection"
---

# unwrapByInformationOrThrow

Unwrap le payload d'un `Either` lorsqu'une information littérale, ou l'une de plusieurs informations littérales, correspond; sinon lève une `HasNotInformationError`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/unwrapByInformationOrThrow/tryout.doc.ts"
  majorVersion="v1"
  height="586px"
/>

## Syntaxe

### Signature classique

```typescript
function unwrapByInformationOrThrow<
  GenericInput extends unknown,
  GenericInformation extends (
    GenericInput extends Either
      ? ReturnType<typeof informationKind.getValue<GenericInput>>
      : never
  ),
>(
  input: GenericInput,
  information: GenericInformation | GenericInformation[],
): Unwrap<
  Extract<
    GenericInput,
    Kind<typeof informationKind.definition, GenericInformation>
  >
>
```

### Signature currifiée

```typescript
function unwrapByInformationOrThrow<
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
) => Unwrap<
  Extract<
    GenericInput,
    Kind<typeof informationKind.definition, GenericInformation>
  >
>
```

## Paramètres

- `information` : Information littérale attendue, ou tableau d'informations littérales.
- `input` : Valeur `Either` à unwrap immédiatement, ou plus tard via la forme currifiée.

## Valeur de retour

Retourne le payload unwrap lorsqu'une information correspond. Sinon, la fonction lève `E.HasNotInformationError`.

## Voir aussi

- [`unwrapByInformation`](/fr/v1/api/either/unwrapByInformation) – Variante non bloquante qui renvoie l'entrée inchangée si aucune information ne correspond.
- [`hasInformation`](/fr/v1/api/either/hasInformation) – Contrôle non bloquant sur l'information littérale.
- [`whenHasInformation`](/fr/v1/api/either/whenHasInformation) – Variante à callback.
