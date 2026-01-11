---
outline: [2, 3]
description: "Construit un parser pour les booléens. DDataParser.boolean() vérifie l'entrée, supporte la coercition (\"true\", 1, etc.) et autorise des checkers personnalisés via checkerRefine."
prev:
  text: "number"
  link: "/fr/v1/api/dataParser/number"
next:
  text: "bigint"
  link: "/fr/v1/api/dataParser/bigint"
---

# boolean

Construit un parser pour les booléens. `DDataParser.boolean()` vérifie l'entrée, supporte la coercition (`"true"`, `1`, etc.) et autorise des checkers personnalisés via `checkerRefine`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/dataParser/boolean/tryout.doc.ts"
  majorVersion="v1"
  height="500px"
/>

## Paramètres

- `errorMessage` : message personnalisé quand l'entrée n'est pas interprétable en booléen.
- `checkers` : `checkerRefine` pour ajouter des règles métier (par exemple forcer `true`).
- `coerce` : `true` pour convertir `"true"`, `"false"`, `1`, `0`, etc. Par défaut `false`.

## Valeur de retour

Un `DataParserBoolean` doté de `parse`, `asyncParse`, `exec`, `asyncExec`, `addChecker`, `clone`. `schema.parse(data)` renvoie `DEither.success<boolean>` ou `DEither.error<DataParserError>`.

## Others exemples

### Checkers personnalisés

<MonacoTSEditor
  src="/examples/v1/api/dataParser/boolean/checkers.doc.ts"
  majorVersion="v1"
  height="450px"
/>

### Mode étendu

<MonacoTSEditor
  src="/examples/v1/api/dataParser/boolean/extended.doc.ts"
  majorVersion="v1"
  height="350px"
/>

## Voir aussi

- [`string`](/fr/v1/api/dataParser/string) - Parser pour les chaînes de caractères
- [`coerce.*`](/fr/v1/api/dataParser/coerce) - Fonctions de coercition pour divers types