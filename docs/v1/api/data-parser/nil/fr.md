---
outline: [2, 3]
prev:
  text: "templateLiteral"
  link: "/v1/api/data-parser/templateLiteral/fr"
next:
  text: "empty"
  link: "/v1/api/data-parser/empty/fr"
---

# nil

`DDataParser.nil()` n'accepte que `null`. Utile pour décrire explicitement les champs devant être `null` ou pour combiner avec `optional/nullable`.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/data-parser/nil/examples/tryout.doc.ts"
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
  src="/v1/api/data-parser/nil/examples/extended.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## Voir aussi

- [`date`](/v1/api/data-parser/date/fr)
- [`literal`](/v1/api/data-parser/literal/fr)
- [`optional`](/v1/api/data-parser/optional/fr)
