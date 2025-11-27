---
outline: [2, 3]
prev:
  text: "number"
  link: "/v1/api/data-parser/number/fr"
next:
  text: "bigint"
  link: "/v1/api/data-parser/bigint/fr"
---

# boolean

Construit un parser pour les booléens. `DDataParser.boolean()` vérifie l'entrée, supporte la coercition (`"true"`, `1`, etc.) et autorise des checkers personnalisés via `checkerRefine`.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/data-parser/boolean/examples/tryout.doc.ts"
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
  src="/v1/api/data-parser/boolean/examples/checkers.doc.ts"
  majorVersion="v1"
  height="450px"
/>

### Mode étendu

<MonacoTSEditor
  src="/v1/api/data-parser/boolean/examples/extended.doc.ts"
  majorVersion="v1"
  height="350px"
/>

## Voir aussi

- [string](/v1/api/data-parser/string/fr)
- [`coerce.*`](/v1/api/data-parser/coerce/fr)
