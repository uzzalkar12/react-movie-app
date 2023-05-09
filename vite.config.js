import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';
// import fs from 'fs/promises';
import fs from "node:fs";
import * as esbuild from "esbuild";

const sourceJSPattern = /\/src\/.*\.js$/;
const rollupPlugin = (matchers) => ({
  name: "js-in-jsx",
  load(id) {
    if (matchers.some(matcher => matcher.test(id))) {
      const file = fs.readFileSync(id, { encoding: "utf-8" });
      return esbuild.transformSync(file, { loader: "jsx" });
    }
  }
});

// https://vitejs.dev/config/
export default defineConfig({
  // server:{
  //   port: 4200
  // },
  // resolve: {
  //   alias: {
  //     src: resolve(__dirname, 'src'),
  //   },
  // },
  // esbuild: {
  //   loader: 'jsx',
  //   include: /src\/.*\.jsx?$/,
  //   exclude: [],
  // },
  // optimizeDeps: {
  //   esbuildOptions: {
  //     plugins: [
  //       {
  //         name: 'load-js-files-as-jsx',
  //         setup(build) {
  //           build.onLoad(
  //               { filter: /src\\.*\.js$/ },
  //               async (args) => ({
  //                 loader: 'jsx',
  //                 contents: await fs.readFile(args.path, 'utf8'),
  //               })
  //           );
  //         },
  //       },
  //     ],
  //   },
  // },

  // esbuild: {
  //   loader: 'jsx',
  // },
  // optimizeDeps: {
  //   esbuildOptions: {
  //     loader: {
  //       '.js': 'jsx',
  //     },
  //   },
  // },

  plugins: [react()],
  build: {
    rollupOptions: {
      plugins: [
        rollupPlugin([sourceJSPattern])
      ],
    },
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
    },
  },
  esbuild: {
    loader: "jsx",
    include: [sourceJSPattern],
    exclude: [],
  },
  // esbuild: {
  //   loader: "jsx",
  //   include: /src\/.*\.jsx?$/,
  //   // loader: "tsx",
  //   // include: /src\/.*\.[tj]sx?$/,
  //   exclude: [],
  // },
  // optimizeDeps: {
  //   esbuildOptions: {
  //     plugins: [
  //       {
  //         name: "load-js-files-as-jsx",
  //         setup(build) {
  //           build.onLoad({ filter: /src\/.*\.js$/ }, async (args) => ({
  //             loader: "jsx",
  //             contents: await fs.readFile(args.path, "utf8"),
  //           }));
  //         },
  //       },
  //     ],
  //   },
  // },
})
