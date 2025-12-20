---
outline: [2, 3]
prev:
  text: 'Date'
  link: '/fr/v1/api/date/'
next:
  text: 'Generator'
  link: '/fr/v1/api/generator/'
---

# Either

Monade `Either` pour la gestion d'erreurs fonctionnelle et type-safe. Permet de représenter une valeur qui peut être soit un succès (`Right`), soit une erreur (`Left`), évitant ainsi l'utilisation d'exceptions.

## Comment faire les imports ?

La bibliothèque expose les namespaces `DEither` et `E` depuis l'entrée principale **ou** en import direct (tree-shaking friendly), ce qui permet de ne charger que ce dont vous avez besoin.

```typescript
import { DEither, E } from "@duplojs/utils";
import * as DEither from "@duplojs/utils/either";
import * as E from "@duplojs/utils/either";
```

### Qu'est-ce qu'une monade Either ? {.toc-hidden}
<details>
<summary>Qu'est-ce qu'une monade Either ?</summary>

::: info
Une monade `Either` est un conteneur qui représente une valeur qui peut être dans l'un de deux états : **`succès`** ou **`erreur`**. Elle permet une gestion d'erreurs élégante et type-safe sans lever d'exceptions.
:::

La monade `Either` possède deux constructeurs :
- **`E.left`** : représente une erreur (le côté "mauvais")
- **`E.right`** : représente une valeur valide (le côté "bon")

```typescript
if (result > 0) {
  return E.right("success", result);
} else {
  return E.left("error", result);
}
```

::: warning
L'ordre importe : `Left` est conventionnellement utilisé pour les erreurs et `Right` pour les succès. Ne les inversez pas dans votre logique métier.
:::

**Avantages** :
- **Type-safe** : Le compilateur TypeScript force à gérer les deux cas
- **Pas d'exceptions** : Évite les try-catch et les comportements imprévisibles
- **Composable** : Les opérations Either peuvent être chaînées avec `map`, `flatMap`, etc.
- **Lisible** : Le code devient plus explicite sur les chemins d'erreur

::: tip
Vous pouvez chaîner les opérations Either pour une gestion d'erreurs élégante sans imbrication de conditions.
:::

</details>


### La puissance de la contextualisation avec Info {.toc-hidden}
<details>
<summary>La puissance de la contextualisation avec Info</summary>

::: info
La vraie force de cette lib réside dans l'**ajout obligatoire d'une info** à chaque état (succès ou erreur). Cette info reste à la fois sur la monade ET dans le typage TypeScript, permettant un pattern matching précis et type-safe.
:::

**Le problème sans info** :

Une monade peut contenir plusieurs erreurs et plusieurs succès différents. Sans contextualisation, vous êtes obligé de faire du pattern matching générique ou de refaire des validations pour savoir réellement ce que contient la monade.

```typescript
// Sans info : ambigu, qu'est-ce qu'on a vraiment ?
const result = someFunction();
if (E.isRight(result)) {
  // Mais quel succès ? On ne sait pas vraiment
  const value = unwrap(result);
}
```

**La solution avec info** :

L'info est une **string littérale** qui contextualise la sortie. Elle reste dans le type, ce qui permet à TypeScript de vous aider lors du pattern matching.

```typescript
const result = someFunction();

if (E.isRight(result) && E.hasInformation(result, "user.created")) {
	// TypeScript sait exactement quel succès !
	const newUser = unwrap(result);
} else if (E.isRight(result) && E.hasInformation(result, "user.updated")) {
	// Un autre succès, complètement différent
	const updatedUser = unwrap(result);
} else if (E.isLeft(result) && E.hasInformation(result, "emailAlreadyExists")) {
	// Une erreur spécifique, facile à gérer
	const conflict = unwrap(result);
	...
}

```

