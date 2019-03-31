module.exports = {
    env: {
        browser: false,
        es6: true,
        node: true
    },
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2017
    },
    extends: ['standard','plugin:prettier/recommended'],
    rules: {
        eqeqeq: 'off',
        'eol-last': 'off',
        'standard/no-callback-literal': 'off',
        'no-console': 'off',
        'new-cap': 'off',
        'camelcase': 'off',
        'handle-callback-err': 'off',
        'no-use-before-define': 'off',
        'no-extend-native': 'off',
        'no-case-declarations': 'off'
    },
    globals: {
        $: '$',
        angular: 'angular',
        toastr: 'toastr',
        editormain: 'editormain',
        editorFrontendHead: 'editorFrontendHead',
        editorBackEnd: 'editorBackEnd',
        editorFrontEnd: 'editorFrontEnd',
        editor: 'editor',
        private_ip_address: 'private_ip_address',
        public_ip_address: 'public_ip_address'
    }
};
