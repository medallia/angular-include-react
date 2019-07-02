module.exports = {
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended"
	],
	"parser": "babel-eslint",
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
	},
	"plugins": [ "react" ],
	"env": {
		"mocha": true,
		"node": true,
		"es6": true,
	},
	"rules": {
		"arrow-body-style": [ "error", "as-needed" ],
		"brace-style": [ "error", "1tbs", { allowSingleLine: true } ],
		"comma-dangle": [ "error", "always-multiline" ],
		"comma-spacing": [ "error", { "before": false, "after": true } ],
		"curly": [ "error", "all" ],
		"eol-last": "error",
		"eqeqeq": [ "error", "always", { "null": "ignore" } ],
		"guard-for-in": "error",
		"indent": [ "error", "tab", { SwitchCase: 1 } ],
		"key-spacing": [ "error", { beforeColon: false, afterColon: true } ],
		"keyword-spacing": [ "error", { after: true } ],
		"newline-before-return": "error",
		"no-bitwise": "error",
		"no-caller": "error",
		"no-confusing-arrow": [ "error", { allowParens: true } ],
		"no-console": "warn",
		"no-duplicate-imports": "error",
		"no-empty": "error",
		"no-implicit-coercion": [ "error", { allow: [ "!!" ] } ],
		"no-mixed-spaces-and-tabs": [ "error", "smart-tabs" ],
		"no-multiple-empty-lines": [ "error", { max: 1 } ],
		"no-shadow": "off",
		"no-spaced-func": "error",
		"no-trailing-spaces": "error",
		"no-undef": "error",
		"no-underscore-dangle": "off",
		"no-unexpected-multiline": "error",
		"no-unused-vars": "error",
		"no-use-before-define": "off",
		"no-useless-computed-key": "error",
		"no-useless-constructor": "error",
		"no-useless-rename": "error",
		"no-with": "error",
		"object-curly-spacing": [ "error", "always" ],
		"object-shorthand": "error",
		"one-var": [ "error", "never" ],
		"padded-blocks": [ "error", "never" ],
		"prefer-const": "error",
		"prefer-rest-params": "error",
		"prefer-spread": "error",
		"prefer-template": "error",
		"quotes": [ "error", "single" ],
		"rest-spread-spacing": "error",
		"semi": [ "error", "always" ],
		"space-before-blocks": [ "error", "always" ],
		"space-before-function-paren": [ "error", "never" ],
		"space-in-parens": [ "error", "never" ],
		"space-infix-ops": "error",
		"space-unary-ops": [ "error", { words: false, nonwords: false } ],
		"strict": "off",
		"symbol-description": "error",
		"template-curly-spacing": "error",
		"newline-per-chained-call": "off",
		"no-var": "error"
	},
	"globals": {
		"browser": true,
		"expect": true
	},
	"settings": {
		"react": {
			"version": "detect"
		}
	}
};
