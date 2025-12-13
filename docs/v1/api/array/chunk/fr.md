---
outline: [2, 3]
prev:
  text: "flatMap"
  link: "/v1/api/array/flatMap/fr"
next:
  text: "reverse"
  link: "/v1/api/array/reverse/fr"
---

# chunk

La fonction **`chunk()`** découpe un tableau en sous-tableaux d'une taille fixe et retourne la liste de ces blocs. Le dernier bloc peut être plus court si la taille ne divise pas le tableau.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/array/chunk/examples/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
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

- [`slice`](/v1/api/array/slice/fr) - Extrait une portion d'un tableau
- [`flatMap`](/v1/api/array/flatMap/fr) - Map puis aplatit le résultat
