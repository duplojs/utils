---
outline: [2, 3]
description: "La méthode betweenThan() vérifie si un nombre se trouve dans un intervalle exclusif. Elle peut être utilisée de manière currifiée pour faciliter la composition fonctionnelle."
prev:
  text: "between"
  link: "/fr/v1/api/number/between"
next:
  text: "Number"
  link: "/fr/v1/api/number/"
---

# betweenThan

La méthode **`betweenThan()`** vérifie si un nombre se trouve dans un intervalle exclusif. Elle peut être utilisée de manière currifiée pour faciliter la composition fonctionnelle.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/number/betweenThan/tryout.doc.ts"
  majorVersion="v1"
  height="292px"
/>

## Syntaxe

### Signature classique

```typescript
function betweenThan<
	GenericInput extends number
>(
	input: GenericInput,
	greaterThan: number,
	lessThan: number
): boolean
```

### Signature currifiée

```typescript
function betweenThan<
	GenericInput extends number
>(
	greaterThan: number,
	lessThan: number
): (input: GenericInput) => boolean
```

## Paramètres

- `input` : Le nombre à évaluer (uniquement en signature classique).
- `greaterThan` : La borne inférieure exclusive.
- `lessThan` : La borne supérieure exclusive.

## Valeur de retour

retourne `true` si `input` est dans l'intervalle `]greaterThan, lessThan[`, `false` sinon.

## Voir aussi

- [`between`](/fr/v1/api/number/between) - Vérifie si un nombre se trouve dans un intervalle inclusif
- [`greaterThan`](/fr/v1/api/number/greaterThan) - Vérifie si un nombre est strictement supérieur (>)
- [`lessThan`](/fr/v1/api/number/lessThan) - Vérifie si un nombre est strictement inférieur (<)
