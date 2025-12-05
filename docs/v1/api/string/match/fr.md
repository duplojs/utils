---
outline: [2, 3]
prev:
  text: "search"
  link: "/v1/api/string/search/fr"
next:
  text: "matchAll"
  link: "/v1/api/string/matchAll/fr"
---

# match

La méthode **`match()`** recherche une correspondance entre une chaîne de caractères et une expression régulière, et retourne les résultats sous forme de tableau ou `undefined` si aucune correspondance n'est trouvée.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/string/match/examples/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
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

- [search](/v1/api/string/search/fr) : Recherche une correspondance avec une expression régulière.
- [indexOf](/v1/api/string/indexOf/fr) : Retourne l'index de la première occurrence d'une sous-chaîne.
- [lastIndexOf](/v1/api/string/lastIndexOf/fr) : Retourne l'index de la dernière occurrence d'une sous-chaîne.

## Sources

- [MDN Web Docs - String.prototype.match()](https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Reference/Global_Objects/String/match)