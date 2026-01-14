---
outline: [2, 3]
description: "La méthode normalize() retourne une nouvelle chaîne de caractères normalisée selon la forme Unicode spécifiée."
prev:
  text: "toUpperCase"
  link: "/fr/v1/api/string/toUpperCase"
next:
  text: "repeat"
  link: "/fr/v1/api/string/repeat"
---

# normalize

La méthode **`normalize()`** retourne une nouvelle chaîne de caractères normalisée selon la forme Unicode spécifiée.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/string/normalize/tryout.doc.ts"
  majorVersion="v1"
  height="145px"
/>

## Syntaxe

```typescript
type NormalizeForm = "NFC" | "NFD" | "NFKC" | "NFKD";
```

### Signature classique

```typescript
function normalize<
	GenericInput extends string
>(
	input: GenericInput, 
	form: NormalizeForm
): string;
```

### Signature currifiée

```typescript
function normalize<
	GenericInput extends string
>(
	form: NormalizeForm
): (input: GenericInput) => string;
```

## Paramètres

- `input` : La chaîne de caractères à normaliser.
- `form` : La forme de normalisation Unicode à utiliser. Les options sont :
  - `"NFC"` (Normalization Form C) : Composée, où les caractères accentués sont représentés par un seul code point.
  - `"NFD"` (Normalization Form D) : Décomposée, où les caractères accentués sont représentés par une lettre de base suivie de caractères diacritiques séparés.
  - `"NFKC"` (Normalization Form KC) : Composée et compatible, similaire à NFC mais avec des transformations supplémentaires pour la compatibilité.
  - `"NFKD"` (Normalization Form KD) : Décomposée et compatible, similaire à NFD mais avec des transformations supplémentaires pour la compatibilité.

## Valeur de retour

Une nouvelle chaîne de caractères normalisée selon la forme spécifiée.

## Voir aussi

- [toUpperCase](/fr/v1/api/string/toUpperCase) : Convertit toute la chaîne en majuscules.
- [toLowerCase](/fr/v1/api/string/toLowerCase) : Convertit toute la chaîne en minuscules.
- [repeat](/fr/v1/api/string/repeat) : Répète une chaîne un nombre spécifié de fois.
- [trim](/fr/v1/api/string/trim) : Supprime les espaces blancs au début et à la fin d'une chaîne.

## Sources

- [MDN Web Docs - String.prototype.normalize()](https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Reference/Global_Objects/String/normalize)