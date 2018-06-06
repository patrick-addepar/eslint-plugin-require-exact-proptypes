/**
 * @fileoverview Requires all propTypes to be wrapped with call to exact.
 * @author Patrick Paul
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const PROPTYPES_MUST_USE_EXACT =
  "All propType declarations must be wrapped with exact.";

module.exports = {
  meta: {
    docs: {
      description: "Requires all propTypes to be wrapped with call to exact.",
      category: "Best Practices",
      recommended: false
    },
    fixable: "code",
    schema: [
      // fill in your schema
    ]
  },

  create: function(context) {
    function isPropTypesNonClassProperty(node) {
      return node.left.property && node.left.property.name === "propTypes";
    }

    function isPropTypesStaticClassProperty(node) {
      return (
        node.type === "ClassProperty" &&
        node.static &&
        node.key.name === "propTypes"
      );
    }

    function propTypesAreWrappedInExact(node) {
      return node.type === "CallExpression" && node.callee.name === "exact";
    }

    return {
      AssignmentExpression(node) {
        if (
          isPropTypesNonClassProperty(node) &&
          !propTypesAreWrappedInExact(node.right)
        ) {
          context.report(node, PROPTYPES_MUST_USE_EXACT);
        }
      },
      ClassProperty(node) {
        if (
          isPropTypesStaticClassProperty(node) &&
          !propTypesAreWrappedInExact(node.value)
        ) {
          context.report(node, PROPTYPES_MUST_USE_EXACT);
        }
      }
    };
  }
};
