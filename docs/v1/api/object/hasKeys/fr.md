---
outline: [2, 3]
prev:
  text: "to"
  link: "/v1/api/object/to/fr"
next:
  text: "discriminate"
  link: "/v1/api/object/discriminate/fr"
---

# hasKeys

La méthode **`hasKeys()`** vérifie si un objet possède certaines clés (type guard).

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/object/hasKeys/examples/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
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

- [`discriminate`](/v1/api/object/discriminate/fr) - Discrimine un objet par la valeur d'une propriété
