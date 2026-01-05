---
outline: [2, 3]
description: "Construit un parser pour les chaînes de caractères. DDataParser.string() garantit que l'entrée est bien une chaîne (avec support optionnel de la coercition), applique les checkers fournis et retourne un Either typé contenant soit la valeur validée, soit un DataParserError détaillé."
prev:
  text: "Data Parser"
  link: "/fr/v1/api/dataParser/"
next:
  text: "number"
  link: "/fr/v1/api/dataParser/number"
---

# string

Construit un parser pour les chaînes de caractères. `DDataParser.string()` garantit que l'entrée est bien une chaîne (avec support optionnel de la coercition), applique les checkers fournis et retourne un `Either` typé contenant soit la valeur validée, soit un `DataParserError` détaillé.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/dataParser/string/tryout.doc.ts"
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
  src="/examples/v1/api/dataParser/string/checkers.doc.ts"
  majorVersion="v1"
  height="450px"
/>

### Mode étendu

<MonacoTSEditor
  src="/examples/v1/api/dataParser/string/extended.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Voir aussi

- [`boolean`](/fr/v1/api/dataParser/boolean) — parser pour les valeurs booléennes
- [`coerce.*`](/fr/v1/api/dataParser/coerce) — variantes spécialisées pour normaliser les entrées avant validation stricte
