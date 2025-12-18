---
outline: [2, 3]
prev:
  text: "Data Parser"
  link: "/v1/api/dataParser/fr"
next:
  text: "number"
  link: "/v1/api/dataParser/number/fr"
---

# string

Construit un parser pour les chaînes de caractères. `DDataParser.string()` garantit que l'entrée est bien une chaîne (avec support optionnel de la coercition), applique les checkers fournis et retourne un `Either` typé contenant soit la valeur validée, soit un `DataParserError` détaillé.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/dataParser/string/examples/tryout.doc.ts"
  majorVersion="v1"
  height="500px"
/>

## Paramètres

- `errorMessage` : message personnalisé injecté dans chaque `issue` lorsque l'entrée n'est pas une chaîne.
- `checkers` : tableau de checkers (`checkerStringMin`, `checkerStringMax`, `checkerStringRegex`, `checkerEmail`, `checkerUrl`, `checkerRefine`, etc.) exécutés après la validation de base.
- `coerce` : `true` pour transformer les entrées non-string (nombres, booleans, objets avec `toString`) avant de lancer les checkers. Par défaut `false`.


## Valeur de retour

Un `DataParserString` disposant de `parse`, `asyncParse`, `exec`, `asyncExec`, `addChecker` et `clone`. `schema.parse(data)` renvoie `DEither.success<string>` lorsque toutes les validations passent, ou `DEither.error<DataParserError>` avec les chemins (`path`), les messages et les valeurs rejetées.

## Others exemples

### Checkers personnalisés

<MonacoTSEditor
  src="/v1/api/dataParser/string/examples/checkers.doc.ts"
  majorVersion="v1"
  height="450px"
/>

### Mode étendu

<MonacoTSEditor
  src="/v1/api/dataParser/string/examples/extended.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Voir aussi

- [`boolean`](/v1/api/dataParser/boolean/fr) — parser pour les valeurs booléennes
- [`coerce.*`](/v1/api/dataParser/coerce/fr) — variantes spécialisées pour normaliser les entrées avant validation stricte
