---
outline: [2, 3]
description: "Fonctions pour construire, composer et exécuter des validateurs immuables. DataParser. ou DP. décrit la forme attendue des données, renvoie un Either (parse / asyncParse) et produit des erreurs structurées prêtes à être sérialisées."
prev:
  text: "Clean"
  link: "/fr/v1/api/clean/"
next:
  text: "Date"
  link: "/fr/v1/api/date/"
---

# Data Parser

Fonctions pour construire, composer et exécuter des validateurs immuables. `DataParser.*` ou `DP.*` décrit la forme attendue des données, renvoie un `Either` (`parse` / `asyncParse`) et produit des erreurs structurées prêtes à être sérialisées.

## Comment faire les imports ?

La bibliothèque expose les namespaces `DDataParser`, `DDataParserCoerce` et `DDataParserExtended` depuis l'entrée principale **ou** en import direct (tree-shaking friendly), ce qui permet de ne charger que ce dont vous avez besoin.

```typescript
// DataParser 
import { DDataParser, DP } from "@duplojs/utils";
import * as DDataParser from "@duplojs/utils/dataParser";
import * as DP from "@duplojs/utils/dataParser";

// DataParserCoerce
import { DDataParserCoerce, DPC } from "@duplojs/utils";
import * as DDataParserCoerce from "@duplojs/utils/dataParserCoerce";
import * as DPC from "@duplojs/utils/dataParserCoerce";

// DataParserExtended
import { DDataParserExtended, DPE } from "@duplojs/utils";
import * as DDataParserExtended from "@duplojs/utils/dataParserExtended";
import * as DPE from "@duplojs/utils/dataParserExtended";
```


## Parsers primitifs

### [string](/fr/v1/api/dataParser/string)
Valide les chaînes : checkers `min`, `max`, `regex`, `email`, `url`, support de la coercition (`"42"` → `"42"` normalisé).

### [number](/fr/v1/api/dataParser/number)
Valide les nombres avec contraintes `min`, `max`, `int` et support de la coercition (`Number(value)`).

### [boolean](/fr/v1/api/dataParser/boolean)
Valide les booléens ou les convertit depuis des chaînes courantes (`"true"`, `"1"`, etc.).

### [bigint](/fr/v1/api/dataParser/bigint)
Valide les `bigint` avec checkers `min`/`max` dédiés, utile pour les identifiants haute précision.

### [date](/fr/v1/api/dataParser/date)
Valide `TheDate`, `SerializedTheDate` et `Date` natif (avec coercition optionnelle des timestamps/chaînes) avant conversion vers `TheDate`.

### [time](/fr/v1/api/dataParser/time)
Valide `TheTime`, `SerializedTheTime` et valeurs numériques sûres, avec checkers `min`/`max` et coercition optionnelle.

### [literal](/fr/v1/api/dataParser/literal)
Impose une valeur exacte (`"admin"`, `42`, `true`, etc.) en sortie.

### [templateLiteral](/fr/v1/api/dataParser/templateLiteral)
Construit un parser à partir d'un pattern `TemplateLiteral` (ex: `order-${number}`).

### [nil](/fr/v1/api/dataParser/nil)
N'accepte que `null` et permet d'ajouter des checkers spécifiques.

### [empty](/fr/v1/api/dataParser/empty)
Valide une absence de valeur (`undefined`) dans un schéma.

### [unknown](/fr/v1/api/dataParser/unknown)
Accepte n'importe quelle valeur tout en conservant la possibilité d'ajouter des checkers/refine.

## Structures composées

### [object](/fr/v1/api/dataParser/object)
Déclare la structure d'un objet, gère les clés optionnelles, l'inférence statique et les erreurs contextualisées (chemin `user.email`).

### [array](/fr/v1/api/dataParser/array)
Valide des tableaux homogènes, avec checkers `min`, `max`, `nonEmpty`, etc.

### [tuple](/fr/v1/api/dataParser/tuple)
Définit une séquence ordonnée de parsers avec tailles fixes ou variables.

### [record](/fr/v1/api/dataParser/record)
Décrit une map clé/valeur avec validation séparée sur les clés et sur les valeurs.

### [union](/fr/v1/api/dataParser/union)
Essaie plusieurs parsers dans l'ordre, retourne le premier qui réussit et reporte les erreurs détaillées sinon.

## Variants & optionnalité

### [optional](/fr/v1/api/dataParser/optional)
Autorise `undefined` tout en conservant la validation de la valeur présente.

### [nullable](/fr/v1/api/dataParser/nullable)
Autorise `null` avec support natif des checkers additionnels.

### [lazy](/fr/v1/api/dataParser/lazy)
Déclare des schémas récursifs (ex: arbres, catégories imbriquées) grâce à une fonction différée.

## Pipelines & logique métier

### [pipe](/fr/v1/api/dataParser/pipe)
Compose plusieurs parsers pour enchaîner coercition, validation, transformation et refinements.

### [transform](/fr/v1/api/dataParser/transform)
Transforme le résultat d'un parser via une fonction contrôlée (ex: `string` → `URL`).

### [refine](/fr/v1/api/dataParser/refine)
Ajoute des règles personnalisées (async/sync) avec messages et méta-données spécifiques.

### [recover](/fr/v1/api/dataParser/recover)
Intercepte les erreurs pour retourner une valeur alternative (fallback) ou lancer une logique métier.

## Helpers d’exécution

### [isAsynchronous](/fr/v1/api/dataParser/isAsynchronous)
Indique si un parser (ou ses parsers internes) nécessite une exécution async.

## Coercition

### [coerce.*](/fr/v1/api/dataParser/coerce)
Espace réservé aux variantes coercitives (`coerce.string`, `coerce.number`, `coerce.boolean`, `coerce.date`, etc.) lorsque vous devez normaliser les données avant validation stricte.

## Override & extensions

Pour modifier le comportement par défaut du `DataParser`, ajouter vos propres helpers ou construire une librairie/extension au-dessus, consultez le guide [Comment override les méthodes du DataParser ?](/fr/v1/api/dataParser/howToOverride).
