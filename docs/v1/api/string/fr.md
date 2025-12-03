---
outline: [2, 3]
prev:
  text: 'Common'
  link: '/v1/api/common/fr'
next:
  text: 'Number'
  link: '/v1/api/number/fr'
---

# String

Fonctions pour manipuler les chaînes de caractères de manière immutable et type-safe. Toutes les fonctions préservent la chaîne originale et retournent une nouvelle valeur.

## Comment faire les imports ?

La bibliothèque expose les namespaces `DString` et `S` depuis l'entrée principale **ou** en import direct (tree-shaking friendly), ce qui permet de ne charger que ce dont vous avez besoin.

```typescript
import { DString, S } from "@duplojs/utils";
import * as DString from "@duplojs/utils/string";
import * as S from "@duplojs/utils/string";
```

## Transformation

### [capitalize](/v1/api/string/capitalize/fr)
Met en majuscule la première lettre d'une chaîne.

### [uncapitalize](/v1/api/string/uncapitalize/fr)
Met en minuscule la première lettre d'une chaîne.

### [toLowerCase](/v1/api/string/toLowerCase/fr)
Convertit toute la chaîne en minuscules.

### [toUpperCase](/v1/api/string/toUpperCase/fr)
Convertit toute la chaîne en majuscules.

### [normalize](/v1/api/string/normalize/fr)
Normalise une chaîne Unicode selon une forme spécifique.

### [repeat](/v1/api/string/repeat/fr)
Répète une chaîne un nombre de fois spécifié.

### [replace](/v1/api/string/replace/fr)
Remplace la première occurrence d'un motif dans une chaîne.

### [replaceAll](/v1/api/string/replaceAll/fr)
Remplace toutes les occurrences d'un motif dans une chaîne.

## Recherche et test

### [includes](/v1/api/string/includes/fr)
Vérifie si une chaîne contient une sous-chaîne.

### [startsWith](/v1/api/string/startsWith/fr)
Vérifie si une chaîne commence par une sous-chaîne spécifique.

### [endsWith](/v1/api/string/endsWith/fr)
Vérifie si une chaîne se termine par une sous-chaîne spécifique.

### [indexOf](/v1/api/string/indexOf/fr)
Retourne l'index de la première occurrence d'une sous-chaîne.

### [lastIndexOf](/v1/api/string/lastIndexOf/fr)
Retourne l'index de la dernière occurrence d'une sous-chaîne.

### [search](/v1/api/string/search/fr)
Recherche une correspondance avec une expression régulière.

### [match](/v1/api/string/match/fr)
Récupère les correspondances d'une expression régulière.

### [matchAll](/v1/api/string/matchAll/fr)
Récupère toutes les correspondances d'une expression régulière avec leurs groupes.

## Extraction

### [charAt](/v1/api/string/charAt/fr)
Retourne le caractère à un index spécifique.

### [at](/v1/api/string/at/fr)
Retourne le caractère à un index (supporte les index négatifs).

### [slice](/v1/api/string/slice/fr)
Extrait une section d'une chaîne.

### [substring](/v1/api/string/substring/fr)
Retourne une sous-chaîne entre deux index.

### [split](/v1/api/string/split/fr)
Divise une chaîne en un tableau de sous-chaînes.

## Padding et trim

### [padStart](/v1/api/string/padStart/fr)
Complète le début d'une chaîne jusqu'à une longueur donnée.

### [padEnd](/v1/api/string/padEnd/fr)
Complète la fin d'une chaîne jusqu'à une longueur donnée.

### [trim](/v1/api/string/trim/fr)
Supprime les espaces en début et fin de chaîne.

### [trimStart](/v1/api/string/trimStart/fr)
Supprime les espaces en début de chaîne.

### [trimEnd](/v1/api/string/trimEnd/fr)
Supprime les espaces en fin de chaîne.

## Utilitaires

### [concat](/v1/api/string/concat/fr)
Concatène plusieurs chaînes ensemble.

### [isKeyof](/v1/api/string/isKeyof/fr)
Vérifie si une chaîne est une clé valide d'un objet (type guard).
