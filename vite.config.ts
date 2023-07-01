/**
 * Copyright (c) Microsoft Corporation.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { defineConfig } from 'vite';
// @ts-ignore
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  build: {
    emptyOutDir: false,
    minify: false,
    sourcemap: true,
    rollupOptions: {
      input: {
        "service-worker": path.resolve(__dirname, 'src/sw.ts'),
        index: path.resolve(__dirname, 'index.html'),
      },
      output: {
        entryFileNames: assetInfo => {
          return assetInfo.name === 'service-worker'
             ? '[name].js'                  // put service worker in root
             : 'assets/js/[name]-[hash].js' // others in `assets/js/`
            },
          },
        },
  }
});
