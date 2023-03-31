'use strict';

module.exports = {
    customSyntax: require("postcss-scss"),
    plugins: ["stylelint-scss"],
    rules: {
        "color-named": "never",
        "declaration-no-important": true,
        "max-nesting-depth": 4,
        "block-no-empty": [
            true,
            {
                "ignore": [
                    "comments"
                ]
            }
        ],
        "color-no-invalid-hex": true,
        "comment-no-empty": true,
        "custom-property-no-missing-var-function": true,
        "declaration-block-no-duplicate-custom-properties": true,
        "declaration-block-no-duplicate-properties": true,
        "declaration-block-no-shorthand-property-overrides": true,
        "font-family-no-duplicate-names": true,
        "font-family-no-missing-generic-family-keyword": true,
        "function-calc-no-unspaced-operator": true,
        "function-linear-gradient-no-nonstandard-direction": true,
        "keyframe-declaration-no-important": true,
        "media-feature-name-no-unknown": true,
        "named-grid-areas-no-invalid": true,
        "no-descending-specificity": true,
        "no-duplicate-at-import-rules": true,
        "no-duplicate-selectors": true,
        "no-empty-source": true,
        "no-invalid-double-slash-comments": true,
        "no-invalid-position-at-import-rule": null,
        "no-irregular-whitespace": true,
        "property-no-unknown": true,
        "selector-pseudo-class-no-unknown": true,
        "selector-pseudo-element-no-unknown": true,
        "selector-type-no-unknown": [
            true,
            {
                "ignore": [
                    "custom-elements"
                ]
            }
        ],
        "string-no-newline": true,
        "unit-no-unknown": true,
        "alpha-value-notation": null,
        "at-rule-empty-line-before": [
            "always",
            {
                "except": [
                    "blockless-after-same-name-blockless",
                    "first-nested"
                ],
                "ignore": [
                    "after-comment"
                ]
            }
        ],
        "at-rule-no-vendor-prefix": true,
        "color-function-notation": null,
        "color-hex-length": "short",
        "comment-empty-line-before": null,
        "comment-whitespace-inside": null,
        "custom-property-empty-line-before": null,
        "custom-media-pattern": [
            "^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",
            {
                "message": "Expected custom media query name to be kebab-case"
            }
        ],
        "custom-property-pattern": [
            "^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",
            {
                "message": "Expected custom property name to be kebab-case"
            }
        ],
        "declaration-block-single-line-max-declarations": 1,
        "declaration-block-no-redundant-longhand-properties": null,
        "declaration-empty-line-before": [
            "always",
            {
                "except": [
                    "after-declaration",
                    "first-nested"
                ],
                "ignore": [
                    "after-comment",
                    "inside-single-line-block"
                ]
            }
        ],
        "font-family-name-quotes": "always-where-recommended",
        "function-name-case": "lower",
        "function-url-quotes": "always",
        "hue-degree-notation": "angle",
        "keyframes-name-pattern": [
            "^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",
            {
                "message": "Expected keyframe name to be kebab-case"
            }
        ],
        "length-zero-no-unit": true,
        "media-feature-name-no-vendor-prefix": true,
        "number-max-precision": 4,
        "property-no-vendor-prefix": true,
        "rule-empty-line-before": [
            "always-multi-line",
            {
                "except": [
                    "first-nested"
                ],
                "ignore": [
                    "after-comment"
                ]
            }
        ],
        "selector-attribute-quotes": "always",
        "selector-class-pattern": [
            "^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",
            {
                "message": "Expected class selector to be kebab-case"
            }
        ],
        "selector-id-pattern": [
            "^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",
            {
                "message": "Expected id selector to be kebab-case"
            }
        ],
        "selector-no-vendor-prefix": true,
        "selector-pseudo-element-colon-notation": "double",
        "selector-type-case": "lower",
        "shorthand-property-no-redundant-values": true,
        "value-keyword-case": "lower",
        "value-no-vendor-prefix": true,
        "at-rule-no-unknown": null,
        "scss/at-extend-no-missing-placeholder": true,
        "scss/at-if-no-null": true,
        "scss/at-import-no-partial-leading-underscore": true,
        "scss/at-import-partial-extension": "never",
        "scss/at-rule-no-unknown": true,
        "scss/comment-no-empty": true,
        "scss/declaration-nested-properties-no-divided-groups": true,
        "scss/dollar-variable-no-missing-interpolation": true,
        "scss/function-quote-no-quoted-strings-inside": true,
        "scss/function-unquote-no-unquoted-strings-inside": true,
        "scss/no-duplicate-mixins": true,
        "scss/no-global-function-names": true,
        "scss/operator-no-newline-after": true,
        "scss/operator-no-newline-before": true,
        "scss/operator-no-unspaced": true
    }
}