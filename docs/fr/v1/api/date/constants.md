---
outline: [2, 3]
prev:
  text: "closestTo"
  link: "/fr/v1/api/date/closestTo"
next:
  text: "types/timezone"
  link: "/fr/v1/api/date/types/timezone"
---

# constants

Expose les constantes bas niveau utilisées par les helpers date (durées usuelles, bornes de timestamp, expression régulière `TheDate`).

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/constants/tryout.doc.ts"
  majorVersion="v1"
  height="360px"
/>

## Contenu

- `minTimestamp` / `maxTimestamp`
- `minTimeValue` / `maxTimeValue`
- `millisecondsInOneDay`, `millisecondInOneWeek`, `millisecondInOneHour`, etc.
- `secondsInOneMinute`, `minutesInOneHour`, `hoursInOneDay`, `daysInOneWeek`, `monthsInOneYear`.
- `theDateRegex` : expression régulière qui valide les chaînes `TheDate`.
- `theTimeRegex` : expression régulière qui valide les chaînes `TheTime`.

## Utilisation

Servez-vous de ces constantes pour vos calculs métiers (ex. convertir un nombre de jours en millisecondes) ou pour vérifier qu'un timestamp se situe dans les limites supportées par JavaScript.

## Voir aussi

- [`isSafeTimestamp`](/fr/v1/api/date/isSafeTimestamp) – Validation runtime d'un timestamp
- [`types/timezone`](/fr/v1/api/date/types/timezone) – Enum de fuseaux horaires
