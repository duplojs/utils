---
outline: [2, 3]
prev:
  text: "lastIndexOf"
  link: "/v1/api/string/lastIndexOf/fr"
next:
  text: "match"
  link: "/v1/api/string/match/fr"
---

# search

La méthode **`search()`** recherche une correspondance avec une sous-chaîne ou une expression régulière dans une chaîne de caractères et retourne l'index de la première occurrence trouvée. Si aucune correspondance n'est trouvée, elle retourne `undefined`.

## Exemple interactif

<MonacoTSEditor
	src="/v1/api/string/search/examples/tryout.doc.ts"
	majorVersion="v1"
	height="200px"
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

## Exemples

SOON...

## Voir aussi

- [indexOf](/v1/api/string/indexOf/fr) : Retourne l'index de la première occurrence d'une sous-chaîne.
- [lastIndexOf](/v1/api/string/lastIndexOf/fr) : Retourne l'index de la dernière occurrence d'une sous-chaîne.
- [includes](/v1/api/string/includes/fr) : Vérifie si une chaîne contient une sous-chaîne.

## Sources

- [MDN Web Docs: String.prototype.search()](https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Reference/Global_Objects/String/search)
