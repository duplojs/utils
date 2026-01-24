---
outline: [2, 3]
description: "La méthode extractAll() retourne un itérateur des détails de toutes les correspondances trouvées dans une chaîne pour une expression régulière donnée."
prev:
  text: "matchAll"
  link: "/fr/v1/api/string/matchAll"
next:
  text: "charAt"
  link: "/fr/v1/api/string/charAt"
---

# extractAll

La méthode **`extractAll()`** retourne un itérateur des détails de toutes les correspondances trouvées dans une chaîne pour une expression régulière donnée.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/string/extractAll/tryout.doc.ts"
  majorVersion="v1"
  height="240px"
/>

## Syntaxe

### Signature classique

```typescript
function extractAll<
	GenericInput extends string
>(
	input: GenericInput, 
	pattern: RegExp
): Generator<ExtractResult>;
```

### Signature currifiée

```typescript
function extractAll<
	GenericInput extends string
>(
	pattern: RegExp
): (input: GenericInput) => Generator<ExtractResult>;
```

## Paramètres

- `input` : La chaîne de caractères à analyser.
- `pattern` : L'expression régulière à utiliser pour trouver les correspondances. Elle doit avoir le flag `g` (global) pour trouver toutes les correspondances.

## Valeur de retour

Un itérateur (`Generator<ExtractResult>`) qui permet de parcourir toutes les correspondances trouvées dans la chaîne `input`.

`ExtractResult` contient :
- `matchedValue` : La sous-chaîne trouvée.
- `groups` : Un tableau des groupes capturés (hors correspondance complète).
- `namedGroups` : Un objet des groupes nommés si présents.
- `offset` : L'index de début de la correspondance.
- `self` : La chaîne d'entrée originale.

## Voir aussi

- [extract](/fr/v1/api/string/extract) : Extrait les détails de la première correspondance.
- [match](/fr/v1/api/string/match) : Recherche une correspondance avec une expression régulière.
- [matchAll](/fr/v1/api/string/matchAll) : Recherche toutes les correspondances avec une expression régulière.

## Sources

- [MDN Web Docs - String.prototype.matchAll()](https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll)
