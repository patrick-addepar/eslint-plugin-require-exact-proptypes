# eslint-plugin-require-exact-proptypes

Enforces the usage of prop-types-exact package.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-require-exact-proptypes`:

```
$ npm install eslint-plugin-require-exact-proptypes --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-require-exact-proptypes` globally.

## Usage

Add `require-exact-proptypes` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "require-exact-proptypes"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "require-exact-proptypes/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





