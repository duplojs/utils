---
outline: [2, 3]
description: "La fonction unwrapGroup() dépaquette toutes les valeurs d'un objet via unwrap(), tout en conservant les mêmes clés."
prev:
  text: "unwrap"
  link: "/fr/v1/api/common/unwrap"
next:
  text: "addWrappedProperties"
  link: "/fr/v1/api/common/addWrappedProperties"
---

# unwrapGroup

La fonction **`unwrapGroup()`** dépaquette toutes les valeurs d'un objet via `unwrap()`, tout en conservant les mêmes clés.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/unwrapGroup/tryout.doc.ts"
  majorVersion="v1"
  height="292px"
/>

## Syntaxe

```typescript
function unwrapGroup<
	GenericGroup extends Record<string, unknown>
>(
	group: GenericGroup
): ComputeResult<GenericGroup>;
```

## Paramètres

- `group` : Objet dont les valeurs peuvent être wrapées ou non.

## Valeur de retour

Un nouvel objet avec les mêmes clés et toutes les valeurs dépaquetées. L'objet d'entrée n'est pas muté.

## Voir aussi

- [`unwrap`](/fr/v1/api/common/unwrap) - Dépaquette une valeur
- [`wrapValue`](/fr/v1/api/common/wrapValue) - Wrappe une valeur
