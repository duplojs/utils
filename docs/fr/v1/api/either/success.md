---
outline: [2, 3]
description: "Raccourci lisible pour créer un Right avec l'information littérale \"success\". Idéal pour les fonctions qui retournent un seul type de succès."
prev:
  text: "right"
  link: "/fr/v1/api/either/right"
next:
  text: "ok"
  link: "/fr/v1/api/either/ok"
---

# success

Raccourci lisible pour créer un `Right` avec l'information littérale `"success"`. Idéal pour les fonctions qui retournent un seul type de succès.

::: tip
`success` est strictement équivalent à `right("success", value)`. Pour les détails génériques (information, typage, exemples plus complets), consultez la page [`right`](/fr/v1/api/either/right).
:::

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/success/tryout.doc.ts"
  majorVersion="v1"
  height="439px"
/>

## Syntaxe

```typescript
function success<
	const GenericInput extends unknown
>(
  input: GenericInput
): Success<GenericInput>
```

## Paramètres

- `input` : La valeur réussie à exposer. Son type est préservé.

## Valeur de retour

Un `Right` dont l'information est figée à `"success"`. Combinez-le avec `E.hasInformation(result, "success")` pour obtenir un type exhaustif.

## Quand utiliser `success` ?

- Pour exprimer des opérations qui n'ont qu'un seul succès « par défaut ».
- Pour obtenir une syntaxe plus courte et lisible que `right("success", value)`.
- Pour rester cohérent avec `E.error` côté `Left`.

## Voir aussi

- [`right`](/fr/v1/api/either/right) – Version générique permettant de choisir l'information.
- [`ok`](/fr/v1/api/either/ok) – Succès sans payload (`void`).
- [`error`](/fr/v1/api/either/error) – Pendant côté `Left` avec l'information `"error"`.
