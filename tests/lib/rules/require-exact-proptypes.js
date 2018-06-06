/**
 * @fileoverview Requires all propTypes to be wrapped with call to exact.
 * @author Patrick Paul
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/require-exact-proptypes"),

RuleTester = require("eslint").RuleTester;

require('babel-eslint');

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const propTypesWithExact = 'class Foo extends Component { } Foo.propTypes = exact({ bar: PropTypes.string })';
const propTypesNoExact = 'class Foo extends Component { } Foo.propTypes = { bar: PropTypes.string }';
const staticPropTypesWithExact = 'class Foo extends Component { static propTypes = exact({ bar: PropTypes.string }) }';
const staticPropTypesNoExact = 'class Foo extends Component { static propTypes = { bar: PropTypes.string } }';

var ruleTester = new RuleTester();

ruleTester.run("require-exact-proptypes", rule, {

    valid: [
        { code: propTypesWithExact, parser: 'babel-eslint'},
        { code: staticPropTypesWithExact, parser: 'babel-eslint'},
    ],

    invalid: [
        {
            code: propTypesNoExact,
            parser: 'babel-eslint',
            errors: [{
                message: "All propType declarations must be wrapped with exact.",
                type: "AssignmentExpression"
            }]
        },
        {
            code: staticPropTypesNoExact,
            parser: 'babel-eslint',
            errors: [{
                message: "All propType declarations must be wrapped with exact.",
                type: "ClassProperty"
            }]
        }
    ]
});
