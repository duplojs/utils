---
outline: [2, 3]
prev:
  text: "DataParser"
  link: "/fr/v1/api/dataParser/"
next:
  text: "Either"
  link: "/fr/v1/api/either/"
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

### [create](/fr/v1/api/date/create)
Construit un `TheDate` depuis un `Date`, un timestamp ou un autre `TheDate` et renvoie un `Either` (`MayBe`).

### [createOrThrow](/fr/v1/api/date/createOrThrow)
Version stricte de `create` qui lance `CreateTheDateError` en cas d'entrée invalide.

### [createTime](/fr/v1/api/date/createTime)
Construit un `TheTime` à partir de millisecondes ou d'un objet de temps structuré.

### [now](/fr/v1/api/date/now)
Retourne le timestamp exact du moment courant sous forme de `TheDate`.

### [today](/fr/v1/api/date/today)
Génère le début de journée (minuit) en `TheDate`.

### [yesterday](/fr/v1/api/date/yesterday)
Retourne le début de la journée précédente.

### [tomorrow](/fr/v1/api/date/tomorrow)
Retourne le début de la journée suivante.

## Conversion & validation

### [toNative](/fr/v1/api/date/toNative)
Convertit un `TheDate` en `Date` JavaScript.

### [toTimestamp](/fr/v1/api/date/toTimestamp)
Expose le timestamp en millisecondes et valide la cohérence de la valeur.

### [getTimezoneOffset](/fr/v1/api/date/getTimezoneOffset)
Retourne le décalage en millisecondes pour un `TheDate`.

### [applyTimezone](/fr/v1/api/date/applyTimezone)
Applique un décalage de fuseau horaire à un `TheDate`.

### [toISOString](/fr/v1/api/date/toISOString)
Retourne la représentation ISO 8601 d'un `TheDate`.

### [format](/fr/v1/api/date/format)
Affiche un `TheDate` avec un format personnalisé et un fuseau horaire.

### [isSafeTimestamp](/fr/v1/api/date/isSafeTimestamp)
Vérifie qu'un timestamp est compris entre `minTimestamp` et `maxTimestamp`.

### [is](/fr/v1/api/date/is)
Vérifie qu'une chaîne correspond au format `TheDate` (type guard).

### [isTime](/fr/v1/api/date/isTime)
Vérifie qu'une chaîne correspond au format `TheTime` (type guard).

## Lecture des composants

### [getYear](/fr/v1/api/date/getYear)
Revoie l'année d'un `TheDate`.

### [getMonth](/fr/v1/api/date/getMonth)
Renvoie le mois (1-12) d'un `TheDate`.

### [getDayOfMonth](/fr/v1/api/date/getDayOfMonth)
Renvoie le jour du mois (1-31) d'un `TheDate`.

### [getDayOfWeek](/fr/v1/api/date/getDayOfWeek)
Renvoie le jour de la semaine (1-7) d'un `TheDate`, où 1 = lundi et 7 = dimanche.

### [getWeekOfYear](/fr/v1/api/date/getWeekOfYear)
Renvoie la semaine de l'année (1-53) d'un `TheDate` selon la norme ISO 8601.

### [getDayOfYear](/fr/v1/api/date/getDayOfYear)
Renvoie le jour de l'année (1-366) d'un `TheDate`.

### [getHour](/fr/v1/api/date/getHour)
Renvoie l'heure (0-23) d'un `TheDate`.

### [getMinute](/fr/v1/api/date/getMinute)
Renvoie les minutes (0-59) d'un `TheDate`.

### [getSecond](/fr/v1/api/date/getSecond)
Renvoie les secondes (0-59) d'un `TheDate`.

### [getMilliseconds](/fr/v1/api/date/getMilliseconds)
Renvoie les millisecondes (0-999) d'un `TheDate`.

### [getFirstDayOfWeek](/fr/v1/api/date/getFirstDayOfWeek)
Renvoie le premier jour de la semaine (lundi) pour un `TheDate`.

### [getLastDayOfWeek](/fr/v1/api/date/getLastDayOfWeek)
Renvoie le dernier jour de la semaine (dimanche) pour un `TheDate`.

### [getFirstDayOfMonth](/fr/v1/api/date/getFirstDayOfMonth)
Renvoie le premier jour du mois pour un `TheDate`.

### [getLastDayOfMonth](/fr/v1/api/date/getLastDayOfMonth)
Renvoie le dernier jour du mois pour un `TheDate`.

## Opérations temporelles

### Ajouts

### [addYears](/fr/v1/api/date/addYears)  
Ajoute un nombre d'années positif à un `TheDate`.

### [addMonths](/fr/v1/api/date/addMonths)  
Ajoute des mois en tenant compte des années bissextiles.

