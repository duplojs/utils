---
outline: [2, 3]
prev:
  text: "string"
  link: "/fr/v1/api/dataParser/string"
next:
  text: "boolean"
  link: "/fr/v1/api/dataParser/boolean"
---

# number

Valide des nombres (entiers ou flottants) avec des contraintes optionnelles. `DDataParser.number()` assure que l'entrée est bien un nombre, applique vos checkers (`min`, `max`, `int`, `refine`, etc.) et retourne un `Either` contenant soit la valeur validée, soit un `DataParserError` riche.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/dataParser/number/tryout.doc.ts"
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
  src="/examples/v1/api/dataParser/number/checkers.doc.ts"
  majorVersion="v1"
  height="400px"
/>

### Mode étendu

<MonacoTSEditor
  src="/examples/v1/api/dataParser/number/extended.doc.ts"
  majorVersion="v1"
  height="350px"
/>

## Voir aussi

- [`date`](/fr/v1/api/dataParser/date) - Parser pour les dates
- [`coerce.*`](/fr/v1/api/dataParser/coerce) - Fonctions de coercition pour divers types