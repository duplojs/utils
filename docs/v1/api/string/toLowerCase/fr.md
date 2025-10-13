---
outline: [2, 3]
prev:
  text: "uncapitalize"
  link: "/v1/api/string/uncapitalize/fr"
next:
  text: "toUpperCase"
  link: "/v1/api/string/toUpperCase/fr"
---


# toLowerCase

La méthode **`toLowerCase()`** retourne une nouvelle chaîne de caractères avec tous les caractères en minuscules.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/string/toLowerCase/examples/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntaxe

```typescript
function toLowerCase<
	GenericString extends string
>(
	input: GenericString
): Lowercase<GenericString>;
```

## Paramètres

- `input` : La chaîne de caractères à modifier. Le type est générique (`GenericString extends string`) pour permettre une inférence précise du type littéral.

### Valeur de retour

Une nouvelle chaîne de caractères avec tous les caractères en minuscules. Le type de retour est inféré précisément grâce au type utilitaire `Lowercase<GenericString>` de TypeScript.

## Exemples

### Extraire le nom d'utilsateur d'une address mail

<MonacoTSEditor
  src="/v1/api/string/toLowerCase/examples/extractUsernameInEmail.doc.ts"
  majorVersion="v1"
  height="250px"
/>

### Normaliser et diviser une chaîne

<MonacoTSEditor
  src="/v1/api/string/toLowerCase/examples/normalizeAndSplit.doc.ts"
  majorVersion="v1"
  height="250px"
/>

## Voir aussi 

- [`toUpperCase`](/v1/api/string/toUpperCase/fr)
- [`capitalize`](/v1/api/string/capitalize/fr)
- [`uncapitalize`](/v1/api/string/uncapitalize/fr)

## Sources

- [MDN - String.prototype.toLowerCase()](https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) - Méthode JavaScript utilisée en interne
- [TypeScript - Lowercase&lt;StringType&gt;](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#lowercasestringtype) - Type utilitaire TypeScript pour l'inférence de type
