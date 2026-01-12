---
outline: [2, 3]
description: "La méthode toUpperCase() retourne une nouvelle chaîne de caractères avec tous les caractères en majuscules."
prev:
  text: "toLowerCase"
  link: "/fr/v1/api/string/toLowerCase"
next:
  text: "normalize"
  link: "/fr/v1/api/string/normalize"
---

# toUpperCase

La méthode **`toUpperCase()`** retourne une nouvelle chaîne de caractères avec tous les caractères en majuscules.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/string/toUpperCase/tryout.doc.ts"
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

- [toLowerCase](/fr/v1/api/string/toLowerCase) : Convertit toute la chaîne en minuscules.
- [capitalize](/fr/v1/api/string/capitalize) : Met en majuscule la première lettre d'une chaîne.
- [normalize](/fr/v1/api/string/normalize) : Normalise une chaîne Unicode selon une forme spécifique.

## Sources

- [MDN Web Docs - String.prototype.toUpperCase()](https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
- [TypeScript - Uppercase&lt;StringType&gt;](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#uppercasestringtype) - Type utilitaire TypeScript pour l'inférence de type