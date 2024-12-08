# Prettier

## Setup

```bash
npm install --save-dev prettier @ianvs/prettier-plugin-sort-imports
```

Add the following script to your `package.json`:

```json
"format": "prettier --write ./src"
```


## `.prettierrc` contents

```json
{
    "printWidth": 88,
    "tabWidth": 2,
    "useTabs": false,
    "semi": false,
    "singleQuote": true,
    "quoteProps": "as-needed",
    "jsxSingleQuote": false,
    "trailingComma": "es5",
    "bracketSpacing": true,
    "bracketSameLine": false,
    "arrowParens": "always",
    "rangeStart": 0,
    "requirePragma": false,
    "insertPragma": false,
    "proseWrap": "preserve",
    "htmlWhitespaceSensitivity": "css",
    "endOfLine": "lf",
    "embeddedLanguageFormatting": "auto",
    "importOrderTypeScriptVersion": "5.3.3",
    "importOrder": [
        "<BUILTIN_MODULES>",
        "",
        "^(react|react-dom/client)$",
        "",
        "<THIRD_PARTY_MODULES>",
        "",
        "^@rn-utils/(.*)$",
        "",
        "^@/features/(.*)$",
        "",
        "^@/(.*)$",
        "",
        "^[./]",
        ""
    ],
    "importOrderParserPlugins": ["typescript", "jsx", "decorators"],
    "plugins": [
        "@ianvs/prettier-plugin-sort-imports"
    ],
    "overrides": [
        {
            "files": [
                "*.yml",
                "*.yaml",
                "*.json"
            ],
            "options": {
                "tabWidth": 2
            }
        }
    ]
}
