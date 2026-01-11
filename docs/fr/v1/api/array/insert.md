---
outline: [2, 3]
description: "La fonction insert() ajoute une valeur à la fin d'un tableau et retourne une nouvelle instance. La signature currifiée accepte d'abord le tableau (array), puis la valeur (input), ce qui facilite la composition. (cette fonction est similaire à push(), mais l'ordre des arguments est inversé)."
prev:
  text: "copyWithin"
  link: "/fr/v1/api/array/copyWithin"
next:
  text: "push"
  link: "/fr/v1/api/array/push"
---

# insert

La fonction **`insert()`** ajoute une valeur à la fin d'un tableau et retourne une nouvelle instance. La signature currifiée accepte d'abord le tableau (`array`), puis la valeur (`input`), ce qui facilite la composition. (cette fonction est similaire à `push()`, mais l'ordre des arguments est inversé).

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/array/insert/tryout.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## Syntaxe

### Signature classique

```typescript
function insert<
  GenericElement extends unknown,
>(
  input: GenericElement,
  array: readonly GenericElement[],
): GenericElement[]
```

### Signature currifiée

```typescript
function insert<
  GenericElement extends unknown,
>(
  array: readonly GenericElement[],
): (input: GenericElement) => GenericElement[]
```

## Paramètres

- `input` : Valeur à ajouter en fin de tableau.
- `array` : Tableau cible.

## Valeur de retour

Un nouveau tableau contenant tous les éléments originaux suivis de `input`.

## Voir aussi

- [`push`](/fr/v1/api/array/push) - Ajoute un ou plusieurs éléments en fin de tableau
- [`concat`](/fr/v1/api/array/concat) - Fusionne plusieurs tableaux
- [`unshift`](/fr/v1/api/array/unshift) - Ajoute au début du tableau
