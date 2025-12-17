---
outline: [2, 3]
prev:
  text: "lazy"
  link: "/v1/api/data-parser/lazy/fr"
next:
  text: "transform"
  link: "/v1/api/data-parser/transform/fr"
---

# pipe

`DDataParser.pipe(input, output)` **compose deux parsers** : le premier valide/transforme l’entrée, puis son résultat est passé au second. Pratique pour enchaîner coercition → validation stricte → transformation, sans écrire de logique manuelle.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/data-parser/pipe/examples/tryout.doc.ts"
  majorVersion="v1"
  height="520px"
/>

## Paramètres

- `input` : premier parser exécuté sur l’entrée.
- `output` : parser exécuté sur la sortie de `input`.
- `checkers` : `checkerRefine` ou autres helpers appliqués sur `Output<output>`.
- `errorMessage` : message générique si le pipeline échoue.

## Valeur de retour

Un `DataParserPipe`. `schema.parse(data)` exécute `input`, puis `output` si `input` a réussi. En cas d’échec, vous recevez `DEither.error<DataParserError>` avec un chemin et une trace cohérents avec l’étage fautif.

## Others exemples

### Mode étendu

En mode étendu (`DPE`), `pipe` existe aussi comme **méthode** : `DPE.someParser().pipe(otherParser)`.  
C’est un wrapper autour de `DPE.pipe(self, otherParser)` exposé par `scripts/dataParser/baseExtended.ts`.

<MonacoTSEditor
  src="/v1/api/data-parser/pipe/examples/extended.doc.ts"
  majorVersion="v1"
  height="560px"
/>

## Voir aussi

- [`transform`](/v1/api/data-parser/transform/fr) - Transformer une valeur après validation d’un `inner`
- [`coerce.*`](/v1/api/data-parser/coerce/fr) - Normaliser les données avant validation stricte
