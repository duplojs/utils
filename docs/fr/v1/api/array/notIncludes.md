---
outline: [2, 3]
description: "La fonction notIncludes() vérifie qu'un tableau ne contient pas une valeur donnée et agit comme un type guard pour exclure cette valeur du typage."
prev:
  text: "includes"
  link: "/fr/v1/api/array/includes"
next:
  text: "indexOf"
  link: "/fr/v1/api/array/indexOf"
---

# notIncludes

La fonction **`notIncludes()`** vérifie qu'un tableau ne contient pas une valeur donnée et agit comme un type guard pour exclure cette valeur du typage.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/array/notIncludes/tryout.doc.ts"
  majorVersion="v1"
  height="350px"
/>

## Syntaxe

### Signature classique

```typescript
function notIncludes<
  GenericArrayValue extends unknown,
  const GenericNotIncludeValue extends RemoveFromUnion<
    Extract<GenericArrayValue, NotIncludeValue>,
    Exclude<NotIncludeValue, null | undefined>
  >,
>(
  input: readonly GenericArrayValue[],
  value: GenericNotIncludeValue,
): input is Exclude<
  GenericArrayValue,
  GenericNotIncludeValue
>[]
```

### Signature currifiée

```typescript
function notIncludes<
  GenericArrayValue extends unknown,
  const GenericNotIncludeValue extends RemoveFromUnion<
    Extract<GenericArrayValue, NotIncludeValue>,
    Exclude<NotIncludeValue, null | undefined>
  >,
>(
  value: GenericNotIncludeValue,
): (input: readonly GenericArrayValue[]) => input is Exclude<
  GenericArrayValue,
  GenericNotIncludeValue
>[]
```

## Paramètres

- `input` : Tableau source.
- `value` : Valeur dont on veut garantir l'absence dans le tableau.

## Valeur de retour

Un booléen. Lorsque `true`, TypeScript sait que le tableau ne contient pas `value` et en retire la valeur du type des éléments.

## Voir aussi

- [`includes`](/fr/v1/api/array/includes) - Vérifie la présence d'une valeur
- [`filter`](/fr/v1/api/array/filter) - Filtre un tableau selon un prédicat
