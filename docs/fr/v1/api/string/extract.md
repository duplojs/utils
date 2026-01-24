---
outline: [2, 3]
description: "La méthode extract() retourne les détails de la première correspondance d'un motif dans une chaîne, ou undefined si aucune correspondance n'est trouvée."
prev:
  text: "match"
  link: "/fr/v1/api/string/match"
next:
  text: "matchAll"
  link: "/fr/v1/api/string/matchAll"
---

# extract

La méthode **`extract()`** retourne les détails de la première correspondance d'un motif dans une chaîne, ou `undefined` si aucune correspondance n'est trouvée.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/string/extract/tryout.doc.ts"
  majorVersion="v1"
  height="220px"
/>

## Syntaxe

### Signature classique

```typescript
function extract<
	GenericInput extends string
>(
	input: GenericInput, 
	pattern: string | RegExp
): ExtractResult | undefined;
```

### Signature currifiée

```typescript
function extract<
	GenericInput extends string
>(
	pattern: string | RegExp
): (input: GenericInput) => ExtractResult | undefined;
```

## Paramètres

- `input` : La chaîne de caractères à rechercher.
- `pattern` : Le motif de recherche, qui peut être une chaîne de caractères ou une expression régulière.

## Valeur de retour

Un objet `ExtractResult` lorsqu'une correspondance est trouvée, ou `undefined` lorsqu'il n'y a aucune correspondance.

`ExtractResult` contient :
- `matchedValue` : La sous-chaîne trouvée.
- `groups` : Un tableau des groupes capturés (hors correspondance complète).
- `namedGroups` : Un objet des groupes nommés si présents.
- `offset` : L'index de début de la correspondance.
- `self` : La chaîne d'entrée originale.

## Voir aussi

- [extractAll](/fr/v1/api/string/extractAll) : Extrait les détails de toutes les correspondances.
- [match](/fr/v1/api/string/match) : Recherche une correspondance avec une expression régulière.
- [matchAll](/fr/v1/api/string/matchAll) : Recherche toutes les correspondances avec une expression régulière.

## Sources

- [MDN Web Docs - String.prototype.match()](https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Reference/Global_Objects/String/match)
