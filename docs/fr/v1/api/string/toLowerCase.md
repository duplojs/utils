---
outline: [2, 3]
description: "La méthode toLowerCase() retourne une nouvelle chaîne de caractères avec tous les caractères en minuscules."
prev:
  text: "uncapitalize"
  link: "/fr/v1/api/string/uncapitalize"
next:
  text: "toUpperCase"
  link: "/fr/v1/api/string/toUpperCase"
---


# toLowerCase

La méthode **`toLowerCase()`** retourne une nouvelle chaîne de caractères avec tous les caractères en minuscules.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/string/toLowerCase/tryout.doc.ts"
  majorVersion="v1"
  height="250px"
/>

## Syntaxe

```typescript
function toLowerCase<
	GenericInput extends string
>(
	input: GenericInput
): Lowercase<GenericInput>;
```

## Paramètres

- `input` : La chaîne de caractères à modifier. Le type est générique (`GenericInput extends string`) pour permettre une inférence précise du type littéral.

### Valeur de retour

Une nouvelle chaîne de caractères avec tous les caractères en minuscules. Le type de retour est inféré précisément grâce au type utilitaire `Lowercase<GenericInput>` de TypeScript.

## Voir aussi 

- [`toUpperCase`](/fr/v1/api/string/toUpperCase)
- [`capitalize`](/fr/v1/api/string/capitalize)
- [`uncapitalize`](/fr/v1/api/string/uncapitalize)

## Sources

- [MDN - String.prototype.toLowerCase()](https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) - Méthode JavaScript utilisée en interne
- [TypeScript - Lowercase&lt;StringType&gt;](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#lowercasestringtype) - Type utilitaire TypeScript pour l'inférence de type
