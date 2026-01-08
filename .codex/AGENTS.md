# AGENTS — Contexte projet

## Présentation
`@duplojs/utils` est une librairie d’utilitaires TypeScript (NPM) pensée pour la robustesse, la lisibilité et un typage strict. Elle regroupe des briques essentielles au même endroit pour éviter la multiplication des dépendances et combler les limites des APIs natives trop permissives.

La librairie est organisée par namespaces (`DArray`, `DObject`, etc.) et couvre :
- utilitaires généraux par type
- parsing de données (`DDataParser`)
- outils orientés DDD (`DClean`)
- concepts monadiques (`DEither`)
- pattern matching (`DPattern`)

## Philosophie

- Programmation fonctionnelle et fonctions pures.
- Immutabilité par défaut: les fonctions retournent de nouvelles valeurs.
- Compatibilité `pipe`: privilégier des fonctions unaires pour composer.
- Curryfication via overloads (classique + curryfiée) sans duplication de symboles.
- Typage strict: préférer des signatures précises pour éviter les cas ambigus.
- DX orientée lecture: exemples courts, types explicites quand utile.

## Comment se repérer

- Partir du besoin: transformation de données, validation, ou modélisation DDD.
- Identifier le namespace associé, puis chercher la fonction qui correspond au verbe (map, filter, merge, parse, match...).
- Utiliser la forme curryfiée quand on compose plusieurs étapes, surtout avec `pipe`.
- Si un usage semble ambigu, chercher une variante predicate ou un helper de type guard.
- Garder en tête que `Either` formalise les erreurs et que `DataParser` sert à décrire des schémas valides.
- Pour le DDD, `Clean` regroupe les briques (NewType, Entity, Repository, UseCase) et leur typage.

## Namespaces
common
DArray
DNumber
DEither
DObject
DString
DGenerator
DPattern
DDataParser
DDate
DClean

## Répertoires de travail
- `scripts/` : code source
  - `scripts/common/` → common
  - `scripts/object/` → DObject
  - `scripts/array/` → DArray
  - …
- `docs/` : documentation
- `tests/` : tests
- `jsDoc/` : génération de doc API

## Utilisations des Skills
- À chaque fois que tu dois faire de la documentation dans le dossier `docs/`, utilise le skill writeDocumentation.
- À chaque fois que tu dois faire de la jsDoc dans le dossier `jsDoc/`, utilise le skill writeJsDoc.
- À chaque fois que tu dois faire un test dans le dossier `tests/`, utilise le skill writeUnitTest.
