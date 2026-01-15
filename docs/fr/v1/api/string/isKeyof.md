---
outline: [2, 3]
description: "La méthode isKeyof() vérifie si une clé existe dans un objet et affine le type de la clé en conséquence."
prev:
  text: "to"
  link: "/fr/v1/api/string/to"
next:
  text: "String"
  link: "/fr/v1/api/string/"
---

# isKeyof

La méthode **`isKeyof()`** vérifie si une clé existe dans un objet et affine le type de la clé en conséquence.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/string/isKeyof/tryout.doc.ts"
  majorVersion="v1"
  height="376px"
/>

## Syntaxe

### Signature classique

```typescript
function isKeyof<
	GenericObject extends object,
	GenericKey extends ObjectKey
>(
	key: GenericKey,
	obj: GenericObject
): key is keyof GenericObject & GenericKey
```

### Signature currifiée

```typescript
function isKeyof<
	GenericObject extends object,
	GenericKey extends ObjectKey
>(
	obj: GenericObject
): (key: GenericKey) => key is keyof GenericObject & GenericKey
```

## Paramètres

- `key` : La clé à vérifier (string, number ou symbol).
- `obj` : L'objet dans lequel vérifier l'existence de la clé.

## Valeur de retour

Un booléen indiquant si la clé existe dans l'objet. Le type de retour utilise une assertion de type conditionnelle pour affiner le type de `key` si la condition est vraie.

## Voir aussi

- [`includes`](/fr/v1/api/string/includes) - Vérifie si une sous-chaîne est présente
- [`startsWith`](/fr/v1/api/string/startsWith) - Vérifie si une chaîne commence par une sous-chaîne
- [`endsWith`](/fr/v1/api/string/endsWith) - Vérifie si une chaîne se termine par une sous-chaîne

## Sources

- [TypeScript - Type Guards](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates) - Documentation sur les type guards
