// @ts-check

import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import tseslint from 'typescript-eslint'
import js from '@eslint/js'

const eslintConfig = defineConfig([
   ...nextVitals,
   {
      files: ['**/*.{js,ts,jsx,tsx}'],
      extends: [
         js.configs.recommended,
         tseslint.configs.strictTypeChecked,
         tseslint.configs.stylisticTypeChecked,
      ],
      languageOptions: {
         parserOptions: {
            projectService: true,
         },
      },
   },
   globalIgnores([
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
      'target',
   ]),
])

export default eslintConfig
