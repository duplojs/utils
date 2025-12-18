---
outline: [2, 3]
prev:
  text: "union"
  link: "/v1/api/dataParser/union/fr"
next:
  text: "nullable"
  link: "/v1/api/dataParser/nullable/fr"
---

# optional

Autorise `undefined` tout en conservant un parser strict pour la valeur présente. `DDataParser.optional(inner)` renvoie la sortie d'`inner` lorsqu'une valeur est fournie et laisse passer `undefined` sinon.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/dataParser/optional/examples/tryout.doc.ts"
  majorVersion="v1"
  height="500px"
/>

## Paramètres

- `inner` : parser appliqué quand une valeur est fournie.
- `coalescingValue` : (optionnel) remplace `undefined` par une valeur par défaut et restreint le type de sortie à `Output<inner>`.
- `checkers` : `checkerRefine` ou helpers personnalisés évaluant `Output<inner> | undefined`.
- `errorMessage` : message utilisé quand l'entrée n'est ni `undefined` ni valide pour `inner`.

## Valeur de retour

Un `DataParserOptional`. `schema.parse(data)` renvoie `DEither.success<Output | undefined>` ou un `DEither.error<DataParserError>` avec le chemin incriminé. Les checkers/restrictions s'appliquent uniquement lorsque la valeur n'est pas `undefined` (sauf logique contraire dans vos refinements).

## Others exemples

### Mode étendu

<MonacoTSEditor
  src="/v1/api/dataParser/optional/examples/extended.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## Voir aussi

- [`nullable`](/v1/api/dataParser/nullable/fr) - Permet d'accepter `null` dans un parser
- [`array`](/v1/api/dataParser/array/fr) - Parser pour les tableaux
