---
outline: [2, 3]
prev:
  text: "closestTo"
  link: "/v1/api/date/closestTo/fr"
next:
  text: "types/timezone"
  link: "/v1/api/date/types/timezone/fr"
---

# constants

Expose les constantes bas niveau utilisées par les helpers date (durées usuelles, bornes de timestamp, expression régulière `TheDate`).

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/date/constants/examples/tryout.doc.ts"
  majorVersion="v1"
  height="360px"
/>

## Contenu

- `minTimestamp` / `maxTimestamp`
- `millisecondsInOneDay`, `millisecondInOneWeek`, `millisecondInOneHour`, etc.
- `secondsInOneMinute`, `minutesInOneHour`, `hoursInOneDay`, `daysInOneWeek`, `monthtsInOneYear`.
- `theDateRegex` : expression régulière qui valide les chaînes `TheDate`.

## Utilisation

Servez-vous de ces constantes pour vos calculs métiers (ex. convertir un nombre de jours en millisecondes) ou pour vérifier qu'un timestamp se situe dans les limites supportées par JavaScript.

## Voir aussi

- [`isSafeTimestamp`](/v1/api/date/isSafeTimestamp/fr) – Validation runtime d'un timestamp
- [`types/timezone`](/v1/api/date/types/timezone/fr) – Enum de fuseaux horaires
