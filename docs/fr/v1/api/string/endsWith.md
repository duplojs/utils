---
outline: [2, 3]
description: "La méthode endsWith() vérifie si une chaîne de caractères se termine par une sous-chaîne spécifique, en tenant compte d'une position optionnelle."
prev:
  text: "startsWith"
  link: "/fr/v1/api/string/startsWith"
next:
  text: "indexOf"
  link: "/fr/v1/api/string/indexOf"
---

# endsWith

La méthode **`endsWith()`** vérifie si une chaîne de caractères se termine par une sous-chaîne spécifique, en tenant compte d'une position optionnelle.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/string/endsWith/tryout.doc.ts"
  majorVersion="v1"
  height="334px"
  :foldLines="[11]"
/>

## Syntaxe

### Signature classique

```typescript
function endsWith<
	GenericInput extends string, 
	GenericSearchString extends string
>(
	input: GenericInput, 
	searchString: GenericSearchString
): input is Extract<GenericInput, `${string}${GenericSearchString}`>;
```

### Signature currifiée

```typescript
function endsWith<
	GenericSearchString extends string, 
	GenericInput extends string
>(
	searchString: GenericSearchString
): (
	input: GenericInput
) => input is Extract<GenericInput, `${string}${GenericSearchString}`>;
```

## Paramètres

- `input` : La chaîne de caractères à vérifier.
- `searchString` : La sous-chaîne à rechercher à la fin de `input`.


## Valeur de retour

Un booléen indiquant si `input` se termine par `searchString`. Le type de retour utilise une assertion de type conditionnelle pour affiner le type de `input` si la condition est vraie.

## Voir aussi

- [matchAll](/fr/v1/api/string/matchAll) : Récupère toutes les correspondances d'une expression régulière avec leurs groupes.
- [match](/fr/v1/api/string/match) : Récupère les correspondances d'une expression régulière.
- [search](/fr/v1/api/string/search) : Recherche une correspondance avec une expression régulière.
- [lastIndexOf](/fr/v1/api/string/lastIndexOf) : Retourne l'index de la dernière occurrence d'une sous-chaîne.

## Sources

- [MDN Web Docs - String.prototype.endsWith()](https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith)
