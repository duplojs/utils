---
outline: [2, 3]
description: "Le pattern matching permet de déstructurer n'importe quelle donnée (union, tuple, objet, littéral, prédicat) et d'orchestrer un flux de contrôle typé grâce à match, when, whenNot, otherwise et exhaustive. Chaque branche renvoie un PatternResult, ce qui évite les switch fragiles, simplifie le chaînage avec pipe et garantit l'exhaustivité au moment de la compilation."
prev:
  text: 'Object'
  link: '/fr/v1/api/object/'
next:
  text: 'Référence API'
  link: '/fr/v1/api/'
---

# Pattern

Le pattern matching permet de déstructurer n'importe quelle donnée (union, tuple, objet, littéral, prédicat) et d'orchestrer un flux de contrôle typé grâce à `match`, `when`, `whenNot`, `otherwise` et `exhaustive`. Chaque branche renvoie un `PatternResult`, ce qui évite les `switch` fragiles, simplifie le chaînage avec `pipe` et garantit l'exhaustivité au moment de la compilation.

## Comment faire les imports ?

La bibliothèque expose les namespaces `DPattern` et `P` depuis l'entrée principale **ou** en import direct (tree-shaking friendly).

```typescript
import { DPattern, P } from "@duplojs/utils";
import * as DPattern from "@duplojs/utils/pattern";
import * as P from "@duplojs/utils/pattern";
```

## Exécution du matching

### [match](/fr/v1/api/pattern/match)
Associe un motif et une fonction de transformation. Retourne un `PatternResult` quand l'entrée correspond exactement au motif (primitive, tuple, objet, union...).

### [matchWithString](/fr/v1/api/pattern/matchWithString)
Distribue exhaustivement une union de chaînes littérales vers des handlers typés.

### [matchWithStringOtherwise](/fr/v1/api/pattern/matchWithStringOtherwise)
Traite certaines chaînes littérales et transmet les cas restants à un fallback typé.

### [matchWithNumber](/fr/v1/api/pattern/matchWithNumber)
Distribue exhaustivement une union de nombres littéraux vers des handlers typés.

### [matchWithNumberOtherwise](/fr/v1/api/pattern/matchWithNumberOtherwise)
Traite certains nombres littéraux et transmet les cas restants à un fallback typé.

### [when](/fr/v1/api/pattern/when)
Ajoute une garde (type predicate ou boolean) dans un pipeline. Si la condition est vraie, la fonction associée est exécutée et son résultat est encapsulé.

### [whenNot](/fr/v1/api/pattern/whenNot)
Ajoute une garde (type predicate ou boolean) dans un pipeline. Si la condition est fausse, la fonction associée est exécutée et son résultat est encapsulé.

### [otherwise](/fr/v1/api/pattern/otherwise)
Définit le fallback appelé lorsque plus aucun motif n'a correspondu. Très utile pour fermer un `pipe` après plusieurs `when`.

### [exhaustive](/fr/v1/api/pattern/exhaustive)
Dépaquette un `PatternResult` pour récupérer la valeur finale et force TypeScript à vérifier que toutes les branches ont été traitées.

## Construction et vérification des motifs

### [isMatch](/fr/v1/api/pattern/isMatch)
Teste impérativement si une valeur correspond à un motif et renvoie un type guard (`value is ...`). Pratique pour les conditions simples sans déclencher de pipeline.

### [union](/fr/v1/api/pattern/union)
Compose plusieurs motifs dans un seul helper réutilisable (`ToolPattern`). Garantit que l'entrée correspond à l'un des motifs passés (en profondeur sur objets/tableaux).
