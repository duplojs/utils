---
outline: [2, 3]
description: "DDataParser.nil() n'accepte que null. Utile pour décrire explicitement les champs devant être null ou pour combiner avec optional/nullable."
prev:
  text: "templateLiteral"
  link: "/fr/v1/api/dataParser/templateLiteral"
next:
  text: "empty"
  link: "/fr/v1/api/dataParser/empty"
---

# nil

`DDataParser.nil()` n'accepte que `null`. Utile pour décrire explicitement les champs devant être `null` ou pour combiner avec `optional/nullable`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/dataParser/nil/tryout.doc.ts"
  majorVersion="v1"
  height="500px"
/>

## Paramètres

- `errorMessage` : message personnalisé quand l'entrée n'est pas `null`.
- `checkers` : `checkerRefine` pour ajouter de la logique métier.
- `coerce` : `true` pour convertir `undefined`/`"null"` en `null`. Par défaut `false`.

## Valeur de retour

Un `DataParserNil`. `schema.parse(data)` renvoie `DEither.success<null>` ou `DEither.error<DataParserError>`.

## Others exemples

### Mode étendu

<MonacoTSEditor
  src="/examples/v1/api/dataParser/nil/extended.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## Voir aussi

- [`date`](/fr/v1/api/dataParser/date)
- [`literal`](/fr/v1/api/dataParser/literal)
- [`optional`](/fr/v1/api/dataParser/optional)
