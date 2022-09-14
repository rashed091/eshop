
# Create a react typescript project from scratch

```
yarn init -y
```

#### Add react packages
```
yarn add react react-dom
```

#### Add typescript support packages
```
yarn add -D typescript @types/react @types/react-dom
```

#### Add typescript config tsconfig.json file
```json
{
  "compilerOptions": {
		"outDir": "./build/",
    "sourceMap": true,
    "noImplicitAny": true,
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": [
    "src"
  ]
}
```

#### Add babel dev dependencies
```
yarn add -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript @babel/plugin-transform-runtime babel-loader
```

#### Add babel config
```json
{
  "presets": [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      {
        "runtime": "automatic"
      }
    ],
    "@babel/preset-typescript"
  ],
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "regenerator": true
      }
    ]
  ]
}
```

#### Add webpack dev dependencies
```
yarn add -D webpack webpack-cli webpack-dev-server html-webpack-plugin
```

#### Add webpack CSS support
```
yarn add -D css-loader style-loader
```

#### Add a declarations.d.ts file
Allows us to do imline import of image files

#### Add webpack merge package
```
yarn add -D webpack-merge
```

#### Add Webpack support for react hot reload
```
yarn add -D @pmmmwh/react-refresh-webpack-plugin react-refresh
```

#### Add eslint support
```
yarn add -D eslint eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-import eslint-plugin-jsx-a11y eslint-config-prettier eslint-plugin-eslint-comments
```

#### Add eslint config
```javascript
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:eslint-comments/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-var-requires': 'off',
    'react/prop-types': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
}
```

#### Add prettier packages
```
yarn Add -D prettier eslint-config-prettier eslint-plugin-prettier
```

#### Add prettier config
```javascript
{
  semi: true,
  trailingComma: 'es5',
  singleQuote: true,
  printWidth: 80,
  tabWidth: 2,
  endOfLine: 'auto',
  bracketSpacing: true,
}
```

#### Add precommit packages
```
yarn add -D husky lint-staged
```

#### Add precommit config
```json
  "lint-staged": {
    "src/**/*.{js,jsx,ts,tsx,json}": [
      "eslint --fix"
    ],
    "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}": [
      "prettier --write"
    ]
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  }
```

#### Add async/await support
```
yarn add -D @babel/runtime @babel/plugin-transform-runtime 
```

#### Add static assets copy support
```
yarn add -D copy-webpack-plugin
```

#### Add bundle analyzer
```
yarn add -D webpack-bundle-analyzer
```

#### Add jest package
```
yarn add -D jest ts-jest jest-environment-jsdom @types/jest @testing-library/jest-dom @testing-library/react
```

#### Add jest config
```javascript
{
  verbose: true,
  resetMocks: true,
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mock__/mock.js',
  },
}
```

#### Add Playwright support
```
yarn create playwright
```
