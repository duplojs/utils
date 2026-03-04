---
outline: [2, 3]
description: "La méthode between() vérifie si un nombre se trouve dans un intervalle inclusif. Elle peut être utilisée de manière currifiée pour faciliter la composition fonctionnelle."
prev:
  text: "lessThan"
  link: "/fr/v1/api/number/lessThan"
next:
  text: "betweenThan"
  link: "/fr/v1/api/number/betweenThan"
---

# between

La méthode **`between()`** vérifie si un nombre se trouve dans un intervalle inclusif. Elle peut être utilisée de manière currifiée pour faciliter la composition fonctionnelle.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/number/between/tryout.doc.ts"
  majorVersion="v1"
  height="292px"
/>

## Syntaxe

### Signature classique

```typescript
function between<
	GenericInput extends number
>(
	input: GenericInput,
	greater: number,
	less: number
): boolean
```

### Signature currifiée

```typescript
function between<
	GenericInput extends number
>(
	greater: number,
	less: number
): (input: GenericInput) => boolean
```

## Paramètres

- `input` : Le nombre à évaluer (uniquement en signature classique).
- `greater` : La borne inférieure inclusive.
- `less` : La borne supérieure inclusive.

## Valeur de retour

retourne `true` si `input` est dans l'intervalle `[greater, less]`, `false` sinon.

## Voir aussi

- [`betweenThan`](/fr/v1/api/number/betweenThan) - Vérifie si un nombre se trouve dans un intervalle exclusif
- [`greater`](/fr/v1/api/number/greater) - Vérifie si un nombre est supérieur ou égal (>=)
- [`less`](/fr/v1/api/number/less) - Vérifie si un nombre est inférieur ou égal (<=)
