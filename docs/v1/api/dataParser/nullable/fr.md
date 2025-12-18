---
outline: [2, 3]
prev:
  text: "optional"
  link: "/v1/api/dataParser/optional/fr"
next:
  text: "lazy"
  link: "/v1/api/dataParser/lazy/fr"
---

# nullable

Autorise `null` tout en appliquant un parser strict lorsque la valeur est présente. `DDataParser.nullable(inner)` retourne `null` ou la sortie d'`inner`.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/dataParser/nullable/examples/tryout.doc.ts"
  majorVersion="v1"
  height="500px"
/>

## Paramètres

- `inner` : parser utilisé quand la valeur n'est pas `null`.
- `coalescingValue` : optionnel, remplace `null` par une valeur par défaut et restreint le type de sortie.
- `checkers` : `checkerRefine` ou autres helpers appliqués sur `Output<inner> | null`.
- `errorMessage` : message pour les entrées ni `null` ni conformes à `inner`.

## Valeur de retour

Un `DataParserNullable`. `schema.parse(data)` renvoie `DEither.success<Output | null>` ou `DEither.error<DataParserError>`. Les checkers vous permettent, par exemple, de restreindre les dates à une période même lorsqu'elles sont facultatives.

## Others exemples

### Mode étendu

<MonacoTSEditor
  src="/v1/api/dataParser/nullable/examples/extended.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## Voir aussi

- [`object`](/v1/api/dataParser/object/fr) - Parser pour les objets
- [`array`](/v1/api/dataParser/array/fr) - Parser pour les tableaux
