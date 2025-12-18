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

## Types métiers (NewType)

### [createNewType](/v1/api/clean/createNewType/fr)
Crée un `NewType` (brand) adossé à un `DataParser`, avec contraintes optionnelles.

## Entités

### [createEntity](/v1/api/clean/createEntity/fr)
Déclare une entité métier typée et génère automatiquement un parser (`map`) depuis une définition de propriétés.

## Contraintes (Constraint)

### [createConstraint](/v1/api/clean/createConstraint/fr)
Crée une contrainte réutilisable basée sur un primitive handler (`String`, `Number`, …) et un ou plusieurs checkers.

### [Contraintes par défauts](/v1/api/clean/constraints/fr)
Liste des contraintes prêtes à l'emploi fournies par la bibliothèque (`Email`, `Url`, `Int`, `Positive`, `Negative`).

## Repositories & Use cases

### [createRepository](/v1/api/clean/createRepository/fr)
Déclare un repository (contrat) et type-check l'implémentation.

### [createUseCase](/v1/api/clean/createUseCase/fr)
Déclare un use case avec des dépendances (repositories ou autres use cases).

### [useCaseInstances](/v1/api/clean/useCaseInstances/fr)
Instancie plusieurs use cases d'un coup à partir de toutes leur dépendances

## Flags

### [createFlag](/v1/api/clean/createFlag/fr)
Ajoute dynamiquement une information (flag) sur une entité, avec typage strict.

## Primitives

### [Primitives par défauts](/v1/api/clean/primitives/fr)
Les primitives wrappées permettent de bénéficier de la validation et du typage fort tout en manipulant des types primitifs courants (`string`, `number`, `boolean`, `Date`, `bigint`).

## Opérations sur primitives

### [equal](/v1/api/clean/equal/fr)
Compare deux primitives wrappées (ou une primitive et une valeur brute) avec un type guard.

### [add](/v1/api/clean/add/fr)
Additionne deux `Number` (supporte la version currifiée).

### [subtract](/v1/api/clean/subtract/fr)
Soustrait un nombre à un `Number` (supporte la version currifiée).

### [multiply](/v1/api/clean/multiply/fr)
Multiplie un `Number` (supporte la version currifiée).

### [divide](/v1/api/clean/divide/fr)
Divise un `Number` (supporte la version currifiée).

### [min](/v1/api/clean/min/fr)
Retourne le minimum d'un tuple de `Number`.

### [max](/v1/api/clean/max/fr)
Retourne le maximum d'un tuple de `Number`.

### [greaterThan](/v1/api/clean/greaterThan/fr)
Teste si un `Number` est strictement supérieur à un seuil.

### [lessThan](/v1/api/clean/lessThan/fr)
Teste si un `Number` est strictement inférieur à un seuil.

### [concat](/v1/api/clean/concat/fr)
Concatène des `String` (supporte la version currifiée).

### [length](/v1/api/clean/length/fr)
Retourne la longueur d'un `String` sous forme de `Number`.

### [lengthEqual](/v1/api/clean/lengthEqual/fr)
Teste si la longueur d'un `String` est égale à une valeur.

### [lengthGreaterThan](/v1/api/clean/lengthGreaterThan/fr)
Teste si la longueur d'un `String` est supérieure à une valeur.

### [lengthLessThan](/v1/api/clean/lengthLessThan/fr)
Teste si la longueur d'un `String` est inférieure à une valeur.

### [dateGreaterThan](/v1/api/clean/dateGreaterThan/fr)
Teste si une `Date` est postérieure à un seuil.

### [dateLessThan](/v1/api/clean/dateLessThan/fr)
Teste si une `Date` est antérieure à un seuil.

### [dateMin](/v1/api/clean/dateMin/fr)
Retourne la plus petite date d'une liste.

### [dateMax](/v1/api/clean/dateMax/fr)
Retourne la plus grande date d'une liste.

### [sort](/v1/api/clean/sort/fr)
Trie un tableau de primitives (`String`, `Number` ou `Date`) en `"ASC"` / `"DSC"`.
