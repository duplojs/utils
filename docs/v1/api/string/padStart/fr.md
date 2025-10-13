---
outline: [2, 3]
prev:
  text: "split"
  link: "/v1/api/string/split/fr"
next:
  text: "padEnd"
  link: "/v1/api/string/padEnd/fr"
---

# padStart

La méthode **`padStart()`** complète la chaîne courante avec une chaîne de caractères donnée afin d'obtenir une chaîne de longueur fixe. Le remplissage est appliqué au début de la chaîne courante.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/string/padStart/examples/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntaxe

### Signature classique

```typescript
function padStart<
	GenericInput extends string
>(
	input: GenericInput,
	targetLength: number,
	padString: string
): string
```

### Signature currifiée

```typescript
function padStart<
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

Une nouvelle chaîne de caractères de la longueur indiquée, complétée avec la chaîne fournie depuis le début.

## Exemples

SOON...

## Voir aussi

- [`padEnd`](/v1/api/string/padEnd/fr) - Complète la chaîne à la fin
- [`repeat`](/v1/api/string/repeat/fr) - Répète une chaîne un nombre de fois donné

## Sources

- [MDN Web Docs - String.prototype.padStart()](https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)
