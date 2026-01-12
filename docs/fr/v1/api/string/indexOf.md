---
outline: [2, 3]
description: "La méthode indexOf() retourne l'index de la première occurrence d'une sous-chaîne dans une chaîne de caractères, ou undefined si la sous-chaîne n'est pas trouvée."
prev:
  text: "endsWith"
  link: "/fr/v1/api/string/endsWith"
next:
  text: "lastIndexOf"
  link: "/fr/v1/api/string/lastIndexOf"
---

# indexOf

La méthode **`indexOf()`** retourne l'index de la première occurrence d'une sous-chaîne dans une chaîne de caractères, ou undefined si la sous-chaîne n'est pas trouvée.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/string/indexOf/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntaxe

### Signature classique

```typescript
function indexOf(
	input: string, 
	searchString: string, 
	position?: number
): number | undefined;
```

### Signature currifiée

```typescript
function indexOf<
	GenericInput extends string
>(
	searchString: string
): (input: GenericInput) => number | undefined;
```

## Paramètres

- `input` : La chaîne de caractères dans laquelle chercher.
- `searchString` : La sous-chaîne à rechercher.
- `position` (optionnel) : La position dans la chaîne à partir de laquelle commencer la recherche. La valeur par défaut est 0.

## Valeur de retour

L'index de la première occurrence de la sous-chaîne, ou undefined si la sous-chaîne n'est pas trouvée.

## Voir aussi

- [includes](/fr/v1/api/string/includes) : Vérifie si une chaîne contient une sous-chaîne.
- [search](/fr/v1/api/string/search) : Recherche une correspondance avec une expression régulière.
- [match](/fr/v1/api/string/match) : Récupère les correspondances d'une chaîne avec une expression régulière.

## Sources

- [MDN Web Docs: String.prototype.indexOf()](https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)
