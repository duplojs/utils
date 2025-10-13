---
outline: [2, 3]
prev:
  text: "toUpperCase"
  link: "/v1/api/string/toUpperCase/fr"
next:
  text: "repeat"
  link: "/v1/api/string/repeat/fr"
---

# normalize

La méthode **`normalize()`** retourne une nouvelle chaîne de caractères normalisée selon la forme Unicode spécifiée.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/string/normalize/examples/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
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

## Exemples

### Normaliser des accents

<MonacoTSEditor
  src="/v1/api/string/normalize/examples/normalizeAccents.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Voir aussi

- [toUpperCase](/v1/api/string/toUpperCase/fr) : Convertit toute la chaîne en majuscules.
- [toLowerCase](/v1/api/string/toLowerCase/fr) : Convertit toute la chaîne en minuscules.
- [repeat](/v1/api/string/repeat/fr) : Répète une chaîne un nombre spécifié de fois.
- [trim](/v1/api/string/trim/fr) : Supprime les espaces blancs au début et à la fin d'une chaîne.

## Sources

- [MDN Web Docs - String.prototype.normalize()](https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Reference/Global_Objects/String/normalize)