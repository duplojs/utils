---
outline: [2, 3]
prev:
  text: "lazy"
  link: "/fr/v1/api/dataParser/lazy"
next:
  text: "transform"
  link: "/fr/v1/api/dataParser/transform"
---

# pipe

`DDataParser.pipe(input, output)` **compose deux parsers** : le premier valide/transforme l’entrée, puis son résultat est passé au second. Pratique pour enchaîner coercition → validation stricte → transformation, sans écrire de logique manuelle.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/dataParser/pipe/tryout.doc.ts"
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
  src="/examples/v1/api/dataParser/pipe/extended.doc.ts"
  majorVersion="v1"
  height="560px"
/>

## Voir aussi

- [`transform`](/fr/v1/api/dataParser/transform) - Transformer une valeur après validation d’un `inner`
- [`coerce.*`](/fr/v1/api/dataParser/coerce) - Normaliser les données avant validation stricte
