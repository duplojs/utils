---
outline: [2, 3]
description: "La fonction to() convertit une valeur primitive en sa representation en chaine de caracteres."
prev:
  text: "concat"
  link: "/fr/v1/api/string/concat"
next:
  text: "isKeyof"
  link: "/fr/v1/api/string/isKeyof"
---

# to

La **`to()`** fonction convertit une valeur primitive en sa representation en chaine de caracteres.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/string/to/tryout.doc.ts"
  majorVersion="v1"
  height="187px"
/>

## Syntaxe

### Signature classique

```typescript
function to<
	GenericValue extends string | boolean | null | number | undefined | bigint
>(
	value: GenericValue
): `${GenericValue}`
```

## Parametres

- `value` : La valeur primitive a convertir.

## Valeur de retour

Une representation en chaine de caracteres de la valeur d'entree, en preservant les types litteraux quand c'est possible.

## Voir aussi

- [`concat`](/fr/v1/api/string/concat) - Concatene plusieurs chaines
- [`toLowerCase`](/fr/v1/api/string/toLowerCase) - Convertit une chaine en minuscules
