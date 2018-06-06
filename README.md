# eslint-plugin-require-exact-proptypes

[![npm version](https://badge.fury.io/js/eslint-plugin-require-exact-proptypes.svg)](https://badge.fury.io/js/eslint-plugin-require-exact-proptypes)
[![Build Status](https://travis-ci.org/patrick-addepar/eslint-plugin-require-exact-proptypes.svg?branch=master)](https://travis-ci.org/patrick-addepar/eslint-plugin-require-exact-proptypes)

An eslint plugin to enforce the usage of the [prop-types-exact](https://github.com/airbnb/prop-types-exact) package by AirBnb.

_Note on usage: This eslint rule requires that the ```prop-types-exact``` package be imported as ```exact```_

## Rule Cases

### Good

```jsx
import React from 'react';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';

const Foo = props => <span>Bar is: { props.bar }</span>;

Foo.propTypes = exact({ bar: PropTypes.string, });

export default Foo;
```
-- or --
```jsx
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';

export default class Foo extends Component {
    
    static propTypes = exact({ bar: PropTypes.string });

    render() { 
        return <span>Bar is: { props.bar }</span>;
    }
}
```

### Bad
```jsx
import React from 'react';
import PropTypes from 'prop-types';

const Foo = props => <span>Bar is: { props.bar }</span>;

Foo.propTypes = { bar: PropTypes.string, };

export default Foo;
```
-- or --
```jsx
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Foo extends Component {
    
    static propTypes = { bar: PropTypes.string };

    render() { 
        return <span>Bar is: { props.bar }</span>;
    }
}
```

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
        "require-exact-proptypes/require-exact-proptypes": 2
    }
}
```