**Avantages de cette approche** :
- **Pas de validation supplémentaire** : L'info suffit à identifier précisément l'état
- **Exhaustivité garantie** : TypeScript force à gérer tous les cas possibles
- **Sémantique claire** : Le code documente lui-même ce qui se passe
- **Évite les erreurs génériques** : Plus besoin de monades génériques, chaque cas est explicite

::: warning
L'info doit être explicite et représentative. Utilisez des noms clairs comme `"emailAlreadyExists"`, `"validationFailed"`, `"user.created"` plutôt que des codes génériques.
:::

</details>

## Constructeurs `Right`

### [right](/fr/v1/api/either/right)
Construit un `EitherRight` typé avec une information métier obligatoire (payload optionnel).

### [success](/fr/v1/api/either/success)
Raccourci pour retourner un succès `right("success", value)` de manière expressive.

### [ok](/fr/v1/api/either/ok)
Retourne un `Right` sans valeur (`void`) taggé avec l'information littérale `"ok"`.

## Constructeurs `Left`

### [left](/fr/v1/api/either/left)
Construit un `EitherLeft` en fournissant l'information métier et éventuellement une valeur.

### [error](/fr/v1/api/either/error)
Raccourci pour signaler une erreur typée `left("error", value)`.

### [fail](/fr/v1/api/either/fail)
Retourne un `Left` sans payload taggé `"fail"` pour les cas d'échec génériques.

## Contrôles `Right`

### [isRight](/fr/v1/api/either/isRight)
Type guard qui vérifie si une valeur est un `EitherRight`.

### [whenIsRight](/fr/v1/api/either/whenIsRight)
Exécute une fonction uniquement quand l'entrée est `Right`, sinon relaie la valeur originale.

## Contrôles `Left`

### [isLeft](/fr/v1/api/either/isLeft)
Type guard qui détecte un `EitherLeft`.

### [whenIsLeft](/fr/v1/api/either/whenIsLeft)
Permet d'appliquer une fonction lorsqu'on reçoit un `Left` puis de continuer le flux.

## Pipelines orientés `Right`

### [rightPipe](/fr/v1/api/either/rightPipe)
Chaîne des transformations synchrones tant que les résultats restent `Right`, s'interrompt sur le premier `Left`.

### [rightAsyncPipe](/fr/v1/api/either/rightAsyncPipe)
Version asynchrone acceptant promesses, `Future` ou `Either` et s'arrêtant automatiquement sur un `Left`.

### [group](/fr/v1/api/either/group)
Agrège plusieurs `Either` synchrones et renvoie le premier `Left` ou un objet des valeurs `Right`.

### [asyncGroup](/fr/v1/api/either/asyncGroup)
Version asynchrone de `group` acceptant promesses et `Future`.

## Informations & matching

### [hasInformation](/fr/v1/api/either/hasInformation)
Type guard basé sur l'information littérale pour cibler précisément un cas métier.

### [whenHasInformation](/fr/v1/api/either/whenHasInformation)
Pattern matching qui déclenche une fonction quand l'information (ou une liste d'infos) correspond.

## Helpers booléens

### [bool](/fr/v1/api/either/bool)
Convertit n'importe quelle valeur en `Either` booléen (`Right` si truthy, `Left` si falsy) tout en conservant le typage.

### [boolTruthy](/fr/v1/api/either/boolTruthy)
Force la création d'un `Right<"bool">` en marquant explicitement une valeur truthy.

### [boolFalsy](/fr/v1/api/either/boolFalsy)
Construit un `Left<"bool">` à partir d'une valeur falsy (`undefined`, `null`, `""`, `0`, `false`).

### [isBoolTruthy](/fr/v1/api/either/isBoolTruthy)
Type guard spécialisé pour les `boolTruthy`.

### [whenIsBoolTruthy](/fr/v1/api/either/whenIsBoolTruthy)
Déclenche une fonction uniquement lorsqu'une valeur (ou le résultat de `bool`) est truthy.

