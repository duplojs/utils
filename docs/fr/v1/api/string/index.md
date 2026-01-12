---
outline: [2, 3]
description: "Fonctions pour manipuler les chaînes de caractères de manière immutable et type-safe. Toutes les fonctions préservent la chaîne originale et retournent une nouvelle valeur."
prev:
  text: 'Generator'
  link: '/fr/v1/api/generator/'
next:
  text: 'Number'
  link: '/fr/v1/api/number/'
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

### [capitalize](/fr/v1/api/string/capitalize)
Met en majuscule la première lettre d'une chaîne.

### [uncapitalize](/fr/v1/api/string/uncapitalize)
Met en minuscule la première lettre d'une chaîne.

### [toLowerCase](/fr/v1/api/string/toLowerCase)
Convertit toute la chaîne en minuscules.

### [toUpperCase](/fr/v1/api/string/toUpperCase)
Convertit toute la chaîne en majuscules.

### [normalize](/fr/v1/api/string/normalize)
Normalise une chaîne Unicode selon une forme spécifique.

### [repeat](/fr/v1/api/string/repeat)
Répète une chaîne un nombre de fois spécifié.

### [replace](/fr/v1/api/string/replace)
Remplace la première occurrence d'un motif dans une chaîne.

### [replaceAll](/fr/v1/api/string/replaceAll)
Remplace toutes les occurrences d'un motif dans une chaîne.

## Recherche et test

### [includes](/fr/v1/api/string/includes)
Vérifie si une chaîne contient une sous-chaîne.

### [startsWith](/fr/v1/api/string/startsWith)
Vérifie si une chaîne commence par une sous-chaîne spécifique.

### [endsWith](/fr/v1/api/string/endsWith)
Vérifie si une chaîne se termine par une sous-chaîne spécifique.

### [indexOf](/fr/v1/api/string/indexOf)
Retourne l'index de la première occurrence d'une sous-chaîne.

### [lastIndexOf](/fr/v1/api/string/lastIndexOf)
Retourne l'index de la dernière occurrence d'une sous-chaîne.

### [search](/fr/v1/api/string/search)
Recherche une correspondance avec une expression régulière.

### [match](/fr/v1/api/string/match)
Récupère les correspondances d'une expression régulière.

### [matchAll](/fr/v1/api/string/matchAll)
Récupère toutes les correspondances d'une expression régulière avec leurs groupes.

## Extraction

### [charAt](/fr/v1/api/string/charAt)
Retourne le caractère à un index spécifique.

### [at](/fr/v1/api/string/at)
Retourne le caractère à un index (supporte les index négatifs).

### [slice](/fr/v1/api/string/slice)
Extrait une section d'une chaîne.

### [substring](/fr/v1/api/string/substring)
Retourne une sous-chaîne entre deux index.

### [split](/fr/v1/api/string/split)
Divise une chaîne en un tableau de sous-chaînes.

## Padding et trim

### [padStart](/fr/v1/api/string/padStart)
Complète le début d'une chaîne jusqu'à une longueur donnée.

### [padEnd](/fr/v1/api/string/padEnd)
Complète la fin d'une chaîne jusqu'à une longueur donnée.

### [trim](/fr/v1/api/string/trim)
Supprime les espaces en début et fin de chaîne.

### [trimStart](/fr/v1/api/string/trimStart)
Supprime les espaces en début de chaîne.

### [trimEnd](/fr/v1/api/string/trimEnd)
Supprime les espaces en fin de chaîne.

## Utilitaires

### [concat](/fr/v1/api/string/concat)
Concatène plusieurs chaînes ensemble.

### [sort](/fr/v1/api/string/sort)
Trie un tableau de chaînes en ordre croissant ou décroissant.

### [sortCompare](/fr/v1/api/string/sortCompare)
Compare deux chaînes avec des règles de tri sensibles à la locale.

### [isKeyof](/fr/v1/api/string/isKeyof)
Vérifie si une chaîne est une clé valide d'un objet (type guard).
