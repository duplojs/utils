---
outline: [2, 3]
prev:
  text: "refine"
  link: "/v1/api/dataParser/refine/fr"
next:
  text: "coerce.*"
  link: "/v1/api/dataParser/coerce/fr"
---

# recover

`DDataParser.recover(inner, fallback)` encapsule un parser et renvoie sa sortie lorsqu'il réussit ou une valeur de repli lorsqu'il échoue. Pratique pour assurer une valeur sûre tout en collectant les erreurs (utile pour les DTO partiels, logs, migrations, etc.).

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/dataParser/recover/examples/tryout.doc.ts"
  majorVersion="v1"
  height="520px"
/>

## Paramètres

- `inner` : parser à protéger.
- `recoveredValue` : valeur retournée quand `inner` échoue (et type de sortie final).
- `checkers` : appliqués sur le résultat final (qu'il provienne de `inner` ou du fallback).
- `errorMessage` : message générique en cas d'échec avant récupération.

## Valeur de retour

Un `DataParserRecover`. `schema.parse(data)` renvoie toujours `DEither.success` avec soit le résultat d'`inner`, soit le fallback. Les erreurs produites lors de l'exécution d'`inner` sont néanmoins disponibles dans le `DataParserError` pour audit/logging.

## Others exemples

### Mode étendu

<MonacoTSEditor
  src="/v1/api/dataParser/recover/examples/extended.doc.ts"
  majorVersion="v1"
  height="500px"
/>

## Voir aussi

- [`date`](/v1/api/dataParser/date/fr) - Parser pour les dates
- [`nil`](/v1/api/dataParser/nil/fr) - Parser pour les valeurs null ou undefined
