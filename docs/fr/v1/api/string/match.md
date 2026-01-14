---
outline: [2, 3]
description: "La méthode match() recherche une correspondance entre une chaîne de caractères et une expression régulière, et retourne les résultats sous forme de tableau ou undefined si aucune correspondance n'est trouvée."
prev:
  text: "search"
  link: "/fr/v1/api/string/search"
next:
  text: "matchAll"
  link: "/fr/v1/api/string/matchAll"
---

# match

La méthode **`match()`** recherche une correspondance entre une chaîne de caractères et une expression régulière, et retourne les résultats sous forme de tableau ou `undefined` si aucune correspondance n'est trouvée.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/string/match/tryout.doc.ts"
  majorVersion="v1"
  height="187px"
/>

## Syntaxe

### Signature classique

```typescript
function match<
	GenericInput extends string
>(
	input: GenericInput, 
	pattern: string | RegExp
): RegExpMatchArray | undefined;

```

### Signature currifiée

```typescript
function match<
	GenericInput extends string
>(
	pattern: string | RegExp
): (input: GenericInput) => RegExpMatchArray | undefined;
```

## Paramètres

- `input` : La chaîne de caractères à rechercher.
- `pattern` : Le motif de recherche, qui peut être une chaîne de caractères ou une expression régulière.

## Valeur de retour

Un tableau de correspondances (`RegExpMatchArray`) si une ou plusieurs correspondances sont trouvées, ou `undefined` si aucune correspondance n'est trouvée.

## Voir aussi

- [search](/fr/v1/api/string/search) : Recherche une correspondance avec une expression régulière.
- [indexOf](/fr/v1/api/string/indexOf) : Retourne l'index de la première occurrence d'une sous-chaîne.
- [lastIndexOf](/fr/v1/api/string/lastIndexOf) : Retourne l'index de la dernière occurrence d'une sous-chaîne.

## Sources

- [MDN Web Docs - String.prototype.match()](https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Reference/Global_Objects/String/match)