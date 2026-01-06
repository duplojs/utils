# AGENTS — Contexte projet

## Présentation
`@duplojs/utils` est une librairie d’utilitaires TypeScript (NPM) pensée pour la robustesse, la lisibilite et un typage strict. Elle regroupe des briques essentielles au meme endroit pour eviter la multiplication des dependances et combler les limites des APIs natives trop permissives.

La librairie est organisee par namespaces (`DArray`, `DObject`, etc.) et couvre :
- utilitaires generaux par type
- parsing de donnees (`DDataParser`)
- outils orientes DDD (`DClean`)
- concepts monadiques (`DEither`)
- pattern matching (`DPattern`)

## Philosophie

- Programmation fonctionnelle et fonctions pures.
- Immutabilite par defaut: les fonctions retournent de nouvelles valeurs.
- Compatibilite `pipe`: privilegier des fonctions unaires pour composer.
- Curryfication via overloads (classique + curryfie) sans duplications de symboles.
- Typage strict: preferer des signatures precises pour eviter les cas ambigus.
- DX orientee lecture: exemples courts, types explicites quand utile.

## Comment se reperer

- Partir du besoin: transformation de donnees, validation, ou modelisation DDD.
- Identifier le namespace associe, puis chercher la fonction qui correspond au verbe (map, filter, merge, parse, match...).
- Utiliser la forme curryfiee quand on compose plusieurs etapes, surtout avec `pipe`.
- Si un usage semble ambigu, chercher une variante predicate ou un helper de type guard.
- Garder en tete que `Either` formalise les erreurs et que `DataParser` sert a decrire des schemas valides.
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

## Repertoires de travail
- `scripts/` : code source
  - `scripts/common/` → common
  - `scripts/object/` → DObject
  - `scripts/array/` → DArray
  - …
- `docs/` : documentation
- `tests/` : tests
- `jsDoc/` : generation de doc API
