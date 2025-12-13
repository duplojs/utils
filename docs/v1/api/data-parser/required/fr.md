---
outline: [2, 3]
prev:
  text: "partial"
  link: "/v1/api/data-parser/partial/fr"
next:
  text: "optional"
  link: "/v1/api/data-parser/optional/fr"
---

# required

La fonction **`required()`** supprime l'optionnalité des clés d'un `DataParser.object` en retirant les wrappers `optional()`. Elle est utile pour imposer des champs obligatoires sur un schéma partiellement optionnel.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/data-parser/required/examples/tryout.doc.ts"
  majorVersion="v1"
  height="620px"
/>

## Paramètres

- `dataParser` : Parser d'objet dont on veut rendre les champs obligatoires.
- `definition` : (optionnel) Définition complémentaire (`checkers`, `meta`, etc.).

## Valeur de retour

Un nouveau `DataParserObject` où les propriétés optionnelles redeviennent requises.

## Autres exemples

### Mode étendu (DPE)

<MonacoTSEditor
  src="/v1/api/data-parser/required/examples/extended.doc.ts"
  majorVersion="v1"
  height="600px"
/>

## Voir aussi

- [`partial`](/v1/api/data-parser/partial/fr) - Rend toutes les clés optionnelles
- [`optional`](/v1/api/data-parser/optional/fr) - Rend un champ optionnel
- [`object`](/v1/api/data-parser/object/fr) - Schéma de départ
