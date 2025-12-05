---
outline: [2, 3]
prev:
  text: "match"
  link: "/v1/api/string/match/fr"
next:
  text: "charAt"
  link: "/v1/api/string/charAt/fr"
---

# matchAll

La méthode **`matchAll()`** prend une expression régulière en argument et retourne un itérateur de toutes les correspondances trouvées dans une chaîne de caractères.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/string/matchAll/examples/tryout.doc.ts"
  majorVersion="v1"
  height="280px"
/>

## Syntaxe

### Signature classique

```typescript
function matchAll<
	GenericInput extends string
>(
	input: GenericInput, 
	pattern: RegExp
): RegExpStringIterator<RegExpMatchArray>;
```

### Signature currifiée

```typescript
function matchAll<
	GenericInput extends string
>(
	pattern: RegExp
): (input: GenericInput) => RegExpStringIterator<RegExpMatchArray>;
```

## Paramètres

- `input` : La chaîne de caractères à analyser.
- `pattern` : L'expression régulière à utiliser pour trouver les correspondances. Elle doit avoir le flag `g` (global) pour trouver toutes les correspondances.

## Valeur de retour

Un itérateur (`RegExpStringIterator<RegExpMatchArray>`) qui permet de parcourir toutes les correspondances trouvées dans la chaîne `input`.

## Voir aussi

- [match](/v1/api/string/match/fr) : Recherche une correspondance avec une expression régulière.
- [search](/v1/api/string/search/fr) : Recherche une correspondance avec une expression régulière.
- [indexOf](/v1/api/string/indexOf/fr) : Retourne l'index de la première occurrence d'une sous-chaîne.
- [lastIndexOf](/v1/api/string/lastIndexOf/fr) : Retourne l'index de la dernière occurrence d'une sous-chaîne.

## Sources

- [MDN Web Docs - String.prototype.matchAll()](https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll)
