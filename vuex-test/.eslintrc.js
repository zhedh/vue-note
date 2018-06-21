module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        '@vue/prettier'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        // allow debugger during development
        'no-multi-spaces': 0,
        'no-trailing-spaces': 0,
        'space-before-function-paren': 0, //函数参数前面要加空格
        'space-before-blocks': 0, //函数块前面要加空格
        'no-regex-spaces': 0,
        'semi': 0,//分号检查
        'indent': 'off',
        'vue/script-indent': [
            'error',
            4,
            {
                'baseIndent': 1
            }
        ],
        "prettier/prettier": [
            "error",
            {
                "singleQuote": true,
                "trailingComma": "none",
                "bracketSpacing": true,
                "jsxBracketSameLine": true,
                "parser": "flow"
            }
        ]
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}