---
description: "Une Either représente une valeur dans l'un de deux états : Left (échec) ou Right (succès)."
prev:
  text: "Le pipe"
  link: "/fr/v1/guide/pipe"
---

# Either

[[toc]]

## Le principe

Une `Either` représente une valeur dans l'un de ces deux états :
- `Left` : un échec (souvent une erreur métier)
- `Right` : un succès

L'objectif est d'exprimer les chemins d'erreur **dans le type**, sans exceptions, et de pouvoir composer des étapes sans multiplier les `if` et les `try/catch`.

## Imports

La bibliothèque expose le namespace `E` (alias de `DEither`) depuis l'entrée principale, ou en import direct.

```ts
import { E, unwrap } from "@duplojs/utils";
// ou (tree-shaking friendly)
import * as E from "@duplojs/utils/either";
```

## La particularité de `@duplojs/utils` : une information obligatoire

Dans cette librairie, un `Left` comme un `Right` porte une **information** (une string littérale) qui contextualise le cas métier, par exemple :
- `"user.created"`
- `"emailAlreadyExists"`
- `"validationFailed"`

Cette information est disponible au runtime et **dans le typage**, ce qui permet un matching précis avec `E.hasInformation`.

```ts
import { E } from "@duplojs/utils";

const created = E.right(
	"user.created",
	{
		userId: "usr_1",
	},
);

const conflict = E.left(
	"emailAlreadyExists",
	{
		email: "taken@example.com",
	},
);
```

## Créer une `Either`

Les constructeurs de base sont :
- `E.right(info, value)` / `E.left(info, value)`
- raccourcis : `E.success(value)`, `E.ok()`, `E.error(value)`, `E.fail()`

## Lire / matcher une `Either`

Les outils les plus utilisés :
- `E.isRight` / `E.isLeft` pour brancher
- `E.hasInformation(info)` pour cibler un cas précis
- `unwrap` pour récupérer la valeur contenue (payload)

Un exemple typique : filtrer une union d'erreurs/succès grâce à l'information.

```ts
import { E, unwrap } from "@duplojs/utils";

const result = E.left(
	"emailAlreadyExists",
	{
		email: "taken@example.com",
	},
);

if (E.isLeft(result) && E.hasInformation(result, "emailAlreadyExists")) {
	const payload = unwrap(result);
	// payload.email -> string
}
```

## Composer des pipelines orientés succès

Quand tu veux enchaîner des transformations **tant que ça reste un `Right`** :
- `E.rightPipe` pour le synchrone
- `E.rightAsyncPipe` pour l'asynchrone (promesses et `Future`)

Pour agréger plusieurs `Either` :
- `E.group` renvoie le premier `Left`, sinon un `Right` contenant toutes les valeurs
- `E.asyncGroup` fait la même chose en acceptant aussi des promesses / `Future`

## Variantes et outils autour d'Either

La librairie fournit des wrappers qui produisent directement des `Either` spécialisées :
- `E.bool(value)` : `Right` si truthy, sinon `Left`
- `E.nullish(value)` : gère `null | undefined`
- `E.nullable(value)` : gère `null`
- `E.optional(value)` : gère `undefined`
- `E.future(value)` : enveloppe une valeur / promesse / either dans une `Future` (Promise typée Either)

Chaque variante vient avec ses propres helpers (`E.isNullishEmpty`, `E.whenIsOptionalFilled`, `E.whenIsBoolFalsy`, etc.) pour faire du matching sans “perdre” le typage.

## Try it (bases)

<MonacoTSEditor
src="/examples/v1/guide/either/basics.doc.ts"
majorVersion="v1"
height="1850px"
/>

## Try it (variantes)

<MonacoTSEditor
src="/examples/v1/guide/either/variants.doc.ts"
majorVersion="v1"
height="1200px"
/>

## Try it (pipe + when spécialisés)

<MonacoTSEditor
src="/examples/v1/guide/either/pipeWhens.doc.ts"
majorVersion="v1"
height="1300px"
/>
