---
outline: [2, 3]
prev:
  text: "toLowerCase"
  link: "/v1/api/string/toLowerCase/fr"
next:
  text: "normalize"
  link: "/v1/api/string/normalize/fr"
---

# toUpperCase

La méthode **`toUpperCase()`** retourne une nouvelle chaîne de caractères avec tous les caractères en majuscules.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/string/toUpperCase/examples/tryout.doc.ts"
  majorVersion="v1"
  height="250px"
/>

## Syntaxe

```typescript
function toUpperCase<
	GenericInput extends string
>(
	input: GenericInput
): Uppercase<GenericInput>;
```

## Paramètres

- `input` : La chaîne de caractères à modifier. Le type est générique (`GenericInput extends string`) pour permettre une inférence précise du type littéral.

### Valeur de retour

Une nouvelle chaîne de caractères avec tous les caractères en majuscules. Le type de retour est inféré précisément grâce au type utilitaire `Uppercase<GenericInput>` de TypeScript.

## Voir aussi

- [toLowerCase](/v1/api/string/toLowerCase/fr) : Convertit toute la chaîne en minuscules.
- [capitalize](/v1/api/string/capitalize/fr) : Met en majuscule la première lettre d'une chaîne.
- [normalize](/v1/api/string/normalize/fr) : Normalise une chaîne Unicode selon une forme spécifique.

## Sources

- [MDN Web Docs - String.prototype.toUpperCase()](https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
- [TypeScript - Uppercase&lt;StringType&gt;](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#uppercasestringtype) - Type utilitaire TypeScript pour l'inférence de type