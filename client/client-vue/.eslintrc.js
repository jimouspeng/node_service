module.exports = {
    root: true, // 项目需要在编辑器下直接根目录打开，即 /client-vue/...  而不是/node_service/client/client-vue/... 参考https://www.cnblogs.com/hmy-666/p/16441069.html
    env: {
        browser: true,
        node: true,
    },
    extends: ['plugin:vue/vue3-essential', 'eslint:recommended', 'plugin:prettier/recommended'],
    parserOptions: {
        parser: '@babel/eslint-parser',
    },
    rules: {
        indent: ['error', 4],
        semi: ['error', 'always'],
        'max-len': [2, 240],
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    },
};
