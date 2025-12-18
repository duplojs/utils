# Introduction

[[toc]]

## Installation

::: code-group
```bash [npm]
npm install @duplojs/utils
```
```bash [yarn]
yarn add @duplojs/utils
```
```bash [pnpm]
pnpm add @duplojs/utils
```
:::

## Démarrage rapide

Il faut commencer par définir les bons paramètres dans votre `tsconfig`.

```json
{
	// ...
	"compilerOptions": {
		// ...
		"strict": true,
		"noImplicitAny": true,
		"strictNullChecks": true,
		"strictFunctionTypes": true,
		"strictBindCallApply": true,
		"strictPropertyInitialization": true,
		"noImplicitThis": true,
		"useUnknownInCatchVariables": true,
		"alwaysStrict": true,
		"noImplicitReturns": true,
		"noUncheckedIndexedAccess": true,
		"noImplicitOverride": true,   
	}
}
```

### La librairie est organisée par domaines :
- [Common](/v1/api/common/fr) Fonctions généralistes qui ne sont pas attribuées particulièrement à un type.
- [Array](/v1/api/array/fr) Fonctions orientées pour manipuler les tableaux et les tuples.
- [Clean](/v1/api/clean/fr) Outils de définition de structures métier.
- [DataParser](/v1/api/data-parser/fr) Création de schémas de validation de données.
- [Date](/v1/api/date/fr) Fonctions de manipulation de dates.
- [Either](/v1/api/either/fr) Outils de définition de résultats.
- [Generator](/v1/api/generator/fr) Fonctions pour manipuler les itérables avec des générateurs.
- [Number](/v1/api/number/fr) Fonctions de manipulation de nombres.
- [Object](/v1/api/object/fr) Fonctions de manipulation d'objets.
- [Pattern](/v1/api/pattern/fr) Outils de pattern matching.
- [String](/v1/api/string/fr) Fonctions de manipulation de chaînes de caractères.

### Si vous avez des contrainte de treeschaking
Vous pouvez importer les les diférente parti de la librairy de cette manier :
```ts
import * as Common from "@duplojs/utils/common";
import * as A from "@duplojs/utils/array";
import * as C from "@duplojs/utils/clean";
import * as DP from "@duplojs/utils/dataParser";
import * as DPE from "@duplojs/utils/dataParserExtended";
import * as D from "@duplojs/utils/date";
import * as E from "@duplojs/utils/either";
import * as G from "@duplojs/utils/generator";
import * as N from "@duplojs/utils/number";
import * as O from "@duplojs/utils/object";
import * as P from "@duplojs/utils/pattern";
import * as S from "@duplojs/utils/string";
```

