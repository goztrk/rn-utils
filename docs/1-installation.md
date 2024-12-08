# Installation

Add this to your project as a submodule:

```bash
git submodule add git@github.com:goztrk/rn-utils.git lib/rn-utils
```

Then run `git submodule update --init --recursive` to clone the submodule.

Update your `tsconfig.json` to include the new module:

```json
"paths": {
  "@rn-utils/*": ["./lib/rn-utils/src/*"]
}
```
