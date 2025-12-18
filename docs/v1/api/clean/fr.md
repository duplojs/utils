---
outline: [2, 3]
prev:
  text: "Date"
  link: "/v1/api/date/fr"
next:
  text: "Référence API"
  link: "/v1/api/fr"
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
## [Primitives](/v1/api/clean/primitives/fr)
Les primitives permettent de manipuler dans du métier des types de base (`String`, `Number`, `Date`, …).

## [Contraintes](/v1/api/clean/constraints/fr)
Les contraintes permettent d'ajouter des règles supplémentaires sur les primitives.

## [NewType](/v1/api/clean/newType/fr)
Crée un `NewType` (brand) adossé à un `DataParser`, avec contraintes optionnelles.

## [Entités](/v1/api/clean/entity/fr)
Représente les structures de données du métier.

## [Flag](/v1/api/clean/flag/fr)
Ajoute dynamiquement une information (flag) sur une entité, avec typage strict.

## [Repository](/v1/api/clean/repository/fr)
Déclare un repository (contrat) et type-check l'implémentation.

## [UseCase](/v1/api/clean/useCase/fr)
Déclare un use case avec des dépendances (repositories ou autres use cases).

## Opérations sur primitives

### [equal](/v1/api/clean/primitives/equal/fr)
Compare deux primitives wrappées (ou une primitive et une valeur brute) avec un type guard.

### [add](/v1/api/clean/primitives/add/fr)
Additionne deux `Number` (supporte la version currifiée).

### [subtract](/v1/api/clean/primitives/subtract/fr)
Soustrait un nombre à un `Number` (supporte la version currifiée).

### [multiply](/v1/api/clean/primitives/multiply/fr)
Multiplie un `Number` (supporte la version currifiée).

### [divide](/v1/api/clean/primitives/divide/fr)
Divise un `Number` (supporte la version currifiée).

### [min](/v1/api/clean/primitives/min/fr)
Retourne le minimum d'un tuple de `Number`.

### [max](/v1/api/clean/primitives/max/fr)
Retourne le maximum d'un tuple de `Number`.

### [greaterThan](/v1/api/clean/primitives/greaterThan/fr)
Teste si un `Number` est strictement supérieur à un seuil.

### [lessThan](/v1/api/clean/primitives/lessThan/fr)
Teste si un `Number` est strictement inférieur à un seuil.

### [concat](/v1/api/clean/primitives/concat/fr)
Concatène des `String` (supporte la version currifiée).

### [length](/v1/api/clean/primitives/length/fr)
Retourne la longueur d'un `String` sous forme de `Number`.

### [lengthEqual](/v1/api/clean/primitives/lengthEqual/fr)
Teste si la longueur d'un `String` est égale à une valeur.

### [lengthGreaterThan](/v1/api/clean/primitives/lengthGreaterThan/fr)
Teste si la longueur d'un `String` est supérieure à une valeur.

### [lengthLessThan](/v1/api/clean/primitives/lengthLessThan/fr)
Teste si la longueur d'un `String` est inférieure à une valeur.

### [dateGreaterThan](/v1/api/clean/primitives/dateGreaterThan/fr)
Teste si une `Date` est postérieure à un seuil.

### [dateLessThan](/v1/api/clean/primitives/dateLessThan/fr)
Teste si une `Date` est antérieure à un seuil.

### [dateMin](/v1/api/clean/primitives/dateMin/fr)
Retourne la plus petite date d'une liste.

### [dateMax](/v1/api/clean/primitives/dateMax/fr)
Retourne la plus grande date d'une liste.

### [sort](/v1/api/clean/primitives/sort/fr)
Trie un tableau de primitives (`String`, `Number` ou `Date`) en `"ASC"` / `"DSC"`.