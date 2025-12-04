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
  height="300px"
  :foldLines="[11]"
/>

## Syntaxe

### Signature classique

```typescript
function includes<
	GenericInput extends string, 
	GenericSearchString extends string
>(
	input: GenericInput, 
	searchString: GenericSearchString
): input is Extract<GenericInput, `${string}${GenericSearchString}${string}`>;
```

### Signature currifiée

```typescript
function includes<
	GenericInput extends string,
	GenericSearchString extends string
>(
	searchString: GenericSearchString
): (
	input: GenericInput
) => input is Extract<GenericInput, `${string}${GenericSearchString}${string}`>;
```

## Paramètres

- `input` : La chaîne de caractères dans laquelle effectuer la recherche.
- `searchString` : La sous-chaîne à rechercher.

## Valeur de retour

Un booléen indiquant si la sous-chaîne `searchString` a été trouvée dans la chaîne `input`.

## Voir aussi

- [startsWith](/v1/api/string/startsWith/fr) : Vérifie si une chaîne commence par une sous-chaîne spécifique.
- [endsWith](/v1/api/string/endsWith/fr) : Vérifie si une chaîne se termine par une sous-chaîne spécifique.
- [indexOf](/v1/api/string/indexOf/fr) : Retourne l'index de la première occurrence d'une sous-chaîne.
- [lastIndexOf](/v1/api/string/lastIndexOf/fr) : Retourne l'index de la dernière occurrence d'une sous-chaîne.


## Sources

- [MDN Web Docs: String.prototype.includes()](https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Reference/Global_Objects/String/includes)