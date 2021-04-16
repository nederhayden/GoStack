module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2021,
        sourceType: 'module',
    },
    plugins: ['react', 'prettier'],
    rules: {
        'prettier/prettier': 'error',
        'react/jsx-filename-extension': [
            'warn',
            { extensions: ['.jsx', '.js'] },
        ],
        'import/prefer-default-export': 'off',
        'react/state-in-constructor': [0, 'always'],
    },
};
