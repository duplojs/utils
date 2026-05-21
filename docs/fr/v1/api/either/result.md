---
outline: [2, 3]
description: "Construit un Right de résultat neutre : ni positif ni négatif, simplement un résultat contextualisé avec une information métier et un payload optionnel."
prev:
  text: "right"
  link: "/fr/v1/api/either/right"
next:
  text: "success"
  link: "/fr/v1/api/either/success"
---

# result

Construit un `Right` de résultat neutre : ni positif ni négatif, simplement un résultat contextualisé avec une information métier et un payload optionnel.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/result/tryout.doc.ts"
  majorVersion="v1"
  height="355px"
/>

## Syntaxe

```typescript
function result<
  GenericInformation extends string,
  const GenericValue extends unknown = undefined
>(
  information: GenericInformation,
  value?: GenericValue
): Result<GenericInformation, GenericValue>
```

## Paramètres

- `information` : String littérale qui décrit le résultat produit (`"invoice.total"`, `"user.skipped"`, etc.).
- `value` : Payload optionnel associé à ce résultat.

## Valeur de retour

Un `Result<Information, Value>`, c'est-à-dire un `Right` spécialisé taggé avec le kind supplémentaire `result`.

## Voir aussi

- [`right`](/fr/v1/api/either/right) – Constructeur générique de `Right` avec information métier.
- [`success`](/fr/v1/api/either/success) – Raccourci pour les issues explicitement positives.
- [`unwrapRightOrThrow`](/fr/v1/api/either/unwrapRightOrThrow) – Unwrap immédiat du payload d'un `Right`.
