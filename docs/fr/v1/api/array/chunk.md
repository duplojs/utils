---
outline: [2, 3]
description: "La fonction chunk() découpe un tableau en sous-tableaux d'une taille fixe et retourne la liste de ces blocs. Le dernier bloc peut être plus court si la taille ne divise pas le tableau."
prev:
  text: "flatMap"
  link: "/fr/v1/api/array/flatMap"
next:
  text: "reverse"
  link: "/fr/v1/api/array/reverse"
---

# chunk

La fonction **`chunk()`** découpe un tableau en sous-tableaux d'une taille fixe et retourne la liste de ces blocs. Le dernier bloc peut être plus court si la taille ne divise pas le tableau.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/array/chunk/tryout.doc.ts"
  majorVersion="v1"
  height="271px"
/>

## Syntaxe

### Signature classique

```typescript
function chunk<
  GenericInput extends readonly unknown[],
>(
  input: GenericInput,
  size: number,
): GenericInput[]
```

### Signature currifiée

```typescript
function chunk<
  GenericInput extends readonly unknown[],
>(
  size: number,
): (input: GenericInput) => GenericInput[]
```

## Paramètres

- `input` : Tableau à découper.
- `size` : Taille de chaque bloc.

## Valeur de retour

Un nouveau tableau contenant les sous-tableaux créés. Le tableau d'origine n'est pas modifié.

## Voir aussi

- [`slice`](/fr/v1/api/array/slice) - Extrait une portion d'un tableau
- [`flatMap`](/fr/v1/api/array/flatMap) - Map puis aplatit le résultat
