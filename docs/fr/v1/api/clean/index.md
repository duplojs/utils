---
outline: [2, 3]
prev:
  text: "Array"
  link: "/fr/v1/api/array/"
next:
  text: "DataParser"
  link: "/fr/v1/api/dataParser/"
---

# Clean

Briques essentielles de la Clean Architecture : création d'entités métier, types métier (`NewType`), cas d'usage, repositories, et plus encore. Facilite la structuration de votre code selon les principes de la Clean Architecture pour une meilleure maintenabilité et testabilité.

## Comment faire les imports ?

La bibliothèque expose les namespaces `DClean` et `C` depuis l'entrée principale **ou** en import direct (tree-shaking friendly), ce qui permet de ne charger que ce dont vous avez besoin.

```typescript
import { DClean, C } from "@duplojs/utils";
import * as DClean from "@duplojs/utils/clean";
import * as C from "@duplojs/utils/clean";
```
## [Primitives](/fr/v1/api/clean/primitives/)
Les primitives permettent de manipuler dans du métier des types de base (`String`, `Number`, `Date`, …).

## [Contraintes](/fr/v1/api/clean/constraints)
Les contraintes permettent d'ajouter des règles supplémentaires sur les primitives.

## [NewType](/fr/v1/api/clean/newType)
Crée un `NewType` (brand) adossé à un `DataParser`, avec contraintes optionnelles.

## [Entités](/fr/v1/api/clean/entity)
Représente les structures de données du métier.

## [unwrapEntity](/fr/v1/api/clean/unwrapEntity)
Transforme une entité en objet simple, avec ses métadonnées.

## [Flag](/fr/v1/api/clean/flag)
Ajoute dynamiquement une information (flag) sur une entité, avec typage strict.

## [Repository](/fr/v1/api/clean/repository)
Déclare un repository (contrat) et type-check l'implémentation.

## [UseCase](/fr/v1/api/clean/useCase)
Déclare un use case avec des dépendances (repositories ou autres use cases).

## Opérations sur primitives

### [equal](/fr/v1/api/clean/primitives/operators/equal)
Compare deux primitives wrappées (ou une primitive et une valeur brute) avec un type guard.

### [add](/fr/v1/api/clean/primitives/operators/add)
Additionne deux `Number` (supporte la version currifiée).

### [subtract](/fr/v1/api/clean/primitives/operators/subtract)
Soustrait un nombre à un `Number` (supporte la version currifiée).

### [multiply](/fr/v1/api/clean/primitives/operators/multiply)
Multiplie un `Number` (supporte la version currifiée).

### [divide](/fr/v1/api/clean/primitives/operators/divide)
Divise un `Number` (supporte la version currifiée).

### [min](/fr/v1/api/clean/primitives/operators/min)
Retourne le minimum d'un tuple de `Number`.

### [max](/fr/v1/api/clean/primitives/operators/max)
Retourne le maximum d'un tuple de `Number`.

### [greaterThan](/fr/v1/api/clean/primitives/operators/greaterThan)
Teste si un `Number` est strictement supérieur à un seuil.

### [lessThan](/fr/v1/api/clean/primitives/operators/lessThan)
Teste si un `Number` est strictement inférieur à un seuil.

### [concat](/fr/v1/api/clean/primitives/operators/concat)
Concatène des `String` (supporte la version currifiée).

### [length](/fr/v1/api/clean/primitives/operators/length)
Retourne la longueur d'un `String` sous forme de `Number`.

### [lengthEqual](/fr/v1/api/clean/primitives/operators/lengthEqual)
Teste si la longueur d'un `String` est égale à une valeur.

### [lengthGreaterThan](/fr/v1/api/clean/primitives/operators/lengthGreaterThan)
Teste si la longueur d'un `String` est supérieure à une valeur.

### [lengthLessThan](/fr/v1/api/clean/primitives/operators/lengthLessThan)
Teste si la longueur d'un `String` est inférieure à une valeur.

### [dateGreaterThan](/fr/v1/api/clean/primitives/operators/dateGreaterThan)
Teste si une `Date` est postérieure à un seuil.

### [dateLessThan](/fr/v1/api/clean/primitives/operators/dateLessThan)
Teste si une `Date` est antérieure à un seuil.

### [dateMin](/fr/v1/api/clean/primitives/operators/dateMin)
Retourne la plus petite date d'une liste.

### [dateMax](/fr/v1/api/clean/primitives/operators/dateMax)
Retourne la plus grande date d'une liste.

### [sort](/fr/v1/api/clean/primitives/operators/sort)
Trie un tableau de primitives (`String`, `Number` ou `Date`) en `"ASC"` / `"DSC"`.
