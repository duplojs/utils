---
outline: [2, 3]
description: "Type guard basé sur l'information littérale stockée dans l'Either. Permet de cibler précisément un ou plusieurs cas métier sans introspection supplémentaire."
prev:
  text: "asyncGroup"
  link: "/fr/v1/api/either/asyncGroup"
next:
  text: "whenHasInformation"
  link: "/fr/v1/api/either/whenHasInformation"
---

# hasInformation

Type guard basé sur l'information littérale stockée dans l'Either. Permet de cibler précisément un ou plusieurs cas métier sans introspection supplémentaire.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/hasInformation/tryout.doc.ts"
  majorVersion="v1"
  height="691px"
/>

## Syntaxe

```typescript
function hasInformation<
  const GenericInput extends unknown,
  GenericInformation extends (
    GenericInput extends Either
      ? ReturnType<typeof informationKind.getValue<GenericInput>>
      : never
  ),
>(
  input: GenericInput,
  information: GenericInformation | GenericInformation[],
): input is Extract<
  GenericInput,
  Kind<typeof informationKind.definition, GenericInformation>
>;

function hasInformation<
  const GenericInput extends unknown,
  GenericInformation extends (
    GenericInput extends Either
      ? ReturnType<typeof informationKind.getValue<GenericInput>>
      : never
  ),
>(
  information: GenericInformation | GenericInformation[],
): (input: GenericInput) => input is Extract<
  GenericInput,
  Kind<typeof informationKind.definition, GenericInformation>
>;
```

## Paramètres

- `information` : Information littérale attendue, ou tableau d'informations littérales.
- `input` *(optionnel dans la signature curry)* : Valeur sur laquelle effectuer le contrôle.

## Valeur de retour

Un booléen, mais surtout un type guard : lorsque le résultat est `true`, TypeScript sait que l'Either porte l'une des informations demandées (côté `Right` ou `Left`).

## Cas d'usage

- Différencier plusieurs erreurs/succès dans un même `Either`.
- Faire correspondre plusieurs informations métier avec un seul guard.
- Chaîner avec `E.whenHasInformation` pour déclencher une action ciblée.

## Voir aussi

- [`whenHasInformation`](/fr/v1/api/either/whenHasInformation) – Variante avec callback.
- [`right`](/fr/v1/api/either/right) / [`left`](/fr/v1/api/either/left) – Constructeurs qui imposent cette information littérale.
