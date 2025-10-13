---
outline: [2, 3]
prev:
  text: "startsWith"
  link: "/v1/api/string/startsWith/fr"
next:
  text: "indexOf"
  link: "/v1/api/string/indexOf/fr"
---

# endsWith

La méthode **`endsWith()`** vérifie si une chaîne de caractères se termine par une sous-chaîne spécifique, en tenant compte d'une position optionnelle.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/string/endsWith/examples/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntaxe

### Signature classique

```typescript
function endsWith<
	GenericString extends string, 
	GenericSearchString extends string
>(
	input: GenericString, 
	searchString: GenericSearchString
): input is Extract<GenericString, `${string}${GenericSearchString}`>;
```

### Signature currifiée

```typescript
function endsWith<
	GenericSearchString extends string, 
	GenericString extends string
>(
	searchString: GenericSearchString
): (
	input: GenericString
) => input is Extract<GenericString, `${string}${GenericSearchString}`>;
```

## Paramètres

- `input` : La chaîne de caractères à vérifier.
- `searchString` : La sous-chaîne à rechercher à la fin de `input`.


## Valeur de retour

Un booléen indiquant si `input` se termine par `searchString`. Le type de retour utilise une assertion de type conditionnelle pour affiner le type de `input` si la condition est vraie.

## Exemples

<MonacoTSEditor
  src="/v1/api/string/endsWith/examples/typeGuard.doc.ts"
  majorVersion="v1"
  height="250px"
/>

:bulb: **Astuce** : Vous pouvez utiliser `endsWith()` pour effectuer des vérifications de type en utilisant des assertions de type conditionnelles.

### Filtrer des langages de script

<MonacoTSEditor
  src="/v1/api/string/endsWith/examples/filterScriptLanguages.doc.ts"
  majorVersion="v1"
  height="180px"
/>

### Grouper par extension

<MonacoTSEditor
  src="/v1/api/string/endsWith/examples/groupByExtension.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Voir aussi

- [matchAll](/v1/api/string/matchAll/fr) : Récupère toutes les correspondances d'une expression régulière avec leurs groupes.
- [match](/v1/api/string/match/fr) : Récupère les correspondances d'une expression régulière.
- [search](/v1/api/string/search/fr) : Recherche une correspondance avec une expression régulière.
- [lastIndexOf](/v1/api/string/lastIndexOf/fr) : Retourne l'index de la dernière occurrence d'une sous-chaîne.

## Sources

- [MDN Web Docs - String.prototype.endsWith()](https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith)
