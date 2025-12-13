---
outline: [2, 3]
prev:
  text: "includes"
  link: "/v1/api/array/includes/fr"
next:
  text: "indexOf"
  link: "/v1/api/array/indexOf/fr"
---

# notIncludes

La fonction **`notIncludes()`** vérifie qu'un tableau ne contient pas une valeur donnée et agit comme un type guard pour exclure cette valeur du typage.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/array/notIncludes/examples/tryout.doc.ts"
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

- [`includes`](/v1/api/array/includes/fr) - Vérifie la présence d'une valeur
- [`filter`](/v1/api/array/filter/fr) - Filtre un tableau selon un prédicat
