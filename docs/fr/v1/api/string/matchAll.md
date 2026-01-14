---
outline: [2, 3]
description: "La méthode matchAll() prend une expression régulière en argument et retourne un itérateur de toutes les correspondances trouvées dans une chaîne de caractères."
prev:
  text: "match"
  link: "/fr/v1/api/string/match"
next:
  text: "charAt"
  link: "/fr/v1/api/string/charAt"
---

# matchAll

La méthode **`matchAll()`** prend une expression régulière en argument et retourne un itérateur de toutes les correspondances trouvées dans une chaîne de caractères.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/string/matchAll/tryout.doc.ts"
  majorVersion="v1"
  height="292px"
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

- [match](/fr/v1/api/string/match) : Recherche une correspondance avec une expression régulière.
- [search](/fr/v1/api/string/search) : Recherche une correspondance avec une expression régulière.
- [indexOf](/fr/v1/api/string/indexOf) : Retourne l'index de la première occurrence d'une sous-chaîne.
- [lastIndexOf](/fr/v1/api/string/lastIndexOf) : Retourne l'index de la dernière occurrence d'une sous-chaîne.

## Sources

- [MDN Web Docs - String.prototype.matchAll()](https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll)
