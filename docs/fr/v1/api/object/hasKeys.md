---
outline: [2, 3]
description: "La méthode hasKeys() vérifie si un objet possède certaines clés (type guard)."
prev:
  text: "to"
  link: "/fr/v1/api/object/to"
next:
  text: "discriminate"
  link: "/fr/v1/api/object/discriminate"
---

# hasKeys

La méthode **`hasKeys()`** vérifie si un objet possède certaines clés (type guard).

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/object/hasKeys/tryout.doc.ts"
  majorVersion="v1"
  height="500px"
/>

## Syntaxe

### Signature classique

```typescript
function hasKeys<
	GenericObject extends object,
	GenericKeys extends keyof GenericObject
>(
	partialObject: GenericObject,
	keys: GenericKeys | GenericKeys[]
): partialObject is RequiredKeys<GenericObject, NoInfer<GenericKeys>>
```

### Signature currifiee

```typescript
function hasKeys<
	GenericObject extends object,
	GenericKeys extends keyof GenericObject
>(
	keys: GenericKeys | GenericKeys[]
): (partialObject: GenericObject) => partialObject is RequiredKeys<GenericObject, NoInfer<GenericKeys>>
```

## Paramètres

- `partialObject` : L'objet à vérifier (peut avoir des propriétés optionnelles).
- `keys` : La ou les clés dont on veut vérifier la présence.

## Valeur de retour

Un booléen indiquant si les clés sont présentes. Agit comme un type guard qui affine le type.

## Voir aussi

- [`discriminate`](/fr/v1/api/object/discriminate) - Discrimine un objet par la valeur d'une propriété
