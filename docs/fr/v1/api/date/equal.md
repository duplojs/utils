---
outline: [2, 3]
description: "Vérifie si deux dates sont égales en comparant leurs timestamps normalisés."
prev:
  text: "lessThan"
  link: "/fr/v1/api/date/lessThan"
next:
  text: "between"
  link: "/fr/v1/api/date/between"
---

# equal

Vérifie si deux dates sont égales en comparant leurs timestamps normalisés.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/equal/tryout.doc.ts"
  majorVersion="v1"
  height="208px"
/>

## Syntaxe

### Signature classique

```typescript
function equal(
	first: TheDate | SerializedTheDate,
	second: TheDate | SerializedTheDate
): boolean
```

### Signature currifiée

```typescript
function equal(
	second: TheDate | SerializedTheDate
): (first: TheDate | SerializedTheDate) => boolean
```

## Paramètres

- `first` : Première date à comparer.
- `second` : Seconde date utilisée comme référence.

## Valeur de retour

`true` lorsque les deux dates représentent le même timestamp, sinon `false`.

## Voir aussi

- [`lessThan`](/fr/v1/api/date/lessThan)
- [`between`](/fr/v1/api/date/between)
