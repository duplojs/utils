---
outline: [2, 3]
prev:
  text: "copyWithin"
  link: "/v1/api/array/copyWithin/fr"
next:
  text: "push"
  link: "/v1/api/array/push/fr"
---

# insert

La fonction **`insert()`** ajoute une valeur à la fin d'un tableau et retourne une nouvelle instance. La signature currifiée accepte d'abord le tableau (`array`), puis la valeur (`input`), ce qui facilite la composition. (cette fonction est similaire à `push()`, mais l'ordre des arguments est inversé).

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/array/insert/examples/tryout.doc.ts"
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

- [`push`](/v1/api/array/push/fr) - Ajoute un ou plusieurs éléments en fin de tableau
- [`concat`](/v1/api/array/concat/fr) - Fusionne plusieurs tableaux
- [`unshift`](/v1/api/array/unshift/fr) - Ajoute au début du tableau
