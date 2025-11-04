---
outline: [2, 3]
prev:
  text: "padStart"
  link: "/v1/api/string/padStart/fr"
next:
  text: "trim"
  link: "/v1/api/string/trim/fr"
---

# padEnd

La méthode **`padEnd()`** complète la chaîne courante avec une chaîne de caractères donnée afin d'obtenir une chaîne de longueur fixe. Le remplissage est appliqué à la fin de la chaîne courante.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/string/padEnd/examples/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntaxe

### Signature classique

```typescript
function padEnd<
	GenericInput extends string
>(
	input: GenericInput,
	targetLength: number,
	padString: string
): string
```

### Signature currifiée

```typescript
function padEnd<
	GenericInput extends string
>(
	targetLength: number,
	padString: string
): (input: GenericInput) => string
```

## Paramètres

- `input` : La chaîne de caractères à compléter.
- `targetLength` : La longueur de la chaîne résultante une fois complétée.
- `padString` : La chaîne de caractères à utiliser pour compléter la chaîne courante.

## Valeur de retour

Une nouvelle chaîne de caractères de la longueur indiquée, complétée avec la chaîne fournie depuis la fin.

## Exemples

### Formater des langages

<MonacoTSEditor
  src="/v1/api/string/padEnd/examples/formatLanguages.doc.ts"
  majorVersion="v1"
  height="200px"
/>

### Formater des nombres

<MonacoTSEditor
  src="/v1/api/string/padEnd/examples/formatNumbers.doc.ts"
  majorVersion="v1"
  height="180px"
/>

## Voir aussi

- [`padStart`](/v1/api/string/padStart/fr) - Complète la chaîne au début
- [`repeat`](/v1/api/string/repeat/fr) - Répète une chaîne un nombre de fois donné

## Sources

- [MDN Web Docs - String.prototype.padEnd()](https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd)
