import { TransformOptions } from "babel-core";

const transformOptions: TransformOptions = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: 'last 2 Chrome versions, last 2 Firefox versions',
        modules: false,
      }
    ],
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-object-rest-spread",
  ],
}

export default transformOptions;
