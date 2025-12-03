---
outline: [2, 3]
prev:
  text: "Either"
  link: "/v1/api/either/fr"
next:
  text: "success"
  link: "/v1/api/either/success/fr"
---

# right

Construit un `EitherRight` en associant **une information métier obligatoire** (string littérale) et un payload optionnel. C'est la brique de base pour signaler un succès contextualisé.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/either/right/examples/tryout.doc.ts"
  majorVersion="v1"
  height="800px"
/>

## Syntaxe

```typescript
function right<
	GenericInformation extends string, 
	const GenericValue extends unknown = undefined
>(
  information: GenericInformation,
  value?: GenericValue
): EitherRight<GenericInformation, GenericValue>
```

## Paramètres

- `information` : string littérale qui décrit précisément le succès (ex. `"user.created"`). Cette information reste dans le type.
- `value` : payload optionnel associé au succès. Si omis, le type inféré devient `undefined`.

## Valeur de retour

Un `EitherRight<Information, Value>` qui peut être discriminé avec `E.isRight`, `E.hasInformation` ou `E.whenHasInformation`.

## Bonnes pratiques

- Prenez l'habitude d'utiliser des chaînes descriptives (`"user.created"`, `"invoice.validated"`) pour simplifier le pattern matching.
- Ne partagez pas les mêmes chaînes entre plusieurs cas métiers différents.
- Combinez `right` avec `left` afin que chaque branche d'une fonction retourne un `Either` homogène.

## Voir aussi

- [`success`](/v1/api/either/success/fr) – Raccourci spécialisé pour `right("success", value)`.
- [`ok`](/v1/api/either/ok/fr) – Variante sans payload (`Right<"ok">`).
- [`hasInformation`](/v1/api/either/hasInformation/fr) – Type guard sur l'information métier.
