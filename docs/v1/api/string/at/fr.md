---
outline: [2, 3]
prev:
  text: "charAt"
  link: "/v1/api/string/charAt/fr"
next:
  text: "slice"
  link: "/v1/api/string/slice/fr"
---

# at

La méthode **`at()`** retourne le caractère à l'index spécifié dans une chaîne de caractères, avec support des index négatifs.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/string/at/examples/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntaxe

### Signature classique

```typescript
function at(
	input: string,
	index: number
): string | undefined
```

### Signature currifiee

```typescript
function at<
	GenericInput extends string
>(
	index: number
): (input: GenericInput) => string | undefined
```

## Paramètres

- `input` : La chaîne de caractères dans laquelle récupérer le caractère.
- `index` : L'index du caractère à retourner. Peut être négatif pour compter depuis la fin (-1 pour le dernier caractère).

## Valeur de retour

Une chaîne de caractères représentant le caractère à l'index spécifié, ou `undefined` si l'index est hors limites.

## Exemples

### Extraire l'extension de fichiers

<MonacoTSEditor
  src="/v1/api/string/at/examples/extractExtension.doc.ts"
  majorVersion="v1"
  height="300px"
/>

### Filtrer par dernier caractère

<MonacoTSEditor
  src="/v1/api/string/at/examples/checkLastChar.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Voir aussi

- [`charAt`](/v1/api/string/charAt/fr) - Retourne le caractère à un index (sans support des index négatifs)
- [`indexOf`](/v1/api/string/indexOf/fr) - Trouve l'index d'une sous-chaîne

## Sources

- [MDN Web Docs - String.prototype.at()](https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Reference/Global_Objects/String/at)
