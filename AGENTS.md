# AGENTS — Contexte projet

## Présentation
Librairie d’utilitaires TypeScript publiée sur NPM, orientée robustesse et qualité du code.

La librairie est organisée par namespaces (`DArray`, `DObject`, etc.) et couvre :
- utilitaires généraux par type
- parsing de données (`DDataParser`)
- outils orientés DDD (`DClean`)
- concepts monadiques (`DEither`)
- pattern matching (`DPattern`)

Philosophie :
- programmation fonctionnelle
- immutabilité
- compatibilité avec un système de `pipe`
- chaque fonction supporte l’appel classique et currifié via overloads
  (sans duplication de symbole, sauf si la fonction ne possède qu’un paramètre)

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

## Structure de la documentation
- `docs/{fr,en}/index.md`: pages homes
- `docs/{fr,en}/latest/guide/*.md` : guides
- `docs/{fr,en}/latest/api/{namespace}/index.md` : sommaire + présentation du namespace
- `docs/{fr,en}/latest/api/{namespace}/{function}/index.md` : documentation d’une fonction
- `docs/public/latest/api/{namespace}/{function}/tryout.doc.ts` : exemple simple
- `docs/public/latest/api/{namespace}/{function}/otherExample.doc.ts` : cas spécifiques (rare)

## Format obligatoire d’une page API (fonction)
Chaque page `docs/{fr,en}/lastest/api/{namespace}/{function}/index.md` doit contenir :

### Frontmatter YAML
- `outline`: [2, 3]
- `prev`: chemin relatif vers la page précédente
- `next`: chemin relatif vers la page suivante

### Contenu
- `# NomDeLaFonction`
- Description courte
- Exemple interactif avec `<MonacoTSEditor>`
- Syntaxe (classique + currifiée si existante)
- Paramètres
- Valeur de retour
- Section **Voir aussi**

## Structure des tests
Chaque fonction possède un fichier de test correspondant.

Correspondance :
- `scripts/number/divide.ts` → `tests/number/divide.test.ts`
- `scripts/object/getProperty.ts` → `tests/object/getProperty.test.ts`

### Structure d’un fichier de test
- Chaque fichier contient un `describe`
  - le `name` du `describe` est **le nom de la fonction testée**
- À l’intérieur :
  - plusieurs `it`
  - chaque `it` décrit **un cas de test précis**

Chaque test comprend systématiquement :
1. un test du comportement de la fonction
2. un test de type via `ExpectType`

Exemple de test de type :
```ts
type check = ExpectType<
  typeof valeurTestée,
  TypeAttendu,
  "strict" // obligatoirement strict et rien d'autre
>
```