### [addWeeks](/fr/v1/api/date/addWeeks)  
Décale une date par multiples de 7 jours.

### [addDays](/fr/v1/api/date/addDays)  
Ajoute un nombre de jours positif.

### [addHours](/fr/v1/api/date/addHours)  
Ajoute des heures sans convertir en millisecondes manuellement.

### [addMinutes](/fr/v1/api/date/addMinutes)  
Ajoute des minutes.

### [addSeconds](/fr/v1/api/date/addSeconds)  
Ajoute des secondes.

### [addMilliseconds](/fr/v1/api/date/addMilliseconds)  
Ajoute des millisecondes en restant type-safe.

### [addTime](/fr/v1/api/date/addTime)  
Ajoute une durée `TheTime` à un `TheDate` ou un `TheTime`.

### Soustractions

### [subtractYears](/fr/v1/api/date/subtractYears)  
Soustrait un nombre d'années.

### [subtractMonths](/fr/v1/api/date/subtractMonths)  
Soustrait des mois en conservant la cohérence des jours.

### [subtractWeeks](/fr/v1/api/date/subtractWeeks)  
Soustrait des semaines.

### [subtractDays](/fr/v1/api/date/subtractDays)  
Soustrait des jours.

### [subtractHours](/fr/v1/api/date/subtractHours)  
Soustrait des heures.

### [subtractMinutes](/fr/v1/api/date/subtractMinutes)  
Soustrait des minutes.

### [subtractSeconds](/fr/v1/api/date/subtractSeconds)  
Soustrait des secondes.

### [subtractMilliseconds](/fr/v1/api/date/subtractMilliseconds)  
Soustrait des millisecondes.

### [subtractTime](/fr/v1/api/date/subtractTime)  
Soustrait une durée `TheTime` à un `TheDate` ou un `TheTime`.

### Comparaison

### [greater](/fr/v1/api/date/greater)  
Vérifie si une date est strictement supérieure à une autre.

### [greaterThan](/fr/v1/api/date/greaterThan)  
Compare en incluant l'égalité.

### [less](/fr/v1/api/date/less)  
Vérifie si une date est strictement inférieure.

### [lessThan](/fr/v1/api/date/lessThan)  
Compare en incluant l'égalité pour l'infériorité.

### [between](/fr/v1/api/date/between)  
Contrôle l'appartenance à un intervalle ouvert.

### [betweenThan](/fr/v1/api/date/betweenThan)  
Variante incluant les bornes.

### Comparaison (`TheTime`)

### [greaterTime](/fr/v1/api/date/greaterTime)  
Vérifie si une durée est strictement supérieure à une autre.

### [greaterThanTime](/fr/v1/api/date/greaterThanTime)  
Compare en incluant l'égalité pour `TheTime`.

### [lessTime](/fr/v1/api/date/lessTime)  
Vérifie si une durée est strictement inférieure.

### [lessThanTime](/fr/v1/api/date/lessThanTime)  
Compare en incluant l'égalité pour l'infériorité.

### [betweenTime](/fr/v1/api/date/betweenTime)  
Contrôle l'appartenance d'un `TheTime` à un intervalle ouvert.

### [betweenThanTime](/fr/v1/api/date/betweenThanTime)  
Variante inclusive pour `TheTime`.

### [sort](/fr/v1/api/date/sort)  
Trie un tableau de dates en ordre croissant ou décroissant.

### [sortTimes](/fr/v1/api/date/sortTimes)  
Trie un tableau de durées en ordre croissant ou décroissant.

### [max](/fr/v1/api/date/max)  
Retourne la date la plus récente d'un tuple.

### [min](/fr/v1/api/date/min)  
Retourne la date la plus ancienne d'un tuple.

### Autres utilitaires

### [round](/fr/v1/api/date/round)  
Arrondit une date à l'unité choisie (`day`, `month`, etc.).

### [each](/fr/v1/api/date/each)  
Génère toutes les dates d'un intervalle selon une granularité (`Unit`).

### [closestTo](/fr/v1/api/date/closestTo)  
Trouve la date la plus proche d'une cible dans un itérable.

## Constantes & types

### [constants](/fr/v1/api/date/constants)  
Expose `minTimestamp`, `maxTimestamp` et les durées usuelles (jour, semaine, etc.).

### [types/timezone](/fr/v1/api/date/types/timezone)  
Énumération complète des fuseaux horaires IANA.

### [types/unit](/fr/v1/api/date/types/unit)
Liste les unités disponibles pour `round`, `each`, etc.

### [types/time](/fr/v1/api/date/types/time)  
Décrit les composantes temporelles (`Hour`, `Minute`, `Second`, ...).

### [types/isLeapYear](/fr/v1/api/date/types/isLeapYear)
Fournit le type utilitaire pour déterminer si une année est bissextile.
