---
outline: [2, 3]
prev:
  text: "sort"
  link: "/fr/v1/api/string/sort"
next:
  text: "concat"
  link: "/fr/v1/api/string/concat"
---

# sortCompare

La fonction **`sortCompare()`** compare deux chaînes en s'appuyant sur un `Intl.Collator` sensible à la locale.

Elle utilise la locale `"en-US-u-kn-true"` avec `{ usage: "sort", sensitivity: "variant", numeric: false, ignorePunctuation: false }`, ce qui rend la comparaison sensible à la casse et aux accents, prend en compte la ponctuation, et compare les chiffres comme des chaînes (pas de tri numérique).

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/string/sortCompare/tryout.doc.ts"
  majorVersion="v1"
  height="220px"
/>

## Syntaxe

### Signature classique

```typescript
function sortCompare(
	valueB: string,
	valueA: string
): number
```

### Signature currifiée

```typescript
function sortCompare(
	valueB: string
): (valueA: string) => number
```

## Paramètres

- `valueB`: Valeur de référence utilisée pour la comparaison.
- `valueA`: Valeur à comparer à `valueB`.

## Valeur de retour

Un nombre inférieur à `0` si `valueA` est avant `valueB`, supérieur à `0` si après, et `0` si les deux sont équivalentes selon les règles du collator.

## Voir aussi

- [`sort`](/fr/v1/api/string/sort) - Trie un tableau de chaînes
- [`normalize`](/fr/v1/api/string/normalize) - Normalise une chaîne Unicode
