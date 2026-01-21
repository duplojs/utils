---
outline: [2, 3]
description: "La fonction join() joint des segments de chemin et normalise le résultat."
prev:
  text: "normalize"
  link: "/fr/v1/api/common/path/normalize"
next:
  text: "resolveFrom"
  link: "/fr/v1/api/common/path/resolveFrom"
---

# join

La fonction **`join()`** joint des segments de chemin et normalise le résultat.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/path/join/tryout.doc.ts"
  majorVersion="v1"
  height="208px"
/>

## Syntaxe

```typescript
function join<
	GenericSegment extends string
>(
	...segments: readonly GenericSegment[]
): string;
```

## Paramètres

- `segments` : Les segments à joindre.

## Valeur de retour

Un chemin normalisé avec les séparateurs adéquats.

## Voir aussi

- [`normalize`](/fr/v1/api/common/path/normalize) - Normalise un chemin
- [`resolveFrom`](/fr/v1/api/common/path/resolveFrom) - Résout une liste de segments
