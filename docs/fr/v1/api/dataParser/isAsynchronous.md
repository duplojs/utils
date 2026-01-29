---
outline: [2, 3]
description: "dataParser.isAsynchronous() indique si un parser (ou ses parsers internes) nécessite une exécution async avant de parser."
prev:
  text: "recover"
  link: "/fr/v1/api/dataParser/recover"
next:
  text: "coerce.*"
  link: "/fr/v1/api/dataParser/coerce"
---

# isAsynchronous

`dataParser.isAsynchronous()` indique si un parser (ou ses parsers internes) nécessite une exécution async avant de parser. Elle n'exécute aucune validation.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/dataParser/isAsynchronous/tryout.doc.ts"
  majorVersion="v1"
  height="334px"
/>

## Paramètres

Aucun.

## Valeur de retour

Un booléen : `true` si le parser nécessite une exécution async, sinon `false`.

## Voir aussi

- [`transform`](/fr/v1/api/dataParser/transform) - Transforme une valeur parsée (sync ou async)
- [`pipe`](/fr/v1/api/dataParser/pipe) - Compose plusieurs parsers dans un pipeline