### [isBoolFalsy](/fr/v1/api/either/isBoolFalsy)
Type guard spécialisé pour les `boolFalsy`.

### [whenIsBoolFalsy](/fr/v1/api/either/whenIsBoolFalsy)
Déclenche une fonction uniquement lorsqu'une valeur (ou le résultat de `bool`) est falsy.

## Gestion des valeurs nullish

### [nullish](/fr/v1/api/either/nullish)
Transforme une valeur potentiellement `null`/`undefined` en `Either`, remplie à droite si la valeur existe.

### [nullishEmpty](/fr/v1/api/either/nullishEmpty)
Construit explicitement un `Left<"nullish">` avec une valeur `null` ou `undefined`.

### [nullishFilled](/fr/v1/api/either/nullishFilled)
Construit un `Right<"nullish">` à partir d'une valeur définie.

### [isNullishEmpty](/fr/v1/api/either/isNullishEmpty)
Type guard pour détecter un `nullishEmpty`.

### [whenIsNullishEmpty](/fr/v1/api/either/whenIsNullishEmpty)
Applique une fonction uniquement pour le cas `nullishEmpty`.

### [isNullishFilled](/fr/v1/api/either/isNullishFilled)
Type guard pour détecter un `nullishFilled`.

### [whenIsNullishFilled](/fr/v1/api/either/whenIsNullishFilled)
Applique une fonction lorsque la valeur nullish est effectivement définie (`Right`).

## Gestion des valeurs nullables

### [nullable](/fr/v1/api/either/nullable)
Encapsule un `null` possible en `Either`, ce qui impose de gérer l'absence de valeur.

### [nullableEmpty](/fr/v1/api/either/nullableEmpty)
Construit un `Left<"nullable">` contenant `null`.

### [nullableFilled](/fr/v1/api/either/nullableFilled)
Construit un `Right<"nullable">` avec une valeur non nulle.

### [isNullableEmpty](/fr/v1/api/either/isNullableEmpty)
Type guard pour les `nullableEmpty`.

### [whenIsNullableEmpty](/fr/v1/api/either/whenIsNullableEmpty)
Callback déclenché uniquement lorsque la valeur est `null`.

### [isNullableFilled](/fr/v1/api/either/isNullableFilled)
Type guard pour les `nullableFilled`.

### [whenIsNullableFilled](/fr/v1/api/either/whenIsNullableFilled)
Callback déclenché lorsque la valeur nullable est présente (`Right`).

## Gestion des optionnels

### [optional](/fr/v1/api/either/optional)
Wrappe une valeur possiblement `undefined` en `Either`, utile pour les champs optionnels.

### [optionalEmpty](/fr/v1/api/either/optionalEmpty)
Construit un `Left<"optional">` contenant `undefined`.

### [optionalFilled](/fr/v1/api/either/optionalFilled)
Construit un `Right<"optional">` avec une valeur définie.

### [isOptionalEmpty](/fr/v1/api/either/isOptionalEmpty)
Type guard pour les `optionalEmpty`.

### [whenIsOptionalEmpty](/fr/v1/api/either/whenIsOptionalEmpty)
Callback déclenché uniquement lorsqu'un optionnel est vide.

### [isOptionalFilled](/fr/v1/api/either/isOptionalFilled)
Type guard pour les `optionalFilled`.

### [whenIsOptionalFilled](/fr/v1/api/either/whenIsOptionalFilled)
Callback déclenché lorsqu'un optionnel contient une valeur.

## Futures et asynchronisme

### [future](/fr/v1/api/either/future)
Convertit une valeur (ou un `Either`) en `Future`, classe dérivée de `Promise` avec support de `Future.all`.

### [futureSuccess](/fr/v1/api/either/futureSuccess)
Construit un `EitherRight<"future">` pour signaler explicitement une résolution réussie.

### [futureError](/fr/v1/api/either/futureError)
Construit un `EitherLeft<"future">` pour représenter une erreur asynchrone standardisée.
