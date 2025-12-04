---
outline: [2, 3]
prev:
  text: "right"
  link: "/v1/api/either/right/fr"
next:
  text: "ok"
  link: "/v1/api/either/ok/fr"
---

# success

Raccourci lisible pour créer un `EitherRight` avec l'information littérale `"success"`. Idéal pour les fonctions qui retournent un seul type de succès.

::: tip
`success` est strictement équivalent à `right("success", value)`. Pour les détails génériques (information, typage, exemples plus complets), consultez la page [`right`](/v1/api/either/right/fr).
:::

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/either/success/examples/tryout.doc.ts"
  majorVersion="v1"
  height="450px"
/>

## Syntaxe

```typescript
function success<
	const GenericInput extends unknown
>(
  input: GenericInput
): EitherSuccess<GenericInput>
```

## Paramètres

- `input` : La valeur réussie à exposer. Son type est préservé.

## Valeur de retour

Un `EitherRight` dont l'information est figée à `"success"`. Combinez-le avec `E.hasInformation(result, "success")` pour obtenir un type exhaustif.

## Quand utiliser `success` ?

- Pour exprimer des opérations qui n'ont qu'un seul succès « par défaut ».
- Pour obtenir une syntaxe plus courte et lisible que `right("success", value)`.
- Pour rester cohérent avec `E.error` côté `Left`.

## Voir aussi

- [`right`](/v1/api/either/right/fr) – Version générique permettant de choisir l'information.
- [`ok`](/v1/api/either/ok/fr) – Succès sans payload (`void`).
- [`error`](/v1/api/either/error/fr) – Pendant côté `Left` avec l'information `"error"`.
