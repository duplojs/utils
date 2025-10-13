---
outline: [2, 3]
prev:
  text: "replaceAll"
  link: "/v1/api/string/replaceAll/fr"
next:
  text: "startsWith"
  link: "/v1/api/string/startsWith/fr"
---

# includes

La méthode **`includes()`** vérifie si une chaîne de caractères contient une sous-chaîne spécifiée, en renvoyant `true` ou `false` selon le cas.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/string/includes/examples/tryout.doc.ts"
  majorVersion="v1"
  height="250px"
/>

## Syntaxe

### Signature classique

```typescript
function includes<
	GenericString extends string, 
	GenericSearchString extends string
>(
	input: GenericString, 
	searchString: GenericSearchString
): input is Extract<GenericString, `${string}${GenericSearchString}${string}`>;
```

### Signature currifiée

```typescript
function includes<
	GenericSearchString extends string, 
	GenericString extends string
>(
	searchString: GenericSearchString
): (
	input: GenericString
) => input is Extract<GenericString, `${string}${GenericSearchString}${string}`>;
```

## Paramètres

- `input` : La chaîne de caractères dans laquelle effectuer la recherche.
- `searchString` : La sous-chaîne à rechercher.

## Valeur de retour

Un booléen indiquant si la sous-chaîne `searchString` a été trouvée dans la chaîne `input`.

## Exemples

<MonacoTSEditor
  src="/v1/api/string/includes/examples/typeGuard.doc.ts"
  majorVersion="v1"
  height="250px"
/>

:bulb: **Astuce** : Vous pouvez utiliser `includes()` pour effectuer des vérifications de type en utilisant des assertions de type conditionnelles.

### Filtrer des frameworks

<MonacoTSEditor
  src="/v1/api/string/includes/examples/filterFrameworks.doc.ts"
  majorVersion="v1"
  height="180px"
/>

### Rechercher dans des emails

<MonacoTSEditor
  src="/v1/api/string/includes/examples/searchEmails.doc.ts"
  majorVersion="v1"
  height="350px"
/>

## Voir aussi

- [startsWith](/v1/api/string/startsWith/fr) : Vérifie si une chaîne commence par une sous-chaîne spécifique.
- [endsWith](/v1/api/string/endsWith/fr) : Vérifie si une chaîne se termine par une sous-chaîne spécifique.
- [indexOf](/v1/api/string/indexOf/fr) : Retourne l'index de la première occurrence d'une sous-chaîne.
- [lastIndexOf](/v1/api/string/lastIndexOf/fr) : Retourne l'index de la dernière occurrence d'une sous-chaîne.


## Sources

- [MDN Web Docs: String.prototype.includes()](https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Reference/Global_Objects/String/includes)