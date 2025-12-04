---
outline: [2, 3]
prev:
  text: "trimEnd"
  link: "/v1/api/string/trimEnd/fr"
next:
  text: "isKeyof"
  link: "/v1/api/string/isKeyof/fr"
---

# concat

La méthode **`concat()`** combine le texte de plusieurs chaînes de caractères et retourne une nouvelle chaîne.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/string/concat/examples/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntaxe

### Signature classique

```typescript
function concat(
	input: string,
	...textsRest: string[]
): string
```

### Signature currifiée

```typescript
function concat<
	GenericInput extends string
>(
	text: string
): (input: GenericInput) => string
```

## Paramètres

- `input` : La chaîne de caractères de base.
- `textsRest` : Une ou plusieurs chaînes de caractères à concaténer avec `input`.

## Valeur de retour

Une nouvelle chaîne de caractères contenant le texte combiné des chaînes fournies.

## Voir aussi

- [`repeat`](/v1/api/string/repeat/fr) - Répète une chaîne un nombre de fois donné
- [`padStart`](/v1/api/string/padStart/fr) - Complète la chaîne au début
- [`padEnd`](/v1/api/string/padEnd/fr) - Complète la chaîne à la fin

## Sources

- [MDN Web Docs - String.prototype.concat()](https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Reference/Global_Objects/String/concat)
