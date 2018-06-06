# Requires all propTypes to be wrapped with call to exact. (require-exact-proptypes)

Many organizations choose to detail the usage of ```prop-types-exact``` by AirBnb to be a best practice. This rule enforces its usage.


## Rule Details

_This eslint rule requires that the ```prop-types-exact``` package be imported as ```exact```_

Examples of **incorrect** code for this rule:

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

Examples of **correct** code for this rule:

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

## Further Reading

For more information about the ```prop-types-exact``` package visit https://github.com/airbnb/prop-types-exact.
