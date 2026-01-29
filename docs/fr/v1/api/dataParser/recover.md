---
outline: [2, 3]
description: "DDataParser.recover(inner, fallback) encapsule un parser et renvoie sa sortie lorsqu'il réussit ou une valeur de repli lorsqu'il échoue. Pratique pour assurer une valeur sûre tout en collectant les erreurs (utile pour les DTO partiels, logs, migrations, etc.)."
prev:
  text: "refine"
  link: "/fr/v1/api/dataParser/refine"
next:
  text: "isAsynchronous"
  link: "/fr/v1/api/dataParser/isAsynchronous"
---

# recover

`DDataParser.recover(inner, fallback)` encapsule un parser et renvoie sa sortie lorsqu'il réussit ou une valeur de repli lorsqu'il échoue. Pratique pour assurer une valeur sûre tout en collectant les erreurs (utile pour les DTO partiels, logs, migrations, etc.).

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/dataParser/recover/tryout.doc.ts"
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
  src="/examples/v1/api/dataParser/recover/extended.doc.ts"
  majorVersion="v1"
  height="500px"
/>

## Voir aussi

- [`date`](/fr/v1/api/dataParser/date) - Parser pour les dates
- [`nil`](/fr/v1/api/dataParser/nil) - Parser pour les valeurs null ou undefined
