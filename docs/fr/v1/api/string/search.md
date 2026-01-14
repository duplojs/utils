---
outline: [2, 3]
description: "La méthode search() recherche une correspondance avec une sous-chaîne ou une expression régulière dans une chaîne de caractères et retourne l'index de la première occurrence trouvée. Si aucune correspondance n'est trouvée, elle retourne undefined."
prev:
  text: "lastIndexOf"
  link: "/fr/v1/api/string/lastIndexOf"
next:
  text: "match"
  link: "/fr/v1/api/string/match"
---

# search

La méthode **`search()`** recherche une correspondance avec une sous-chaîne ou une expression régulière dans une chaîne de caractères et retourne l'index de la première occurrence trouvée. Si aucune correspondance n'est trouvée, elle retourne `undefined`.

## Exemple interactif

<MonacoTSEditor
	src="/examples/v1/api/string/search/tryout.doc.ts"
	majorVersion="v1"
	height="187px"
/>

## Syntaxe

### Signature classique

```typescript
function search<
	GenericInput extends string
>(
	input: GenericInput, 
	pattern: string | RegExp
): number | undefined;
```

### Signature currifiée

```typescript
function search<
	GenericInput extends string
>(
	pattern: string | RegExp
): (input: GenericInput) => number | undefined;
```

## Paramètres

- `input` : La chaîne de caractères dans laquelle effectuer la recherche.
- `pattern` : Le motif de recherche, qui peut être une chaîne de caractères ou une expression régulière.

## Valeur de retour

L'index de la première occurrence du motif dans la chaîne, ou `undefined` si aucune correspondance n'est trouvée.

## Voir aussi

- [indexOf](/fr/v1/api/string/indexOf) : Retourne l'index de la première occurrence d'une sous-chaîne.
- [lastIndexOf](/fr/v1/api/string/lastIndexOf) : Retourne l'index de la dernière occurrence d'une sous-chaîne.
- [includes](/fr/v1/api/string/includes) : Vérifie si une chaîne contient une sous-chaîne.

## Sources

- [MDN Web Docs: String.prototype.search()](https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Reference/Global_Objects/String/search)
