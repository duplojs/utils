---
outline: [2, 3]
prev:
  text: "concat"
  link: "/v1/api/string/concat/fr"
next:
  text: "String"
  link: "/v1/api/string/fr"
---

# isKeyof

La méthode **`isKeyof()`** vérifie si une clé existe dans un objet et affine le type de la clé en conséquence.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/string/isKeyof/examples/tryout.doc.ts"
  majorVersion="v1"
  height="250px"
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

## Exemples

<MonacoTSEditor
  src="/v1/api/string/isKeyof/examples/typeGuard.doc.ts"
  majorVersion="v1"
  height="350px"
/>

:bulb: **Astuce** : Cette fonction est particulièrement utile pour les type guards et permet d'affiner le type d'une clé dynamique.

### Filtrer les clés valides

<MonacoTSEditor
  src="/v1/api/string/isKeyof/examples/filterValidKeys.doc.ts"
  majorVersion="v1"
  height="200px"
/>

### Accès sécurisé aux propriétés

<MonacoTSEditor
  src="/v1/api/string/isKeyof/examples/safeAccess.doc.ts"
  majorVersion="v1"
  height="200px"
/>

### Valider une clé avec Either

<MonacoTSEditor
  src="/v1/api/string/isKeyof/examples/validateKeys.doc.ts"
  majorVersion="v1"
  height="240px"
/>

## Voir aussi

- [`includes`](/v1/api/string/includes/fr) - Vérifie si une sous-chaîne est présente
- [`startsWith`](/v1/api/string/startsWith/fr) - Vérifie si une chaîne commence par une sous-chaîne
- [`endsWith`](/v1/api/string/endsWith/fr) - Vérifie si une chaîne se termine par une sous-chaîne

## Sources

- [TypeScript - Type Guards](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates) - Documentation sur les type guards
