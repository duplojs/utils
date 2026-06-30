---
outline: [2, 3]
description: "Conserve les informations Either correspondantes côté Right et convertit chaque Right non correspondant en Left."
prev:
  text: "matchInformationOtherwise"
  link: "/fr/v1/api/either/matchInformationOtherwise"
next:
  text: "keepAsRightSelection"
  link: "/fr/v1/api/either/keepAsRightSelection"
---

# keepAsRightByInformation

Conserve les informations `Either` correspondantes côté `Right` et convertit chaque `Right` non correspondant en `Left`.

Lorsque l'information courante correspond et que l'entrée est un `Left`, elle est convertie en `Right` avec la même information et le même payload. Lorsque l'information courante ne correspond pas et que l'entrée est un `Right`, elle est convertie en `Left`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/keepAsRightByInformation/tryout.doc.ts"
  majorVersion="v1"
  height="712px"
/>

## Syntaxe

### Signature classique

```typescript
function keepAsRightByInformation<
  GenericInput extends unknown,
  GenericInformation extends Information,
>(
  input: GenericInput,
  information: GenericInformation | GenericInformation[],
): KeptAsRightOrLeftInput
```

### Signature currifiée

```typescript
function keepAsRightByInformation<
  GenericInput extends unknown,
  GenericInformation extends Information,
>(
  information: GenericInformation | GenericInformation[],
): (input: GenericInput) => KeptAsRightOrLeftInput
```

## Paramètres

- `information` : Information littérale attendue, ou tableau d'informations littérales qui doivent rester côté `Right`.
- `input` : Valeur Either à normaliser immédiatement, ou plus tard via la forme currifiée.

## Valeur de retour

Retourne un `Right` quand l'information courante est sélectionnée, en convertissant un `Left` correspondant si nécessaire. Retourne un `Left` quand l'information courante n'est pas sélectionnée, en convertissant un `Right` non correspondant si nécessaire. Les valeurs non-`Either` sont renvoyées inchangées.

## Voir aussi

- [`keepAsRightSelection`](/fr/v1/api/either/keepAsRightSelection) – Variante à sélecteur exhaustif.
- [`unwrapByInformation`](/fr/v1/api/either/unwrapByInformation) – Unwrap les informations correspondantes au lieu de conserver un `Either`.
- [`hasInformation`](/fr/v1/api/either/hasInformation) – Type guard basé sur l'information littérale.
