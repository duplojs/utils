---
outline: [2, 3]
prev:
  text: "DataParser"
  link: "/v1/api/dataParser/fr"
next:
  text: "Clean"
  link: "/v1/api/clean/fr"
---

# Date

Fonctions pour manipuler des dates et heures via le type propriétaire **`TheDate`** (``type TheDate = `date${number}${"-" | "+"}``). Ce format sérialisable encode un timestamp Unix sécurisé, traverse les protocoles HTTP sans perte et garantit une manipulation immutable.

## Comment faire les imports ?

La bibliothèque expose les namespaces `DDate` et `D` depuis l'entrée principale **ou** en import direct (tree-shaking friendly), ce qui permet de ne charger que ce dont vous avez besoin.

```typescript
import { DDate, D } from "@duplojs/utils";
import * as DDate from "@duplojs/utils/date";
import * as D from "@duplojs/utils/date";
```

## Création

### [create](/v1/api/date/create/fr)
Construit un `TheDate` depuis un `Date`, un timestamp ou un autre `TheDate` et renvoie un `Either` (`MayBe`).

### [createOrThrow](/v1/api/date/createOrThrow/fr)
Version stricte de `create` qui lance `CreateTheDateError` en cas d'entrée invalide.

### [now](/v1/api/date/now/fr)
Retourne le timestamp exact du moment courant sous forme de `TheDate`.

### [today](/v1/api/date/today/fr)
Génère le début de journée (minuit) en `TheDate`.

### [yesterday](/v1/api/date/yesterday/fr)
Retourne le début de la journée précédente.

### [tomorrow](/v1/api/date/tomorrow/fr)
Retourne le début de la journée suivante.

## Conversion & validation

### [toNative](/v1/api/date/toNative/fr)
Convertit un `TheDate` en `Date` JavaScript.

### [toTimestamp](/v1/api/date/toTimestamp/fr)
Expose le timestamp en millisecondes et valide la cohérence de la valeur.

### [toISOString](/v1/api/date/toISOString/fr)
Retourne la représentation ISO 8601 d'un `TheDate`.

### [isSafeTimestamp](/v1/api/date/isSafeTimestamp/fr)
Vérifie qu'un timestamp est compris entre `minTimestamp` et `maxTimestamp`.

### [is](/v1/api/date/is/fr)
Vérifie qu'une chaîne correspond au format `TheDate` (type guard).

## Lecture des composants

### [getYear](/v1/api/date/getYear/fr)
Revoie l'année d'un `TheDate`.

### [getMonth](/v1/api/date/getMonth/fr)
Renvoie le mois (1-12) d'un `TheDate`.

### [getDayOfMonth](/v1/api/date/getDayOfMonth/fr)
Renvoie le jour du mois (1-31) d'un `TheDate`.

### [getDayOfWeek](/v1/api/date/getDayOfWeek/fr)
Renvoie le jour de la semaine (1-7) d'un `TheDate`, où 1 = lundi et 7 = dimanche.

### [getWeekOfYear](/v1/api/date/getWeekOfYear/fr)
Renvoie la semaine de l'année (1-53) d'un `TheDate` selon la norme ISO 8601.

### [getDayOfYear](/v1/api/date/getDayOfYear/fr)
Renvoie le jour de l'année (1-366) d'un `TheDate`.

### [getHour](/v1/api/date/getHour/fr)
Renvoie l'heure (0-23) d'un `TheDate`.

### [getMinute](/v1/api/date/getMinute/fr)
Renvoie les minutes (0-59) d'un `TheDate`.

### [getSecond](/v1/api/date/getSecond/fr)
Renvoie les secondes (0-59) d'un `TheDate`.

### [getMilliseconds](/v1/api/date/getMilliseconds/fr)
Renvoie les millisecondes (0-999) d'un `TheDate`.

### [getFirstDayOfWeek](/v1/api/date/getFirstDayOfWeek/fr)
Renvoie le premier jour de la semaine (lundi) pour un `TheDate`.

### [getLastDayOfWeek](/v1/api/date/getLastDayOfWeek/fr)
Renvoie le dernier jour de la semaine (dimanche) pour un `TheDate`.

### [getFirstDayOfMonth](/v1/api/date/getFirstDayOfMonth/fr)
Renvoie le premier jour du mois pour un `TheDate`.

### [getLastDayOfMonth](/v1/api/date/getLastDayOfMonth/fr)
Renvoie le dernier jour du mois pour un `TheDate`.

## Opérations temporelles

### Ajouts

### [addYears](/v1/api/date/addYears/fr)  
Ajoute un nombre d'années positif à un `TheDate`.

### [addMonths](/v1/api/date/addMonths/fr)  
Ajoute des mois en tenant compte des années bissextiles.

### [addWeeks](/v1/api/date/addWeeks/fr)  
Décale une date par multiples de 7 jours.

### [addDays](/v1/api/date/addDays/fr)  
Ajoute un nombre de jours positif.

### [addHours](/v1/api/date/addHours/fr)  
Ajoute des heures sans convertir en millisecondes manuellement.

### [addMinutes](/v1/api/date/addMinutes/fr)  
Ajoute des minutes.

### [addSeconds](/v1/api/date/addSeconds/fr)  
Ajoute des secondes.

### [addMilliseconds](/v1/api/date/addMilliseconds/fr)  
Ajoute des millisecondes en restant type-safe.

### Soustractions

### [subtractYears](/v1/api/date/subtractYears/fr)  
Soustrait un nombre d'années.

### [subtractMonths](/v1/api/date/subtractMonths/fr)  
Soustrait des mois en conservant la cohérence des jours.

### [subtractWeeks](/v1/api/date/subtractWeeks/fr)  
Soustrait des semaines.

### [subtractDays](/v1/api/date/subtractDays/fr)  
Soustrait des jours.

### [subtractHours](/v1/api/date/subtractHours/fr)  
Soustrait des heures.

### [subtractMinutes](/v1/api/date/subtractMinutes/fr)  
Soustrait des minutes.

### [subtractSeconds](/v1/api/date/subtractSeconds/fr)  
Soustrait des secondes.

### [subtractMilliseconds](/v1/api/date/subtractMilliseconds/fr)  
Soustrait des millisecondes.

### Comparaison

### [greater](/v1/api/date/greater/fr)  
Vérifie si une date est strictement supérieure à une autre.

### [greaterThan](/v1/api/date/greaterThan/fr)  
Compare en incluant l'égalité.

### [less](/v1/api/date/less/fr)  
Vérifie si une date est strictement inférieure.

### [lessThan](/v1/api/date/lessThan/fr)  
Compare en incluant l'égalité pour l'infériorité.

### [between](/v1/api/date/between/fr)  
Contrôle l'appartenance à un intervalle ouvert.

### [betweenThan](/v1/api/date/betweenThan/fr)  
Variante incluant les bornes.

### [sort](/v1/api/date/sort/fr)  
Trie un tableau de dates en ordre croissant ou décroissant.

### [max](/v1/api/date/max/fr)  
Retourne la date la plus récente d'un tuple.

### [min](/v1/api/date/min/fr)  
Retourne la date la plus ancienne d'un tuple.

### Autres utilitaires

### [round](/v1/api/date/round/fr)  
Arrondit une date à l'unité choisie (`day`, `month`, etc.).

### [each](/v1/api/date/each/fr)  
Génère toutes les dates d'un intervalle selon une granularité (`Unit`).

### [closestTo](/v1/api/date/closestTo/fr)  
Trouve la date la plus proche d'une cible dans un itérable.

## Constantes & types

### [constants](/v1/api/date/constants/fr)  
Expose `minTimestamp`, `maxTimestamp` et les durées usuelles (jour, semaine, etc.).

### [types/timezone](/v1/api/date/types/timezone/fr)  
Énumération complète des fuseaux horaires IANA.

### [types/unit](/v1/api/date/types/unit/fr)
Liste les unités disponibles pour `round`, `each`, etc.

### [types/time](/v1/api/date/types/time/fr)  
Décrit les composantes temporelles (`Hour`, `Minute`, `Second`, ...).

### [types/isLeapYear](/v1/api/date/types/isLeapYear/fr)
Fournit le type utilitaire pour déterminer si une année est bissextile.
