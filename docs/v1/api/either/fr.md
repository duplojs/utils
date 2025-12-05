---
outline: [2, 3]
prev:
  text: 'Generator'
  link: '/v1/api/generator/fr'
next:
  text: 'DataParser'
  link: '/v1/api/data-parser/fr'
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

### [right](/v1/api/either/right/fr)
Construit un `EitherRight` typé avec une information métier obligatoire (payload optionnel).

### [success](/v1/api/either/success/fr)
Raccourci pour retourner un succès `right("success", value)` de manière expressive.

### [ok](/v1/api/either/ok/fr)
Retourne un `Right` sans valeur (`void`) taggé avec l'information littérale `"ok"`.

## Constructeurs `Left`

### [left](/v1/api/either/left/fr)
Construit un `EitherLeft` en fournissant l'information métier et éventuellement une valeur.

### [error](/v1/api/either/error/fr)
Raccourci pour signaler une erreur typée `left("error", value)`.

### [fail](/v1/api/either/fail/fr)
Retourne un `Left` sans payload taggé `"fail"` pour les cas d'échec génériques.

## Contrôles `Right`

### [isRight](/v1/api/either/isRight/fr)
Type guard qui vérifie si une valeur est un `EitherRight`.

### [whenIsRight](/v1/api/either/whenIsRight/fr)
Exécute une fonction uniquement quand l'entrée est `Right`, sinon relaie la valeur originale.

## Contrôles `Left`

### [isLeft](/v1/api/either/isLeft/fr)
Type guard qui détecte un `EitherLeft`.

### [whenIsLeft](/v1/api/either/whenIsLeft/fr)
Permet d'appliquer une fonction lorsqu'on reçoit un `Left` puis de continuer le flux.

## Pipelines orientés `Right`

### [rightPipe](/v1/api/either/rightPipe/fr)
Chaîne des transformations synchrones tant que les résultats restent `Right`, s'interrompt sur le premier `Left`.

### [rightAsyncPipe](/v1/api/either/rightAsyncPipe/fr)
Version asynchrone acceptant promesses, `Future` ou `Either` et s'arrêtant automatiquement sur un `Left`.

## Informations & matching

### [hasInformation](/v1/api/either/hasInformation/fr)
Type guard basé sur l'information littérale pour cibler précisément un cas métier.

### [whenHasInformation](/v1/api/either/whenHasInformation/fr)
Pattern matching qui déclenche une fonction quand l'information (ou une liste d'infos) correspond.

## Helpers booléens

### [bool](/v1/api/either/bool/fr)
Convertit n'importe quelle valeur en `Either` booléen (`Right` si truthy, `Left` si falsy) tout en conservant le typage.

### [boolTruthy](/v1/api/either/boolTruthy/fr)
Force la création d'un `Right<"bool">` en marquant explicitement une valeur truthy.

### [boolFalsy](/v1/api/either/boolFalsy/fr)
Construit un `Left<"bool">` à partir d'une valeur falsy (`undefined`, `null`, `""`, `0`, `false`).

### [isBoolTruthy](/v1/api/either/isBoolTruthy/fr)
Type guard spécialisé pour les `boolTruthy`.

### [whenIsBoolTruthy](/v1/api/either/whenIsBoolTruthy/fr)
Déclenche une fonction uniquement lorsqu'une valeur (ou le résultat de `bool`) est truthy.

### [isBoolFalsy](/v1/api/either/isBoolFalsy/fr)
Type guard spécialisé pour les `boolFalsy`.

### [whenIsBoolFalsy](/v1/api/either/whenIsBoolFalsy/fr)
Déclenche une fonction uniquement lorsqu'une valeur (ou le résultat de `bool`) est falsy.

## Gestion des valeurs nullish

### [nullish](/v1/api/either/nullish/fr)
Transforme une valeur potentiellement `null`/`undefined` en `Either`, remplie à droite si la valeur existe.

### [nullishEmpty](/v1/api/either/nullishEmpty/fr)
Construit explicitement un `Left<"nullish">` avec une valeur `null` ou `undefined`.

### [nullishFilled](/v1/api/either/nullishFilled/fr)
Construit un `Right<"nullish">` à partir d'une valeur définie.

### [isNullishEmpty](/v1/api/either/isNullishEmpty/fr)
Type guard pour détecter un `nullishEmpty`.

### [whenIsNullishEmpty](/v1/api/either/whenIsNullishEmpty/fr)
Applique une fonction uniquement pour le cas `nullishEmpty`.

### [isNullishFilled](/v1/api/either/isNullishFilled/fr)
Type guard pour détecter un `nullishFilled`.

### [whenIsNullishFilled](/v1/api/either/whenIsNullishFilled/fr)
Applique une fonction lorsque la valeur nullish est effectivement définie (`Right`).

## Gestion des valeurs nullables

### [nullable](/v1/api/either/nullable/fr)
Encapsule un `null` possible en `Either`, ce qui impose de gérer l'absence de valeur.

### [nullableEmpty](/v1/api/either/nullableEmpty/fr)
Construit un `Left<"nullable">` contenant `null`.

### [nullableFilled](/v1/api/either/nullableFilled/fr)
Construit un `Right<"nullable">` avec une valeur non nulle.

### [isNullableEmpty](/v1/api/either/isNullableEmpty/fr)
Type guard pour les `nullableEmpty`.

### [whenIsNullableEmpty](/v1/api/either/whenIsNullableEmpty/fr)
Callback déclenché uniquement lorsque la valeur est `null`.

### [isNullableFilled](/v1/api/either/isNullableFilled/fr)
Type guard pour les `nullableFilled`.

### [whenIsNullableFilled](/v1/api/either/whenIsNullableFilled/fr)
Callback déclenché lorsque la valeur nullable est présente (`Right`).

## Gestion des optionnels

### [optional](/v1/api/either/optional/fr)
Wrappe une valeur possiblement `undefined` en `Either`, utile pour les champs optionnels.

### [optionalEmpty](/v1/api/either/optionalEmpty/fr)
Construit un `Left<"optional">` contenant `undefined`.

### [optionalFilled](/v1/api/either/optionalFilled/fr)
Construit un `Right<"optional">` avec une valeur définie.

### [isOptionalEmpty](/v1/api/either/isOptionalEmpty/fr)
Type guard pour les `optionalEmpty`.

### [whenIsOptionalEmpty](/v1/api/either/whenIsOptionalEmpty/fr)
Callback déclenché uniquement lorsqu'un optionnel est vide.

### [isOptionalFilled](/v1/api/either/isOptionalFilled/fr)
Type guard pour les `optionalFilled`.

### [whenIsOptionalFilled](/v1/api/either/whenIsOptionalFilled/fr)
Callback déclenché lorsqu'un optionnel contient une valeur.

## Futures et asynchronisme

### [future](/v1/api/either/future/fr)
Convertit une valeur (ou un `Either`) en `Future`, classe dérivée de `Promise` avec support de `Future.all`.

### [futureSuccess](/v1/api/either/futureSuccess/fr)
Construit un `EitherRight<"future">` pour signaler explicitement une résolution réussie.

### [futureError](/v1/api/either/futureError/fr)
Construit un `EitherLeft<"future">` pour représenter une erreur asynchrone standardisée.