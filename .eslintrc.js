module.exports = {
  root: true,
  env: {
    browser: true,
    jquery: true,
    es6: true
  },
  globals: {
    'wx': 'readonly',
    'globalConfig': 'writable',
    'thinkingReport': 'writable'
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'semi': ['error', 'never'], // 禁用 分号
    'no-multiple-empty-lines': ['error'], // 代码空行 数量
    'linebreak-style': [0 ,'error', 'windows'], // 使用windows的换行
    'comma-dangle': [2, 'never'], //  对象数组最后一个不带逗号
    'no-trailing-spaces': 0, // 禁用 校验代码末尾带空格
    'import/no-dynamic-require': 0, // 禁用 动态require
    'import/no-unresolved': 0,
    'no-param-reassign': 0, // 声明为函数参数的变量可能会引起误解
    'max-len': ['error', 150], // 单行代码最大长度
    'guard-for-in': 0, // 禁用 禁用for in 循环
    'no-shadow': 0, // 禁用  禁止页面内相容参数名
    'object-shorthand': 0, // 禁用 禁止对象内使用带引号字符串
    'no-restricted-syntax': 0,
    "import/prefer-default-export": 0,
    "import/extensions": 'off',
    'eqeqeq': 0, // 关闭全等
    "no-var": 'error', //  禁用var，用let和const代替   
    'no-console': 'off', // 允许console.log 设置
    'no-nested-ternary': 'off' // 允许使用三元运算符
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  plugins: [
    'vue'
  ]
};
