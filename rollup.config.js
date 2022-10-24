export default {
    input: "./index.js",
    watch: {
        include: "index.js",
    },
    output: {
        file: "bundle.js",
        format: "cjs",
    },
};
