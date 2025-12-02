---
outline: [2, 3]
prev:
  text: "Either"
  link: "/v1/api/either/fr"
next:
  text: "Date"
  link: "/v1/api/date/fr"
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

### [string](/v1/api/data-parser/string/fr)
Valide les chaînes : checkers `min`, `max`, `regex`, `email`, `url`, support de la coercition (`"42"` → `"42"` normalisé).

### [number](/v1/api/data-parser/number/fr)
Valide les nombres avec contraintes `min`, `max`, `int` et support de la coercition (`Number(value)`).

### [boolean](/v1/api/data-parser/boolean/fr)
Valide les booléens ou les convertit depuis des chaînes courantes (`"true"`, `"1"`, etc.).

### [bigint](/v1/api/data-parser/bigint/fr)
Valide les `bigint` avec checkers `min`/`max` dédiés, utile pour les identifiants haute précision.

### [date](/v1/api/data-parser/date/fr)
Valide un `TheDate`, un `Date` natif ou un timestamp avant conversion vers `TheDate`.

### [literal](/v1/api/data-parser/literal/fr)
Impose une valeur exacte (`"admin"`, `42`, `true`, etc.) en sortie.

### [templateLiteral](/v1/api/data-parser/templateLiteral/fr)
Construit un parser à partir d'un pattern `TemplateLiteral` (ex: `order-${number}`).

### [nil](/v1/api/data-parser/nil/fr)
N'accepte que `null` et permet d'ajouter des checkers spécifiques.

### [empty](/v1/api/data-parser/empty/fr)
Valide une absence de valeur (`undefined`) dans un schéma.

### [unknown](/v1/api/data-parser/unknown/fr)
Accepte n'importe quelle valeur tout en conservant la possibilité d'ajouter des checkers/refine.

## Structures composées

### [object](/v1/api/data-parser/object/fr)
Déclare la structure d'un objet, gère les clés optionnelles, l'inférence statique et les erreurs contextualisées (chemin `user.email`).

### [array](/v1/api/data-parser/array/fr)
Valide des tableaux homogènes, avec checkers `min`, `max`, `nonEmpty`, etc.

### [tuple](/v1/api/data-parser/tuple/fr)
Définit une séquence ordonnée de parsers avec tailles fixes ou variables.

### [record](/v1/api/data-parser/record/fr)
Décrit une map clé/valeur avec validation séparée sur les clés et sur les valeurs.

### [union](/v1/api/data-parser/union/fr)
Essaie plusieurs parsers dans l'ordre, retourne le premier qui réussit et reporte les erreurs détaillées sinon.

## Variants & optionnalité

### [optional](/v1/api/data-parser/optional/fr)
Autorise `undefined` tout en conservant la validation de la valeur présente.

### [nullable](/v1/api/data-parser/nullable/fr)
Autorise `null` avec support natif des checkers additionnels.

### [lazy](/v1/api/data-parser/lazy/fr)
Déclare des schémas récursifs (ex: arbres, catégories imbriquées) grâce à une fonction différée.

## Pipelines & logique métier

### [pipe](/v1/api/data-parser/pipe/fr)
Compose plusieurs parsers pour enchaîner coercition, validation, transformation et refinements.

### [transform](/v1/api/data-parser/transform/fr)
Transforme le résultat d'un parser via une fonction contrôlée (ex: `string` → `URL`).

### [refine](/v1/api/data-parser/refine/fr)
Ajoute des règles personnalisées (async/sync) avec messages et méta-données spécifiques.

### [recover](/v1/api/data-parser/recover/fr)
Intercepte les erreurs pour retourner une valeur alternative (fallback) ou lancer une logique métier.

## Coercition

### [coerce.*](/v1/api/data-parser/coerce/fr)
Espace réservé aux variantes coercitives (`coerce.string`, `coerce.number`, `coerce.boolean`, `coerce.date`, etc.) lorsque vous devez normaliser les données avant validation stricte.

## Override & extensions

Pour modifier le comportement par défaut du `DataParser`, ajouter vos propres helpers ou construire une librairie/extension au-dessus, consultez le guide [Comment override les méthodes du DataParser ?](/v1/api/data-parser/howToOverride/fr).
