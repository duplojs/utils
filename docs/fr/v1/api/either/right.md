---
outline: [2, 3]
description: "Construit un EitherRight en associant une information métier obligatoire (string littérale) et un payload optionnel. C'est la brique de base pour signaler un succès contextualisé."
prev:
  text: "Either"
  link: "/fr/v1/api/either/"
next:
  text: "success"
  link: "/fr/v1/api/either/success"
---

# right

Construit un `EitherRight` en associant **une information métier obligatoire** (string littérale) et un payload optionnel. C'est la brique de base pour signaler un succès contextualisé.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/right/tryout.doc.ts"
  majorVersion="v1"
  height="800px"
/>

## Syntaxe

```typescript
function right<
	GenericInformation extends string, 
	const GenericInput extends unknown = undefined
>(
  information: GenericInformation,
  value?: GenericInput
): EitherRight<GenericInformation, GenericInput>
```

## Paramètres

- `information` : string littérale qui décrit précisément le succès (ex. `"user.created"`). Cette information reste dans le type.
- `input` : payload optionnel associé au succès. Si omis, le type inféré devient `undefined`.

## Valeur de retour

Un `EitherRight<Information, Value>` qui peut être discriminé avec `E.isRight`, `E.hasInformation` ou `E.whenHasInformation`.

## Bonnes pratiques

- Prenez l'habitude d'utiliser des chaînes descriptives (`"user.created"`, `"invoice.validated"`) pour simplifier le pattern matching.
- Ne partagez pas les mêmes chaînes entre plusieurs cas métiers différents.
- Combinez `right` avec `left` afin que chaque branche d'une fonction retourne un `Either` homogène.

## Voir aussi

- [`success`](/fr/v1/api/either/success) – Raccourci spécialisé pour `right("success", value)`.
- [`ok`](/fr/v1/api/either/ok) – Variante sans payload (`Right<"ok">`).
- [`hasInformation`](/fr/v1/api/either/hasInformation) – Type guard sur l'information métier.
