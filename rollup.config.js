import { terser } from "rollup-plugin-terser";

export default {
    input: "./index.js",
    watch: {
        include: "index.js",
    },
    output: [
        {
            file: "bundle.js",
            format: "cjs",
        },
        {
            file: "bundle.min.js",
            format: "iife",
            name: "version",
            plugins: [terser()],
        },
    ],
};
