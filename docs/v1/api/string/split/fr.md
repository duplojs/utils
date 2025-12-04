---
outline: [2, 3]
prev:
  text: 'substring'
  link: '/v1/api/string/substring/fr'
next:
  text: 'padStart'
  link: '/v1/api/string/padStart/fr'
---

# split

La méthode **`split()`** divise une chaîne de caractères en un tableau de sous-chaînes en utilisant un séparateur spécifié.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/string/split/examples/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
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

- [`slice`](/v1/api/string/slice/fr) - Extrait une section d'une chaîne
- [`substring`](/v1/api/string/substring/fr) - Retourne une sous-chaîne entre deux index
- [`match`](/v1/api/string/match/fr) - Récupère les correspondances d'une expression régulière

## Sources

- [MDN Web Docs - String.prototype.split()](https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Reference/Global_Objects/String/split)
