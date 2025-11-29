---
outline: [2, 3]
prev:
  text: "endsWith"
  link: "/v1/api/string/endsWith/fr"
next:
  text: "lastIndexOf"
  link: "/v1/api/string/lastIndexOf/fr"
---

# indexOf

La méthode **`indexOf()`** retourne l'index de la première occurrence d'une sous-chaîne dans une chaîne de caractères, ou undefined si la sous-chaîne n'est pas trouvée.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/string/indexOf/examples/tryout.doc.ts"
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

## Exemples

### Trouver la position de "js" dans des frameworks

<MonacoTSEditor
  src="/v1/api/string/indexOf/examples/findFrameworks.doc.ts"
  majorVersion="v1"
  height="200px"
/>

### Extraire le domaine d'emails

<MonacoTSEditor
  src="/v1/api/string/indexOf/examples/extractDomain.doc.ts"
  majorVersion="v1"
  height="350px"
/>

### Compter les occurrences

<MonacoTSEditor
  src="/v1/api/string/indexOf/examples/countOccurrences.doc.ts"
  majorVersion="v1"
  height="280px"
/>

## Voir aussi

- [includes](/v1/api/string/includes/fr) : Vérifie si une chaîne contient une sous-chaîne.
- [search](/v1/api/string/search/fr) : Recherche une correspondance avec une expression régulière.
- [match](/v1/api/string/match/fr) : Récupère les correspondances d'une chaîne avec une expression régulière.

## Sources

- [MDN Web Docs: String.prototype.indexOf()](https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)
