---
outline: [2, 3]
prev:
  text: "getProperty"
  link: "/v1/api/object/getProperty/fr"
next:
  text: "pick"
  link: "/v1/api/object/pick/fr"
---

# getDeepProperty

La méthode **`getDeepProperty()`** récupère la valeur d'une propriété profonde via un chemin (path notation).

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/object/getDeepProperty/examples/tryout.doc.ts"
  majorVersion="v1"
  height="250px"
/>

## Syntaxe

```typescript
type ObjectProjection<
	GenericObject extends object,
> = FlatObject<GenericObject> extends infer InferredResult extends object
	? Omit<
		Pick<
			InferredResult,
			GetPropsWithValueExtends<
				InferredResult,
				EligibleEqual
			>
		>,
		`${string}[${string}]${string}`
	>
	: never;
```

### Signature classique

```typescript
function getDeepProperty<
	GenericInput extends object,
	GenericObjectProjection extends ObjectProjection<GenericInput>,
	GenericPath extends keyof GenericObjectProjection
>(
	input: GenericInput,
	path: GenericPath
): GenericObjectProjection[GenericPath]
```

### Signature currifiee

```typescript
function getDeepProperty<
	GenericInput extends object,
	GenericObjectProjection extends ObjectProjection<GenericInput>,
	GenericPath extends keyof GenericObjectProjection
>(
	path: GenericPath
): (input: GenericInput) => GenericObjectProjection[GenericPath]
```

## Paramètres

- `input` : L'objet source.
- `path` : Le chemin vers la propriété (ex: "user.address.city").

## Valeur de retour

La valeur de la propriété profonde spécifiée, avec son type exact.

## Voir aussi

- [`getProperty`](/v1/api/object/getProperty/fr) - Récupère une propriété de premier niveau
