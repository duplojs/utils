---
outline: [2, 3]
prev:
  text: "indexOf"
  link: "/v1/api/string/indexOf/fr"
next:
  text: "search"
  link: "/v1/api/string/search/fr"
---


# lastIndexOf

La méthode **`lastIndexOf()`** retourne l'index de la dernière occurrence d'une sous-chaîne dans une chaîne de caractères, ou undefined si la sous-chaîne n'est pas trouvée.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/string/lastIndexOf/examples/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntaxe

### Signature classique

```typescript
function lastIndexOf<
	GenericInput extends string
>(
	input: GenericInput, 
	searchString: string, 
	position?: number
): number | undefined;
```

### Signature currifiée

```typescript
function lastIndexOf<
	GenericInput extends string
>(
	searchString: string
): (input: GenericInput) => number | undefined;
```

## Paramètres

- `input` : La chaîne de caractères dans laquelle chercher.
- `searchString` : La sous-chaîne à rechercher.
- `position` (optionnel) : La position dans la chaîne à partir de laquelle commencer la recherche en arrière. Par défaut, la recherche commence à la fin de la chaîne.

## Valeur de retour

L'index de la dernière occurrence de la sous-chaîne, ou undefined si la sous-chaîne n'est pas trouvée.

## Exemples

### Trouver le dernier séparateur

<MonacoTSEditor
  src="/v1/api/string/lastIndexOf/examples/findSeparator.doc.ts"
  majorVersion="v1"
  height="200px"
/>

### Extraire le nom de fichier

<MonacoTSEditor
  src="/v1/api/string/lastIndexOf/examples/extractFileName.doc.ts"
  majorVersion="v1"
  height="320px"
/>

### Trouver la dernière occurrence

<MonacoTSEditor
  src="/v1/api/string/lastIndexOf/examples/findLastOccurrence.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Voir aussi

- [match](/v1/api/string/match/fr) : Récupère les correspondances d'une chaîne contre une expression régulière.
- [endsWith](/v1/api/string/endsWith/fr) : Vérifie si une chaîne se termine par une sous-chaîne spécifique.
- [includes](/v1/api/string/includes/fr) : Vérifie si une chaîne contient une sous-chaîne.

## Sources

- [MDN Web Docs: String.prototype.lastIndexOf()](https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf)
