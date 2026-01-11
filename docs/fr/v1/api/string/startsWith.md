---
outline: [2, 3]
description: "La méthode startsWith() vérifie si une chaîne de caractères commence par une sous-chaîne spécifique."
prev:
  text: "includes"
  link: "/fr/v1/api/string/includes"
next:
  text: "endsWith"
  link: "/fr/v1/api/string/endsWith"
---

# startsWith

La méthode **`startsWith()`** vérifie si une chaîne de caractères commence par une sous-chaîne spécifique.

## Exemple interactif

<MonacoTSEditor
  	src="/examples/v1/api/string/startsWith/tryout.doc.ts"
  	majorVersion="v1"
	height="320px"
	:foldLines="[11]"
/>

## Syntaxe

### Signature classique

```typescript
function startsWith<
	GenericString extends string, 
	GenericSearchString extends string
>(
	input: GenericInput, 
	searchString: GenericSearchString
): input is Extract<GenericInput, `${GenericSearchString}${string}`>
```

### Signature currifiée

```typescript
function startsWith<
	GenericInput extends string,
	GenericSearchString extends string
>(
	searchString: GenericSearchString
): (
	input: GenericInput
) => input is Extract<GenericInput, `${GenericSearchString}${string}`>;
```

## Paramètres

- `input` : La chaîne de caractères à vérifier.
- `searchString` : La sous-chaîne à rechercher au début de `input`.

## Valeur de retour

Retourne `true` si `input` commence par `searchString` et false si ce n'est pas le cas.

## Voir aussi

- [includes](/fr/v1/api/string/includes) : Vérifie si une chaîne contient une sous-chaîne.
- [indexOf](/fr/v1/api/string/indexOf) : Retourne l'index de la première occurrence d'une sous-chaîne.
- [lastIndexOf](/fr/v1/api/string/lastIndexOf) : Retourne l'index de la dernière occurrence d'une sous-chaîne.
- [search](/fr/v1/api/string/search) : Recherche une correspondance avec une expression régulière.

## Sources

- [MDN Web Docs: String.prototype.startsWith()](https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith)