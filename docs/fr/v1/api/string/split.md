---
outline: [2, 3]
description: "La méthode split() divise une chaîne de caractères en un tableau de sous-chaînes en utilisant un séparateur spécifié."
prev:
  text: 'substring'
  link: '/fr/v1/api/string/substring'
next:
  text: 'padStart'
  link: '/fr/v1/api/string/padStart'
---

# split

La méthode **`split()`** divise une chaîne de caractères en un tableau de sous-chaînes en utilisant un séparateur spécifié.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/string/split/tryout.doc.ts"
  majorVersion="v1"
  height="250px"
/>

## Syntaxe

### Signature classique

```typescript
function split<
	GenericInput extends string, 
	GenericSeparator extends string, 
	GenericLimit extends number
>(
	input: GenericInput, 
	separator: GenericSeparator | RegExp, 
	params?: StringSplitParams<GenericLimit>
): Split<GenericInput, GenericSeparator, GenericLimit>;
```

### Signature currifiée

```typescript
function split<
	GenericInput extends string, 
	GenericSeparator extends string
>(
	separator: GenericSeparator | RegExp
): (input: GenericInput) => Split<GenericInput, GenericSeparator>;
```

## Paramètres

- `input` : La chaîne de caractères à diviser.
- `separator` : La chaîne ou l'expression régulière utilisée pour séparer la chaîne.
- `params` (optionnel) : Un objet contenant `limit`, le nombre maximum de divisions à effectuer.

## Valeur de retour

Un tableau de chaînes de caractères. Le type de retour est inféré grâce au type utilitaire `SplitString`.

## Voir aussi

- [`slice`](/fr/v1/api/string/slice) - Extrait une section d'une chaîne
- [`substring`](/fr/v1/api/string/substring) - Retourne une sous-chaîne entre deux index
- [`match`](/fr/v1/api/string/match) - Récupère les correspondances d'une expression régulière

## Sources

- [MDN Web Docs - String.prototype.split()](https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Reference/Global_Objects/String/split)
