---
outline: [2, 3]
prev:
  text: "string"
  link: "/v1/api/data-parser/string/fr"
next:
  text: "boolean"
  link: "/v1/api/data-parser/boolean/fr"
---

# number

Valide des nombres (entiers ou flottants) avec des contraintes optionnelles. `DDataParser.number()` assure que l'entrée est bien un nombre, applique vos checkers (`min`, `max`, `int`, `refine`, etc.) et retourne un `Either` contenant soit la valeur validée, soit un `DataParserError` riche.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/data-parser/number/examples/tryout.doc.ts"
  majorVersion="v1"
  height="500px"
/>

## Paramètres

- `errorMessage` : message personnalisé quand l'entrée n'est pas un nombre.
- `checkers` : `checkerNumberMin`, `checkerNumberMax`, `checkerInt`, `checkerRefine`, etc.
- `coerce` : `true` pour convertir les chaînes/boolean avant validation (via `Number(value)`). Par défaut `false`.

## Valeur de retour

Un `DataParserNumber` avec `parse`, `asyncParse`, `exec`, `asyncExec`, `addChecker`, `clone`. Le `parse` renvoie `DEither.success<number>` si tout passe ou `DEither.error<DataParserError>` avec les issues accumulées.

## Others exemples

### Checkers personnalisés

<MonacoTSEditor
  src="/v1/api/data-parser/number/examples/checkers.doc.ts"
  majorVersion="v1"
  height="400px"
/>

### Mode étendu

<MonacoTSEditor
  src="/v1/api/data-parser/number/examples/extended.doc.ts"
  majorVersion="v1"
  height="350px"
/>

## Voir aussi

- [`date`](/v1/api/data-parser/date/fr) - Parser pour les dates
- [`coerce.*`](/v1/api/data-parser/coerce/fr) - Fonctions de coercition pour divers types