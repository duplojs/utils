---
outline: [2, 3]
description: "Monade Either pour la gestion d'erreurs fonctionnelle et type-safe. Permet de représenter une valeur qui peut être soit un succès (Right), soit une erreur (Left), évitant ainsi l'utilisation d'exceptions."
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

## Guide

Une explication complète (concept, info obligatoire, pattern matching, pipelines et variantes) est disponible ici :

- [Guide Either](/fr/v1/guide/either)

## Constructeurs `Right`

### [right](/fr/v1/api/either/right)
Construit un `Right` typé avec une information métier obligatoire (payload optionnel).

### [success](/fr/v1/api/either/success)
Raccourci pour retourner un succès `right("success", value)` de manière expressive.

### [ok](/fr/v1/api/either/ok)
Retourne un `Right` sans valeur (`void`) taggé avec l'information littérale `"ok"`.

## Constructeurs `Left`

### [left](/fr/v1/api/either/left)
Construit un `Left` en fournissant l'information métier et éventuellement une valeur.

### [error](/fr/v1/api/either/error)
Raccourci pour signaler une erreur typée `left("error", value)`.

### [fail](/fr/v1/api/either/fail)
Retourne un `Left` sans payload taggé `"fail"` pour les cas d'échec génériques.

## Contrôles `Right`

### [isRight](/fr/v1/api/either/isRight)
Type guard qui vérifie si une valeur est un `Right`.

### [whenIsRight](/fr/v1/api/either/whenIsRight)
Exécute une fonction uniquement quand l'entrée est `Right`, sinon relaie la valeur originale.

## Contrôles `Left`

### [isLeft](/fr/v1/api/either/isLeft)
Type guard qui détecte un `Left`.

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

## Autre

### [hasInformation](/fr/v1/api/either/hasInformation)
Type guard basé sur l'information littérale pour cibler précisément un cas métier.

### [whenHasInformation](/fr/v1/api/either/whenHasInformation)
Pattern matching qui déclenche une fonction quand l'information (ou une liste d'infos) correspond.

### [safeCallback](/fr/v1/api/either/safeCallback)
Exécute un callback en capturant les exceptions dans un `Left<"callback">`.

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
Construit un `Right<"future">` pour signaler explicitement une résolution réussie.

### [futureError](/fr/v1/api/either/futureError)
Construit un `Left<"future">` pour représenter une erreur asynchrone standardisée.
