---
outline: [2, 3]
prev:
  text: "union"
  link: "/v1/api/data-parser/union/fr"
next:
  text: "required"
  link: "/v1/api/data-parser/required/fr"
---

# partial

La fonction **`partial()`** rend toutes les clés d'un objet optionnelles en enveloppant les parsers dans `optional()`. Elle permet d'accepter des objets partiels tout en conservant le typage et les checkers existants.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/data-parser/partial/examples/tryout.doc.ts"
  majorVersion="v1"
  height="520px"
/>

## Paramètres

- `dataParser` : Parser d'objet à assouplir.
- `definition` : (optionnel) Définition complémentaire (`checkers`, `meta`, `coalescingValue`...).

## Valeur de retour

Un nouveau `DataParserObject` dont toutes les clés sont optionnelles. Les validations existantes sont conservées.

## Autres exemples

### Mode étendu (DPE)

<MonacoTSEditor
  src="/v1/api/data-parser/partial/examples/extended.doc.ts"
  majorVersion="v1"
  height="600px"
/>

## Voir aussi

- [`object`](/v1/api/data-parser/object/fr) - Déclare la forme initiale
- [`optional`](/v1/api/data-parser/optional/fr) - Rend un champ optionnel
- [`required`](/v1/api/data-parser/required/fr) - Rétablit l'obligation des champs optionnels
